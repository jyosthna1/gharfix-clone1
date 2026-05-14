"use client";

import { useState } from "react";

export default function ContactForm({ serviceName }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    requirement: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        serviceName,
      }),
    });

    const data = await res.json();

    if (data.success) {
      alert("Message Sent Successfully");

      setFormData({
        name: "",
        email: "",
        phone: "",
        requirement: "",
      });
    } else {
      alert("Failed to send message");
    }
  };

  return (
    <div
      id="contact-form"
      className="bg-gray-50 border rounded-2xl p-6 shadow-sm"
    >
      <h3 className="text-xl font-semibold mb-4">
        Quick Enquiry
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border px-4 py-3 rounded-lg"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border px-4 py-3 rounded-lg"
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border px-4 py-3 rounded-lg"
          required
        />

        <textarea
          rows={3}
          name="requirement"
          placeholder="Your requirement"
          value={formData.requirement}
          onChange={handleChange}
          className="w-full border px-4 py-3 rounded-lg"
        ></textarea>

        <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
          Submit
        </button>
      </form>
    </div>
  );
}