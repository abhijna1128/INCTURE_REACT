// import React, { useContext } from "react";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import { FormContext } from "../context/FormContext";
// import ProgressBar from "../Component/ProgressBar";

// const containerStyle = {
//   maxWidth: 480,
//   margin: "40px auto",
//   padding: 24,
//   backgroundColor: "white",
//   borderRadius: 12,
//   boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
//   fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
// };

// const labelStyle = {
//   display: "block",
//   fontWeight: 600,
//   marginBottom: 6,
//   color: "#333",
// };

// const inputStyle = {
//   width: "100%",
//   padding: 8,
//   fontSize: 14,
//   marginBottom: 14,
//   borderRadius: 6,
//   border: "1px solid #ccc",
// };

// const errorStyle = {
//   color: "red",
//   marginBottom: 12,
//   fontSize: 13,
// };

// const buttonStyle = {
//   padding: "12px 24px",
//   backgroundColor: "#093aa3ff",
//   color: "white",
//   fontWeight: "600",
//   fontSize: 16,
//   border: "none",
//   borderRadius: 8,
//   cursor: "pointer",
// };

// const departments = ["Engineering", "HR", "Sales", "Marketing", "Finance", "Operations"];

// const workLocations = [
//   "New York",
//   "San Francisco",
//   "Mumbai",
//   "Bangalore",
//   "London",
//   "Berlin",
//   "Remote",
// ];

// const JobDetails = () => {
//   const { state, dispatch } = useContext(FormContext);
//   const navigate = useNavigate();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     watch,
//   } = useForm({
//     defaultValues: state.jobdetails || {},
//   });

//   const onSubmit = (data) => {
//     dispatch({ type: "UPDATE_JOBDETAILS", payload: data });
//     navigate("/form/bank");
//   };

//   // Validate Joining Date not in past
//   const validateJoiningDate = (dateStr) => {
//     if (!dateStr) return "Joining Date is required";
//     const today = new Date();
//     const inputDate = new Date(dateStr);
//     return inputDate >= today || "Joining Date cannot be in the past";
//   };

//   // For search filter in location dropdown, we will do a basic select with filter option
//   // Since React-select or other libs are not used here, simple <select> is used

//   return (
//     <div style={containerStyle}>
//       <ProgressBar step={2} totalSteps={6} />
//       <h2 style={{ textAlign: "center", marginBottom: 24, color: "#2e7d32" }}>
//         Step 2: Job Details
//       </h2>

//       <form onSubmit={handleSubmit(onSubmit)}>
//         <label style={labelStyle} htmlFor="employeeId">
//           Employee ID (unique, alphanumeric)
//         </label>
//         <input
//           id="employeeId"
//           style={inputStyle}
//           {...register("employeeId", {
//             required: "Employee ID is required",
//             pattern: {
//               value: /^[a-zA-Z0-9]+$/,
//               message: "Employee ID must be alphanumeric",
//             },
//           })}
//           placeholder="Employee ID"
//         />
//         {errors.employeeId && <p style={errorStyle}>{errors.employeeId.message}</p>}

//         <label style={labelStyle} htmlFor="department">
//           Department
//         </label>
//         <select
//           id="department"
//           style={inputStyle}
//           {...register("department", { required: "Department is required" })}
//         >
//           <option value="">Select Department</option>
//           {departments.map((d) => (
//             <option key={d} value={d}>
//               {d}
//             </option>
//           ))}
//         </select>
//         {errors.department && <p style={errorStyle}>{errors.department.message}</p>}

//         <label style={labelStyle} htmlFor="role">
//           Role / Designation
//         </label>
//         <input
//           id="role"
//           style={inputStyle}
//           {...register("role", {
//             required: "Role is required",
//             minLength: { value: 2, message: "Role should be at least 2 characters" },
//           })}
//           placeholder="Role or Designation"
//         />
//         {errors.role && <p style={errorStyle}>{errors.role.message}</p>}

//         <label style={labelStyle} htmlFor="joiningDate">
//           Joining Date
//         </label>
//         <input
//           type="date"
//           id="joiningDate"
//           style={inputStyle}
//           {...register("joiningDate", {
//             validate: validateJoiningDate,
//           })}
//         />
//         {errors.joiningDate && <p style={errorStyle}>{errors.joiningDate.message}</p>}

//         <label style={labelStyle} htmlFor="workLocation">
//           Work Location
//         </label>
//         <select
//           id="workLocation"
//           style={inputStyle}
//           {...register("workLocation", { required: "Work Location is required" })}
//         >
//           <option value="">Select Location</option>
//           {workLocations.map((loc) => (
//             <option key={loc} value={loc}>
//               {loc}
//             </option>
//           ))}
//         </select>
//         {errors.workLocation && <p style={errorStyle}>{errors.workLocation.message}</p>}

//         <button type="submit" style={buttonStyle}>
//           Next
//         </button>
//       </form>
//     </div>
//   );
// };

// export default JobDetails;
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

const JobDetails = () => {
  const { state, dispatch } = useContext(FormContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: state.jobdetails || {},
  });

  const onSubmit = (data) => {
    dispatch({ type: "UPDATE_JOBDETAILS", payload: data });
    navigate("/form/bank");
  };

  // Validate Joining Date not in past
  const validateJoiningDate = (dateStr) => {
    if (!dateStr) return "Joining Date is required";
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset time to compare dates only
    const inputDate = new Date(dateStr);
    return inputDate >= today || "Joining Date cannot be in the past";
  };

  return (
    <div style={containerStyle}>
      <ProgressBar step={2} totalSteps={6} />
      <h2 style={{ textAlign: "center", marginBottom: 24, color: "#2e7d32" }}>
         Job Details
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label style={labelStyle} htmlFor="employeeId">
          Employee ID (unique, alphanumeric)
        </label>
        <input
          id="employeeId"
          style={inputStyle}
          {...register("employeeId", {
            required: "Employee ID is required",
            pattern: {
              value: /^[a-zA-Z0-9]+$/,
              message: "Employee ID must be alphanumeric",
            },
          })}
          placeholder="Employee ID"
        />
        {errors.employeeId && <p style={errorStyle}>{errors.employeeId.message}</p>}

        <label style={labelStyle} htmlFor="department">
          Department
        </label>
        <select
          id="department"
          style={inputStyle}
          {...register("department", { required: "Department is required" })}
        >
          <option value="">Select Department</option>
          <option value="Engineering">Engineering</option>
          <option value="HR">HR</option>
          <option value="Sales">Sales</option>
          <option value="Marketing">Marketing</option>
          <option value="Finance">Finance</option>
          <option value="Operations">Operations</option>
        </select>
        {errors.department && <p style={errorStyle}>{errors.department.message}</p>}

        <label style={labelStyle} htmlFor="role">
          Role / Designation
        </label>
        <input
          id="role"
          style={inputStyle}
          {...register("role", {
            required: "Role is required",
            minLength: { value: 2, message: "Role should be at least 2 characters" },
          })}
          placeholder="Role or Designation"
        />
        {errors.role && <p style={errorStyle}>{errors.role.message}</p>}

        <label style={labelStyle} htmlFor="joiningDate">
          Joining Date
        </label>
        <input
          type="date"
          id="joiningDate"
          style={inputStyle}
          {...register("joiningDate", {
            validate: validateJoiningDate,
          })}
        />
        {errors.joiningDate && <p style={errorStyle}>{errors.joiningDate.message}</p>}

        <label style={labelStyle} htmlFor="workLocation">
          Work Location
        </label>
        <select
          id="workLocation"
          style={inputStyle}
          {...register("workLocation", { required: "Work Location is required" })}
        >
          <option value="">Select Location</option>
          <option value="New York">New York</option>
          <option value="San Francisco">San Francisco</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Bangalore">Bangalore</option>
          <option value="London">London</option>
          <option value="Berlin">Berlin</option>
          <option value="Remote">Remote</option>
        </select>
        {errors.workLocation && <p style={errorStyle}>{errors.workLocation.message}</p>}

        <button type="submit" style={buttonStyle}>
          Next
        </button>
      </form>
    </div>
  );
};

export default JobDetails;
