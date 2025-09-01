import React from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
    return (
        <section className="privacy-policy">
            <div className="privacy-header">
                <h1>Privacy Policy</h1>
            </div>

            <div className="privacy-content">
                <div className="policy-row">
                    <div className="policy-left">Who We Are</div>
                    <div className="policy-right">
                        KONASAL Legacy Partners ("we" or "us") provides financial coaching,
                        legacy planning, and wealth education to individuals and families.
                        This Policy applies to our website and services at konasallp.com
                    </div>
                </div>

                <div className="policy-row">
                    <div className="policy-left">What We Collect & How</div>
                    <div className="policy-right">
                        <strong>We may collect the following types of personal information:</strong>
                        <ul>
                            <li>Name, email, phone</li>
                            <li>Financial info (income, assets, employment, liabilities)</li>
                            <li>Usage data (IP, cookies, device info, pages visited)</li>
                        </ul>
                    </div>
                </div>

                <div className="policy-row">
                    <div className="policy-left">How We Collect It</div>
                    <div className="policy-right">
                        <ul>
                            <li>Through forms when clients inquire or sign up</li>
                            <li>Automated tracking (e.g., Google Analytics)</li>
                            <li>Email or messaging exchanges</li>
                        </ul>
                    </div>
                </div>

                <div className="policy-row">
                    <div className="policy-left">Why We Collect It</div>
                    <div className="policy-right">
                        <strong>We use your data for:</strong>
                        <ul>
                            <li>Delivering services (coaching sessions, planning tools)</li>
                            <li>Communicating updates & newsletters</li>
                            <li>Improving our content & services</li>
                            <li>Complying with legal obligations</li>
                        </ul>
                    </div>
                </div>

                <div className="policy-row">
                    <div className="policy-left">Who We Share Data With</div>
                    <div className="policy-right">
                        <strong>We do not sell or rent personal data.
                            We may share data with:</strong>
                        <ul>
                            <li>Service providers (email, payment processors)  who operate
                                under confidentiality</li>
                            <li>Legal/regulatory authorities if required by law</li>
                            <li>Affiliates (with safeguards) Under the <strong>Gramm–Leach–Bliley Act</strong>,
                                clients may have the right to opt out of
                                sharing with unaffiliated third parties. </li>
                        </ul>
                    </div>
                </div>

                <div className="policy-row">
                    <div className="policy-left">Data Security & Retention</div>
                    <div className="policy-right">
                        <strong> We implement safeguards to protect your infomation:</strong>
                        <ul>
                            <li>Access limited to authorized staff</li>
                            <li>Secure servers and encryption where
                                appropriate</li>
                            <li>We retain Personal Information only as
                                long as needed for the original purpose or
                                as required by law.</li>
                        </ul>
                    </div>
                </div>

                <div className="policy-row">
                    <div className="policy-left">Your Rights & Choices</div>
                    <div className="policy-right">
                        <strong>                        As outlined by FTC and CalOPPA, you have the right to:</strong>
                        <ul>
                            <li><strong>Access or request corrections</strong> to your
                                personal data</li>
                            <li><strong>Opt out</strong> of certain data sharing or
                                marketing communications</li>
                            <li><strong>Delete</strong> your data from our systems
                                upon request

                                California residents may have additional
                                rights under the <strong> California Consumer
                                    Privacy Act (CCPA)</strong> </li>
                        </ul>
                    </div>
                </div>

                <div className="policy-row">
                    <div className="policy-left">Use of Cookies & Tracking
                    </div>
                    <div className="policy-right">
                        We use cookies and similar technologies
                        to track website engagement and improve
                        user experience. We include a “Do Not
                        Track” disclosure and outline cookie
                        settings as required by <strong>CalOPPA</strong><br /> <strong><a href="https://en.wikipedia.org/wiki/California_Online_Privacy_Protection_Act?utm_source=chatgpt.com">Wikipedia.</a></strong>
                    </div>
                </div>

                <div className="policy-row">
                    <div className="policy-left">Children Under 13</div>
                    <div className="policy-right">
                        We do not knowingly collect data from
                        children under 13. If we become aware that
                        such data has been collected, we will
                        immediately delete it.
                    </div>
                </div>

                <div className="policy-row">
                    <div className="policy-left">Contact Us</div>
                    <div className="policy-right">
                        For questions, data access requests, or
                        privacy concerns:, <strong>email:
                        <a href="mailto:info@konasallp.com">info@konasallp.com</a></strong>
                    </div>
                </div>

                <div className="policy-row">
                    <div className="policy-left">Policy Updates</div>
                    <div className="policy-right">
                        We will update this Policy as needed. When changes occur, the Effective Date at the top will be stated. If substantial updates affect how personal data is used, we will notify you directly.
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PrivacyPolicy;
