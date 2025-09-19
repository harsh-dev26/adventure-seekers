// src/components/UserFeedback.jsx
import { useState } from "react";

const UserFeedback = () => {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`✅ Thanks for your feedback: "${feedback}"`);
    setFeedback(""); // clear input after submit
  };

  return (
    <div className="bg-white shadow-md rounded-2xl p-6">
      <h3 className="text-lg font-semibold mb-4">We Value Your Feedback</h3>
      <p className="text-gray-600 mb-4">
        Please share your experience with us to help improve our services.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Write your feedback here..."
          className="w-full border border-gray-300 rounded-lg p-3 h-28 resize-none focus:ring-2 focus:ring-red-500 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-full font-medium transition"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default UserFeedback;
