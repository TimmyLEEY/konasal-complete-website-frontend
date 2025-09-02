import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-50 to-indigo-100 text-center px-6">
      {/* Animated 404 */}
      <motion.h1
        className="text-[120px] font-extrabold text-indigo-600 drop-shadow-lg"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        404
      </motion.h1>

      {/* Message */}
      <motion.h2
        className="text-3xl font-semibold text-gray-800 mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Oops! Page not found
      </motion.h2>

      <motion.p
        className="text-gray-600 mt-2 max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        The page you’re looking for doesn’t exist or has been moved.
      </motion.p>

      {/* Button back to home */}
      <motion.div
        className="mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <Link
          to="/"
          className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-xl shadow-md hover:bg-indigo-700 transition"
        >
          Go Back Home
        </Link>
      </motion.div>

      {/* Extra decoration (animated circle) */}
      <motion.div
        className="absolute bottom-10 w-32 h-32 bg-indigo-200 rounded-full opacity-50"
        initial={{ scale: 0 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </div>
  );
};

export default NotFound;
