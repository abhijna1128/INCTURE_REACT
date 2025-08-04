import React from "react";

const Dropdown = React.forwardRef(({ label, options, error, ...rest }, ref) => (
  <div style={{ marginBottom: 16 }}>
    <label>{label}</label>
    <select ref={ref} {...rest} style={{ display: "block", width: "100%", padding: 8, marginTop: 4 }}>
      <option value="">Select</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
    {error && <p style={{ color: "red", margin: 0 }}>{error.message}</p>}
  </div>
));

export default Dropdown;
