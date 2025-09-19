// src/components/TestimonialCard.jsx
const TestimonialCard = ({ image, name, text }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center">
      <img
        src={image}
        alt={name}
        className="w-20 h-20 object-cover rounded-full mb-4"
      />
      <p className="text-gray-700 italic mb-2">"{text}"</p>
      <span className="text-sm font-semibold text-gray-600">- {name}</span>
    </div>
  );
};

export default TestimonialCard;
