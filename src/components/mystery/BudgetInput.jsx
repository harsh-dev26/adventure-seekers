// src/components/BudgetInput.jsx
import { useState } from "react";

const BudgetInput = () => {
  const [budget, setBudget] = useState("");

  const handleChange = (e) => {
    setBudget(e.target.value);
  };

  return (
    <div className="bg-white shadow-md rounded-2xl p-6">
      <h3 className="text-lg font-semibold mb-4">Set Your Budget</h3>
      <input
        type="number"
        value={budget}
        onChange={handleChange}
        placeholder="Enter your budget"
        className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-red-500 focus:outline-none"
      />
    </div>
  );
};

export default BudgetInput;
