import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../context/FormContext";
import ProgressBar from "../Component/ProgressBar";

const inputStyle = {
  width: "100%",
  padding: "10px 12px",
  borderRadius: 6,
  border: "1px solid #ccc",
  fontSize: 16,
  marginBottom: 8,
  boxSizing: "border-box",
};

const labelStyle = {
  fontWeight: 600,
  marginBottom: 6,
  display: "block",
  color: "#333",
};

const errorStyle = {
  color: "#d93025",
  fontSize: 13,
  marginBottom: 12,
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
  width: "100%",
  marginTop: 12,
  transition: "background-color 0.3s ease",
};

const Personal = () => {
  const { state, dispatch } = useContext(FormContext);
  const navigate = useNavigate();
  const [photoPreview, setPhotoPreview] = useState(state.personal?.photoPreview || "");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: state.personal,
  });

  useEffect(() => {
    if (state.personal) {
      Object.entries(state.personal).forEach(([key, val]) => setValue(key, val));
      setPhotoPreview(state.personal.photoPreview || "");
    }
  }, [state.personal, setValue]);

  const validateAge = (value) => {
    if (!value) return "Date of Birth is required";
    const dob = new Date(value);
    const ageDifMs = Date.now() - dob.getTime();
    const ageDate = new Date(ageDifMs);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);
    return age >= 18 || "Must be at least 18 years old";
  };

  const onSubmit = (data) => {
    dispatch({ type: "UPDATE_PERSONAL", payload: { ...data, photoPreview } });
    navigate("/form/job");
  };

  const onPhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setValue("profilePhoto", file);
      const reader = new FileReader();
      reader.onloadend = () => setPhotoPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={{ maxWidth: 520, margin: "40px auto", padding: 20, boxShadow: "0 2px 12px rgba(0,0,0,0.1)", borderRadius: 12, backgroundColor: "white" }}>
      <ProgressBar step={1} totalSteps={6} />
      <h2 style={{ textAlign: "center", marginBottom: 24, color: "#2e7d32" }}>Personal Details</h2>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label style={labelStyle} htmlFor="fullName">Full Name</label>
        <input
          id="fullName"
          style={inputStyle}
          {...register("fullName", {
            required: "Full Name is required",
            minLength: { value: 3, message: "Minimum 3 characters" },
          })}
          placeholder="Enter your full name"
        />
        {errors.fullName && <p style={errorStyle}>{errors.fullName.message}</p>}

        <label style={labelStyle} htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          style={inputStyle}
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email format" },
          })}
          placeholder="Enter your email address"
        />
        {errors.email && <p style={errorStyle}>{errors.email.message}</p>}

        <label style={labelStyle} htmlFor="phone">Phone Number</label>
        <input
          id="phone"
          style={inputStyle}
          {...register("phone", {
            required: "Phone number is required",
            pattern: { value: /^\d{10}$/, message: "Must be 10 digits" },
          })}
          placeholder="Enter 10-digit phone number"
        />
        {errors.phone && <p style={errorStyle}>{errors.phone.message}</p>}

        <label style={labelStyle} htmlFor="dob">Date of Birth</label>
        <input
          id="dob"
          type="date"
          style={inputStyle}
          {...register("dob", {
            required: "Date of Birth is required",
            validate: validateAge,
          })}
        />
        {errors.dob && <p style={errorStyle}>{errors.dob.message}</p>}

        <div style={{ marginTop: 20, marginBottom: 12 }}>
          <label style={labelStyle}>Profile Photo</label>
          <input
            type="file"
            accept="image/*"
            onChange={onPhotoChange}
            style={{ marginTop: 6 }}
          />
          {photoPreview && (
            <img
              src={photoPreview}
              alt="Profile Preview"
              style={{ width: 120, height: 120, objectFit: "cover", marginTop: 12, borderRadius: "50%", boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }}
            />
          )}
        </div>

        <button type="submit" style={buttonStyle}>
          Next
        </button>
      </form>
    </div>
  );
};

export default Personal;
