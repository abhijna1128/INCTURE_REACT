import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../context/FormContext";
import ProgressBar from "../Component/ProgressBar";

const containerStyle = {
  maxWidth: 520,
  margin: "40px auto",
  padding: 20,
  backgroundColor: "white",
  borderRadius: 12,
  boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
};

const labelStyle = {
  fontWeight: 600,
  color: "#333",
  display: "block",
  marginBottom: 10,
};

const fileListStyle = {
  marginTop: 10,
  listStyleType: "none",
  paddingLeft: 0,
};

const fileItemStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 8,
  backgroundColor: "#f9f9f9",
  padding: "6px 10px",
  borderRadius: 6,
  fontSize: 14,
};

const removeBtnStyle = {
  backgroundColor: "#e53935",
  border: "none",
  borderRadius: 4,
  color: "white",
  cursor: "pointer",
  padding: "4px 8px",
  fontSize: 12,
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
};

const errorStyle = {
  color: "red",
  marginTop: 8,
  fontSize: 13,
};

const DocumentUpload = () => {
  const { state, dispatch } = useContext(FormContext);
  const navigate = useNavigate();

  const [files, setFiles] = useState(state.documents || []);
  const [error, setError] = useState("");

  useEffect(() => {
    // clear error on files change
    setError("");
  }, [files]);

  const onFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);

    // Check if all are pdf
    const allPDF = selectedFiles.every(
      (f) => f.type === "application/pdf" || f.name.toLowerCase().endsWith(".pdf")
    );

    if (!allPDF) {
      setError("Only PDF files are allowed");
      return;
    }

    if (files.length + selectedFiles.length > 5) {
      setError("You can upload maximum 5 files");
      return;
    }

    setFiles((prev) => [...prev, ...selectedFiles]);
  };

  const removeFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (files.length === 0) {
      setError("Please upload at least one document");
      return;
    }
    dispatch({ type: "UPDATE_DOCUMENTS", payload: files });
    navigate("/form/review");
  };

  return (
    <div style={containerStyle}>
      <ProgressBar step={5} totalSteps={6} />
      <h2 style={{ textAlign: "center", marginBottom: 24, color: "#2e7d32" }}>
       Document Upload
      </h2>

      <form onSubmit={onSubmit}>
        <label style={labelStyle} htmlFor="documents">
          Upload PDF files (Aadhaar, PAN, Resume)
        </label>
        <input
          id="documents"
          type="file"
          accept=".pdf"
          multiple
          onChange={onFileChange}
          style={{ marginBottom: 10 }}
        />
        {error && <p style={errorStyle}>{error}</p>}

        <ul style={fileListStyle}>
          {files.map((file, idx) => (
            <li key={idx} style={fileItemStyle}>
              <span>{file.name}</span>
              <button
                type="button"
                onClick={() => removeFile(idx)}
                style={removeBtnStyle}
                title="Remove File"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>

        <button type="submit" style={buttonStyle}>
          Next
        </button>
      </form>
    </div>
  );
};

export default DocumentUpload;
