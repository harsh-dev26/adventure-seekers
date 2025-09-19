// src/components/PotentialDestinations.jsx
import DestinationCard from "../shared/DestinationCard";
import tropicalImg from "../../assets/tropical.jpg";
import cityImg from "../../assets/city.jpg";
import mountainImg from "../../assets/mountains.jpg";

const PotentialDestinations = () => {
  const destinations = [
    { image: tropicalImg, title: "Tropical Island" },
    { image: cityImg, title: "City Adventure" },
    { image: mountainImg, title: "Mountain Escape" },
  ];

  return (
    <div className="bg-white shadow-md rounded-2xl p-6">
      <h3 className="text-lg font-semibold mb-6">Potential Surprise Destinations</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {destinations.map((dest, index) => (
          <DestinationCard key={index} {...dest} />
        ))}
      </div>
    </div>
  );
};

export default PotentialDestinations;
