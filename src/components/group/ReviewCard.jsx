// src/components/ReviewCard.jsx
const ReviewCard = ({ text, author }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6">
      <p className="text-gray-700 italic mb-3">"{text}"</p>
      <p className="text-sm font-medium text-gray-600">- {author}</p>
    </div>
  );
};

export default ReviewCard;
