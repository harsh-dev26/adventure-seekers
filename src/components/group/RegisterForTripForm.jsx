// src/components/RegisterForTripForm.jsx
import { useState } from "react";

const RegisterForTripForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    trip: "Trip to the Grand Canyon",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`✅ Registered Successfully!\n
    Name: ${formData.name}\n
    Email: ${formData.email}\n
    Trip: ${formData.trip}`);
    setFormData({ name: "", email: "", trip: "Trip to the Grand Canyon" }); // reset
  };

  return (
    <div className="bg-white shadow-md rounded-2xl p-6">
      <h3 className="text-xl font-semibold mb-6">Register for a Group Trip</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-red-500 focus:outline-none"
          required
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-red-500 focus:outline-none"
          required
        />

        {/* Select Trip */}
        <select
          name="trip"
          value={formData.trip}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-red-500 focus:outline-none"
        >
          <option>Trip to the Grand Canyon</option>
          <option>Hiking in the Swiss Alps</option>
          <option>Safari Adventure in Kenya</option>
        </select>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-full font-medium transition"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForTripForm;
