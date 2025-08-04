import React from "react";

const DatePicker = React.forwardRef(({ label, error, ...rest }, ref) => (
  <div style={{ marginBottom: 16 }}>
    <label>{label}</label>
    <input type="date" ref={ref} {...rest} style={{ display: "block", width: "100%", padding: 8, marginTop: 4 }} />
    {error && <p style={{ color: "red", margin: 0 }}>{error.message}</p>}
  </div>
));

export default DatePicker;
