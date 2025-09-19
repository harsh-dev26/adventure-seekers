// src/components/PopularDestinations.jsx
import DestinationCard from "../shared/DestinationCard";
import beachImg from "../../assets/beach.jpg";
import mountainImg from "../../assets/mountain.jpg";

const PopularDestinations = () => {
  const destinations = [
    { image: beachImg, title: "Beach Paradise" },
    { image: mountainImg, title: "Mountain Retreat" },
  ];

  return (
    <div className="bg-white shadow-md rounded-2xl p-6">
      <h3 className="text-lg font-semibold mb-4">Popular Destinations</h3>
      <div className="space-y-4">
        {destinations.map((dest, index) => (
          <DestinationCard key={index} {...dest} />
        ))}
      </div>
    </div>
  );
};

export default PopularDestinations;
