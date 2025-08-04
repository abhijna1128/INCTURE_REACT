import React from "react";

const Input = React.forwardRef(({ label, error, type = "text", ...rest }, ref) => (
  <div style={{ marginBottom: 16 }}>
    <label>{label}</label>
    <input type={type} ref={ref} {...rest} style={{ display: "block", width: "100%", padding: 8, marginTop: 4 }} />
    {error && <p style={{ color: "red", margin: 0 }}>{error.message}</p>}
  </div>
));

export default Input;
