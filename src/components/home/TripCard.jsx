// src/components/TripCard.jsx
import { Link } from "react-router-dom";

const TripCard = ({ image, title, description, buttonText, link }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden flex flex-col">
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover rounded-t-2xl"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600 text-sm mt-2 flex-grow">{description}</p>

        {/* Button becomes a Link */}
        <Link
          to={link}
          className="mt-4 bg-red-600 hover:bg-red-700 text-white rounded-full py-2 px-4 text-center"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default TripCard;
