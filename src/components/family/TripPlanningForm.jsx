// src/components/TripPlanningForm.jsx
import { useState } from "react";

const TripPlanningForm = () => {
  const [familySize, setFamilySize] = useState(2); // ✅ default is 2
  const [destination, setDestination] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Validation safeguard
    if (familySize < 2) {
      alert("Family size must be at least 2 members.");
      return;
    }

    console.log("Form submitted:", { familySize, destination });
    alert(`Family Size: ${familySize}, Destination: ${destination}`);
  };

  return (
    <div className="bg-white shadow-md rounded-2xl p-6">
      <h3 className="text-lg font-semibold mb-4">Trip Planning</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Family Size */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Family Size:
          </label>
          <input
            type="number"
            min={2} // ✅ HTML safeguard
            value={familySize}
            onChange={(e) => setFamilySize(Number(e.target.value))}
            placeholder="Enter number of family members"
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
            required
          />
        </div>

        {/* Preferred Destination */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Preferred Destination:
          </label>
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="Enter your preferred destination"
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-full font-medium transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default TripPlanningForm;
