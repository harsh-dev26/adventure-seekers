// src/components/Newsletter.jsx
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`📩 Subscribed with: ${email}`);
    setEmail(""); // reset input
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Subscribe to our Newsletter</h3>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-grow border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-red-500 focus:outline-none"
          required
        />
        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-medium transition"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
