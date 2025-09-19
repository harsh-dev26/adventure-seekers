// src/components/DestinationCard.jsx
const DestinationCard = ({ image, title }) => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-md">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover"
      />
      <div className="p-3 text-center font-medium text-gray-700">{title}</div>
    </div>
  );
};

export default DestinationCard;
