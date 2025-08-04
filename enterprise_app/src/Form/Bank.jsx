import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../context/FormContext";
import ProgressBar from "../Component/ProgressBar";

const containerStyle = {
  maxWidth: 480,
  margin: "40px auto",
  padding: 24,
  backgroundColor: "white",
  borderRadius: 12,
  boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
};

const labelStyle = {
  display: "block",
  fontWeight: 600,
  marginBottom: 6,
  color: "#333",
};

const inputStyle = {
  width: "100%",
  padding: 8,
  fontSize: 14,
  marginBottom: 14,
  borderRadius: 6,
  border: "1px solid #ccc",
};

const errorStyle = {
  color: "red",
  marginBottom: 12,
  fontSize: 13,
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
};

const BankDetails = () => {
  const { state, dispatch } = useContext(FormContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: state.bankdetails || {},
  });

  const validateIFSC = (value) => {
    const re = /^[A-Z]{4}0[A-Z0-9]{6}$/;
    return re.test(value) || "Invalid IFSC Code format";
  };

  const validatePAN = (value) => {
    const re = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    return re.test(value) || "Invalid PAN Number format";
  };

  const validateUPI = (value) => {
    if (!value) return true; // optional
    return value.includes("@") || "UPI ID must include '@'";
  };

  const onSubmit = (data) => {
    dispatch({ type: "UPDATE_BANKDETAILS", payload: data });
    navigate("/form/emergency");
  };

  return (
    <div style={containerStyle}>
      <ProgressBar step={3} totalSteps={6} />
      <h2 style={{ textAlign: "center", marginBottom: 24, color: "#2e7d32" }}>
       Bank Details
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label style={labelStyle} htmlFor="accountNumber">
          Bank Account Number
        </label>
        <input
          id="accountNumber"
          style={inputStyle}
          {...register("accountNumber", {
            required: "Bank Account Number is required",
            pattern: {
              value: /^\d{9,18}$/,
              message: "Account Number must be 9 to 18 digits",
            },
          })}
          placeholder="Enter Account Number"
        />
        {errors.accountNumber && <p style={errorStyle}>{errors.accountNumber.message}</p>}

        <label style={labelStyle} htmlFor="ifscCode">
          IFSC Code
        </label>
        <input
          id="ifscCode"
          style={inputStyle}
          {...register("ifscCode", {
            required: "IFSC Code is required",
            validate: validateIFSC,
            setValueAs: (v) => v.toUpperCase(),
          })}
          placeholder="Example: HDFC0001234"
          maxLength={11}
        />
        {errors.ifscCode && <p style={errorStyle}>{errors.ifscCode.message}</p>}

        <label style={labelStyle} htmlFor="panNumber">
          PAN Number
        </label>
        <input
          id="panNumber"
          style={inputStyle}
          {...register("panNumber", {
            required: "PAN Number is required",
            validate: validatePAN,
            setValueAs: (v) => v.toUpperCase(),
          })}
          placeholder="Example: ABCDE1234F"
          maxLength={10}
        />
        {errors.panNumber && <p style={errorStyle}>{errors.panNumber.message}</p>}

        <label style={labelStyle} htmlFor="upiId">
          UPI ID (Optional)
        </label>
        <input
          id="upiId"
          style={inputStyle}
          {...register("upiId", {
            validate: validateUPI,
          })}
          placeholder="example@bank"
        />
        {errors.upiId && <p style={errorStyle}>{errors.upiId.message}</p>}

        <button type="submit" style={buttonStyle}>
          Next
        </button>
      </form>
    </div>
  );
};

export default BankDetails;
