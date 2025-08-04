import React, { useContext, useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../context/FormContext";
import Input from "../Component/Input";
import Dropdown from "../Component/Dropdown";
import ProgressBar from "../Component/ProgressBar";

const relations = ["Father", "Mother", "Spouse", "Sibling", "Friend", "Other"];

const containerStyle = {
  maxWidth: 600,
  margin: "40px auto",
  padding: 24,
  backgroundColor: "white",
  borderRadius: 12,
  boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
};

const buttonPrimaryStyle = {
  padding: "12px 24px",
  backgroundColor: "#4caf50",
  color: "white",
  fontWeight: "600",
  fontSize: 16,
  border: "none",
  borderRadius: 8,
  cursor: "pointer",
  marginTop: 16,
  minWidth: 120,
  transition: "background-color 0.3s ease",
};

const buttonSecondaryStyle = {
  padding: "12px 24px",
  backgroundColor: "#1976d2",
  color: "white",
  fontWeight: "600",
  fontSize: 16,
  border: "none",
  borderRadius: 8,
  cursor: "pointer",
  marginTop: 16,
  marginRight: 10,
  minWidth: 120,
  transition: "background-color 0.3s ease",
};

const buttonRemoveStyle = {
  position: "absolute",
  top: 12,
  right: 12,
  backgroundColor: "#d32f2f",
  border: "none",
  color: "white",
  borderRadius: 6,
  padding: "6px 12px",
  cursor: "pointer",
  fontWeight: "600",
};

const Emergency = () => {
  const { state, dispatch } = useContext(FormContext);
  const navigate = useNavigate();

  const { control, register, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: { contacts: state.emergency.length ? state.emergency : [{ name: "", relation: "", phone: "" }] },
  });

  const { fields, append, remove } = useFieldArray({ control, name: "contacts" });

  useEffect(() => {
    if (state.emergency.length) reset({ contacts: state.emergency });
  }, [state.emergency, reset]);

  const onSubmit = (data) => {
    dispatch({ type: "UPDATE_EMERGENCY", payload: data.contacts });
    navigate("/form/documents");
  };

  return (
    <div style={containerStyle}>
      <ProgressBar step={4} totalSteps={6} />
      <h2 style={{ textAlign: "center", marginBottom: 24, color: "#2e7d32" }}>
        Step 4: Emergency Contacts
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {fields.map((field, index) => (
          <div
            key={field.id}
            style={{
              border: "1px solid #ccc",
              padding: 16,
              marginBottom: 16,
              borderRadius: 6,
              position: "relative",
              backgroundColor: "#fafafa",
            }}
          >
            <Input
              label="Name"
              {...register(`contacts.${index}.name`, {
                required: "Name required",
                minLength: { value: 3, message: "Min 3 letters" },
              })}
              error={errors?.contacts?.[index]?.name}
            />
            <Dropdown
              label="Relation"
              options={relations}
              {...register(`contacts.${index}.relation`, { required: "Relation required" })}
              error={errors?.contacts?.[index]?.relation}
            />
            <Input
              label="Phone Number"
              {...register(`contacts.${index}.phone`, {
                required: "Phone required",
                pattern: { value: /^\d{10}$/, message: "Must be 10 digits" },
              })}
              error={errors?.contacts?.[index]?.phone}
            />

            {fields.length > 1 && (
              <button
                type="button"
                onClick={() => remove(index)}
                style={buttonRemoveStyle}
                aria-label="Remove contact"
              >
                Remove
              </button>
            )}
          </div>
        ))}

        <button
          type="button"
          onClick={() => append({ name: "", relation: "", phone: "" })}
          style={{ ...buttonSecondaryStyle, width: "100%" }}
        >
          Add Contact
        </button>

        <div style={{ marginTop: 24, display: "flex", justifyContent: "flex-end" }}>
          <button
            type="button"
            onClick={() => navigate("/form/bank")}
            style={buttonSecondaryStyle}
          >
            Back
          </button>
          <button type="submit" style={buttonPrimaryStyle}>
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Emergency;
