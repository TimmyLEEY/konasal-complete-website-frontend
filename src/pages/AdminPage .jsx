import React, { useEffect, useState } from "react";
import "./AdminPage.css";

const AdminPage = () => {
  const [forms, setForms] = useState([]);
  const [ebookForms, setEbookForms] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("userToken");

  const fetchData = async () => {
    if (!token) {
      setError("You must be logged in as admin to access this page.");
      return;
    }

    try {
      setLoading(true);
      const resForms = await fetch("https://konasal-complete-website-backend.onrender.com/api/forms", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const formsData = await resForms.json();
      setForms(formsData || []);

      const resEbook = await fetch("https://konasal-complete-website-backend.onrender.com/api/ebook", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const ebookData = await resEbook.json();
      setEbookForms(ebookData || []);

      setError("");
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Failed to fetch data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id, type) => {
    if (!window.confirm("Are you sure you want to delete this submission?")) return;
    try {
      const endpoint = type === "ebook" ? "ebook" : "forms";
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/${endpoint}/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Failed to delete");

      if (type === "ebook") {
        setEbookForms(ebookForms.filter((form) => form._id !== id));
      } else {
        setForms(forms.filter((form) => form._id !== id));
      }
    } catch (err) {
      console.error(err);
      setError("Error deleting submission.");
    }
  };

  const renderEbookTable = () => (
    <div className="table-section">
      <h2>Ebook Form Submissions</h2>
      <div className="table-wrapper">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Submitted At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {ebookForms.length > 0 ? (
              ebookForms.map((item) => (
                <tr key={item._id}>
                  <td data-label="Name">{item.name}</td>
                  <td data-label="Email">{item.email}</td>
                  <td data-label="Phone">{item.phone || "N/A"}</td>
                  <td data-label="Submitted At">{new Date(item.createdAt).toLocaleString()}</td>
                  <td data-label="Actions">
                    <button onClick={() => handleDelete(item._id, "ebook")}>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" style={{ textAlign: "center" }}>No ebook submissions yet.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderFormsTable = () => (
    <div className="table-section">
      <h2>Other Form Submissions</h2>
      <div className="table-wrapper">
        <table className="admin-table">
          <thead>
            <tr>
              <th>User</th>
              <th>Form Type</th>
              <th>Data</th>
              <th>Submitted At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {forms.length > 0 ? (
              forms.map((form) => (
                <tr key={form._id}>
                  <td data-label="User">
                    {form.userId?.name} ({form.userId?.email})
                  </td>
                  <td data-label="Form Type">{form.formType}</td>
                  <td data-label="Data">
                    <pre>{JSON.stringify(form.data, null, 2)}</pre>
                  </td>
                  <td data-label="Submitted At">{new Date(form.submittedAt).toLocaleString()}</td>
                  <td data-label="Actions">
                    <button onClick={() => handleDelete(form._id, "forms")}>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" style={{ textAlign: "center" }}>No submissions yet.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );

  if (error) {
    return (
      <div className="page-container">
        <h1>Admin Dashboard</h1>
        <p style={{ color: "red", textAlign: "center", marginTop: "20px" }}>{error}</p>
        <button onClick={fetchData}>Retry</button>
      </div>
    );
  }

  return (
    <div className="page-container">
      <h1>Admin Dashboard</h1>
      <button className="refresh-btn" onClick={fetchData} disabled={loading}>
        {loading ? "Loading..." : "Refresh Data"}
      </button>

      {renderEbookTable()}
      {renderFormsTable()}
    </div>
  );
};

export default AdminPage;
