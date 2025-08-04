import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../context/FormContext";
import ProgressBar from "../Component/ProgressBar";

const containerStyle = {
  maxWidth: 600,
  margin: "40px auto",
  padding: 20,
  backgroundColor: "white",
  borderRadius: 12,
  boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
};

const sectionHeaderStyle = {
  cursor: "pointer",
  backgroundColor: "#e0e0e0",
  padding: "10px 16px",
  borderRadius: 8,
  marginBottom: 8,
  fontWeight: 700,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const sectionContentStyle = {
  padding: "10px 16px",
  backgroundColor: "#fafafa",
  borderRadius: "0 0 8px 8px",
  marginBottom: 16,
};

const buttonStyle = {
  padding: "12px 24px",
  backgroundColor: "#4caf50",
  color: "white",
  fontWeight: "600",
  fontSize: 16,
  border: "none",
  borderRadius: 8,
  cursor: "pointer",
  marginTop: 20,
  width: "100%",
};

const errorStyle = {
  color: "red",
  fontSize: 14,
  marginTop: 10,
  fontWeight: 600,
};

const ReviewSubmit = () => {
  const { state, dispatch } = useContext(FormContext);
  const navigate = useNavigate();

  // Collapsible state
  const [openSections, setOpenSections] = useState({
    personal: true,
    jobdetails: false,
    bankdetails: false,
    emergencycontacts: false,
    documents: false,
  });

  const [submitError, setSubmitError] = useState("");

  const toggleSection = (name) => {
    setOpenSections((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const validateAll = () => {
    if (!state.personal?.fullName || state.personal.fullName.length < 3)
      return "Invalid Personal Details: Full Name is missing or too short";

    if (!state.jobdetails?.employeeId)
      return "Job Details incomplete: Employee ID missing";

    if (!state.bankdetails?.accountNumber)
      return "Bank Details incomplete: Account Number missing";

    if (
      !state.emergencycontacts?.contacts ||
      state.emergencycontacts.contacts.length === 0
    )
      return "At least one Emergency Contact is required";

    if (!state.documents || state.documents.length === 0)
      return "At least one document must be uploaded";

    return null;
  };

  const onSubmit = () => {
    const err = validateAll();
    if (err) {
      setSubmitError(err);
      return;
    }

    setSubmitError("");
    dispatch({ type: "SUBMIT_FORM" });
    navigate("/form/success");
  };

  return (
    <div style={containerStyle}>
      <ProgressBar step={6} totalSteps={6} />

      <h2 style={{ textAlign: "center", marginBottom: 24, color: "#2e7d32" }}>
        Review & Submit
      </h2>

      <div>
        <div
          style={sectionHeaderStyle}
          onClick={() => toggleSection("personal")}
          aria-expanded={openSections.personal}
          role="button"
          tabIndex={0}
        >
          <span>Personal Details</span>
          <span>{openSections.personal ? "▲" : "▼"}</span>
        </div>
        {openSections.personal && (
          <div style={sectionContentStyle}>
            <p><b>Full Name:</b> {state.personal?.fullName || "-"}</p>
            <p><b>Email:</b> {state.personal?.email || "-"}</p>
            <p><b>Phone:</b> {state.personal?.phone || "-"}</p>
          </div>
        )}
      </div>

      <div>
        <div
          style={sectionHeaderStyle}
          onClick={() => toggleSection("jobdetails")}
          aria-expanded={openSections.jobdetails}
          role="button"
          tabIndex={0}
        >
          <span>Job Details</span>
          <span>{openSections.jobdetails ? "▲" : "▼"}</span>
        </div>
        {openSections.jobdetails && (
          <div style={sectionContentStyle}>
            <p><b>Employee ID:</b> {state.jobdetails?.employeeId || "-"}</p>
            <p><b>Department:</b> {state.jobdetails?.department || "-"}</p>
            <p><b>Role/Designation:</b> {state.jobdetails?.role || "-"}</p>
            <p><b>Joining Date:</b> {state.jobdetails?.joiningDate || "-"}</p>
            <p><b>Work Location:</b> {state.jobdetails?.workLocation || "-"}</p>
          </div>
        )}
      </div>


      <div>
        <div
          style={sectionHeaderStyle}
          onClick={() => toggleSection("bankdetails")}
          aria-expanded={openSections.bankdetails}
          role="button"
          tabIndex={0}
        >
          <span>Bank Details</span>
          <span>{openSections.bankdetails ? "▲" : "▼"}</span>
        </div>
        {openSections.bankdetails && (
          <div style={sectionContentStyle}>
            <p><b>Account Number:</b> {state.bankdetails?.accountNumber || "-"}</p>
            <p><b>IFSC Code:</b> {state.bankdetails?.ifscCode || "-"}</p>
            <p><b>PAN Number:</b> {state.bankdetails?.panNumber || "-"}</p>
            <p><b>UPI ID:</b> {state.bankdetails?.upiId || "-"}</p>
          </div>
        )}
      </div>

      <div>
        <div
          style={sectionHeaderStyle}
          onClick={() => toggleSection("emergencycontacts")}
          aria-expanded={openSections.emergencycontacts}
          role="button"
          tabIndex={0}
        >
          <span>Emergency Contacts</span>
          <span>{openSections.emergencycontacts ? "▲" : "▼"}</span>
        </div>
        {openSections.emergencycontacts && (
          <div style={sectionContentStyle}>
            {state.emergencycontacts?.contacts?.length > 0 ? (
              state.emergencycontacts.contacts.map((c, i) => (
                <div key={i} style={{ marginBottom: 10 }}>
                  <p>
                    <b>Name:</b> {c.name || "-"} | <b>Relation:</b> {c.relation || "-"} |{" "}
                    <b>Phone:</b> {c.phone || "-"}
                  </p>
                </div>
              ))
            ) : (
              <p>No emergency contacts added</p>
            )}
          </div>
        )}
      </div>

      <div>
        <div
          style={sectionHeaderStyle}
          onClick={() => toggleSection("documents")}
          aria-expanded={openSections.documents}
          role="button"
          tabIndex={0}
        >
          <span>Uploaded Documents</span>
          <span>{openSections.documents ? "▲" : "▼"}</span>
        </div>
        {openSections.documents && (
          <div style={sectionContentStyle}>
            {state.documents?.length > 0 ? (
              <ul style={{ paddingLeft: 20 }}>
                {state.documents.map((file, i) => (
                  <li key={i}>{file.name}</li>
                ))}
              </ul>
            ) : (
              <p>No documents uploaded</p>
            )}
          </div>
        )}
      </div>

      {submitError && <p style={errorStyle}>{submitError}</p>}

      <button onClick={onSubmit} style={buttonStyle}>
        Submit
      </button>
    </div>
  );
};

export default ReviewSubmit;
