// src/components/GroupTripCard.jsx
const GroupTripCard = ({ title, date, description }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6">
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="text-sm text-gray-500 mb-2">Date: {date}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default GroupTripCard;
