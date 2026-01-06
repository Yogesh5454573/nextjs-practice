"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const validate = () => {
    const newErrors: typeof errors = { name: "", email: "", mobile: "", password: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
      isValid = false;
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Mobile number must be 10 digits";
      isValid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const response = await fetch("http://nextjs-api.in/api/addData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (response.ok) {
        router.push("/manageUsers");
        console.log("User added successfully");
      } else {
        console.log(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      console.log("API error");
    }
  };

  return (
    <div className="module">
      <div className="module-head">
        <h3>Add User</h3>
      </div>
      <div className="module-body">
        <form className="form-horizontal row-fluid" onSubmit={handleSubmit}>
          <div className="control-group">
            <label className="control-label">Name</label>
            <div className="controls">
              <input
                type="text"
                name="name"
                className="span8"
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
            </div>
          </div>

          <div className="control-group">
            <label className="control-label">Email</label>
            <div className="controls">
              <input
                type="text"
                name="email"
                className="span8"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            </div>
          </div>

          <div className="control-group">
            <label className="control-label">Mobile</label>
            <div className="controls">
              <input
                type="text"
                name="mobile"
                className="span8"
                placeholder="Enter Your Mobile"
                value={formData.mobile}
                onChange={handleChange}
              />
              {errors.mobile && <p style={{ color: "red" }}>{errors.mobile}</p>}
            </div>
          </div>

          <div className="control-group">
            <label className="control-label">Password</label>
            <div className="controls">
              <input
                type="password"
                name="password"
                className="span8"
                placeholder="Enter Your Password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
            </div>
          </div>

          <div className="control-group">
            <div className="controls">
              <button type="submit" className="btn btn-primary" style={{ marginRight: "10px" }}>
                Submit
              </button>
              <Link href="/manageUsers" className="btn btn-danger">
                Cancel
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
