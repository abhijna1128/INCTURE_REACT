import React from "react";

const ProgressBar = ({ step, totalSteps }) => {
  const steps = Array.from({ length: totalSteps }, (_, i) => i + 1);

  return (
    <div style={{ maxWidth: 600, margin: "20px auto", padding: "0 10px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          position: "relative",
          marginBottom: 20,
        }}
      >
        {/* Progress Line */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: 15,
            right: 15,
            height: 4,
            background: "#ddd",
            zIndex: 0,
            transform: "translateY(-50%)",
            borderRadius: 2,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: 15,
            width: `${((step - 1) / (totalSteps - 1)) * 100}%`,
            height: 4,
            background: "#4caf50",
            zIndex: 1,
            transform: "translateY(-50%)",
            borderRadius: 2,
            transition: "width 0.4s ease",
          }}
        />

        {/* Step Circles */}
        {steps.map((s) => (
          <div
            key={s}
            style={{
              position: "relative",
              zIndex: 2,
              width: 30,
              height: 30,
              borderRadius: "50%",
              backgroundColor: s <= step ? "#4caf50" : "#eee",
              color: s <= step ? "white" : "#999",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "600",
              cursor: "default",
              boxShadow: s === step ? "0 0 8px #4caf50" : "none",
              transition: "background-color 0.4s, box-shadow 0.4s",
            }}
          >
            {s}
          </div>
        ))}
      </div>

      <p
        style={{
          textAlign: "center",
          fontWeight: "600",
          color: "#333",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        }}
      >
        Step {step} of {totalSteps}
      </p>
    </div>
  );
};

export default ProgressBar;
