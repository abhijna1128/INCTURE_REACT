import { useState } from "react";

function Form1() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirm_password: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const validate = () => {
    let errorList = {};

    if (!formData.email.trim()) {
      errorList.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.(com)$/.test(formData.email))
 {
      errorList.email = "Email is invalid";
    }

    if (!formData.password.trim()) {
      errorList.password = "Password is required";
    } else if (formData.password.length < 6) {
      errorList.password = "Password should be at least 6 characters";
    }

    if (formData.confirm_password !== formData.password) {
      errorList.confirm_password = "Passwords do not match";
    }

    return errorList;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validateErrors = validate();
    setErrors(validateErrors);

    if (Object.keys(validateErrors).length === 0) {
      alert(`Email: ${formData.email}`);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            name="email"
            type="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>

        <div>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        </div>

        <div>
          <input
            name="confirm_password"
            type="password"
            placeholder="Confirm your password"
            value={formData.confirm_password}
            onChange={handleChange}
          />
          {errors.confirm_password && (
            <p style={{ color: 'red' }}>{errors.confirm_password}</p>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form1;
