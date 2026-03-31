import { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let err = {};

    if (!form.email.includes("@")) {
      err.email = "Valid email required";
    }

    if (!form.password) {
      err.password = "Password required";
    }

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    console.log("Login Data:", form);

    // send to backend
  };

  return (
    <div className="mt-5">
      <div className="card p-4 shadow">
        <h3 className="mb-3">Login</h3>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="form-control mb-2"
            placeholder="Email"
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />
          <small className="text-danger">{errors.email}</small>

          <input
            type="password"
            className="form-control mb-2"
            placeholder="Password"
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />
          <small className="text-danger">{errors.password}</small>

          <button className="btn btn-success mt-3 w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}