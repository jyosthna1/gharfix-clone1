"use client";

import { useState } from "react";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    userType: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/register-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      alert("Registration submitted successfully");

      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        address: "",
        userType: "",
      });
    } else {
      alert("Failed to submit registration");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 p-20">
      <div>
        <label className="font-semibold">Name <span className="text-red-500">*</span></label>

        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <input
              type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full border px-4 py-3 rounded-lg"
          required
            />
            <p className="text-sm mt-2">First</p>
          </div>

          <div>
            <input
            type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full border px-4 py-3 rounded-lg"
            />
            <p className="text-sm mt-2">Last</p>
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="name" className="font-semibold">Phone #</label>
        <input
          id="name"
          placeholder="Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border px-4 py-3 mt-4 rounded-lg"
        />
      </div>

      <div>
        <label htmlFor="address" className="font-semibold">Address</label>
        <input
        id="address"
        placeholder="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="w-full border px-4 py-3 mt-4 rounded-lg"
        />
      </div>

      <div>
        <p className="font-semibold mb-4">I am a</p>

        <label htmlFor="userType" className="block mb-4">
          <input
            id="userType"
            type="radio"
            name="userType"
            value="Service Provider"
            checked={formData.userType === "Service Provider"}
            onChange={handleChange}
            className="mr-3"
          />
          Service Provider
        </label>

        <label htmlFor="needService" className="block">
          <input
            id="needService"
            type="radio"
            name="userType"
            value="I need Service"
            checked={formData.userType === "I need Service"}
            onChange={handleChange}
            className="mr-3"
          />
          I need Service
        </label>
      </div>

      <button type="submit" disabled={loading}
  aria-busy={loading}>
  {loading ? 'Sending...' : 'Submit'}
</button>
    </form>
  );
}