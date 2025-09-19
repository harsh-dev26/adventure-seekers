// src/components/HeroSection.jsx
import TripCard from "./TripCard";
import familyImg from "../../assets/family.jpg";
import groupImg from "../../assets/group.jpg";
import mysteryImg from "../../assets/mystery.jpg";

const HeroSection = () => {
  const trips = [
    {
      image: familyImg,
      title: "Family Adventure",
      description:
        "Experience unforgettable family moments with our tailor-made trips.",
      buttonText: "Explore Now",
      link: "/family-trips",   // ✅ navigate to Family Trips
    },
    {
      image: groupImg,
      title: "Group Expeditions",
      description:
        "Join exciting expeditions with friends and make memories that last a lifetime.",
      buttonText: "Join Us",
      link: "/group-trips",    // placeholder
    },
    {
      image: mysteryImg,
      title: "Mystery Trips",
      description:
        "Dive into the unknown with our thrilling mystery trips and discover hidden gems.",
      buttonText: "Discover More",
      link: "/mystery-trips",  // placeholder
    },
  ];

  return (
    <section className="px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {trips.map((trip, index) => (
        <TripCard key={index} {...trip} />
      ))}
    </section>
  );
};

export default HeroSection;
