// src/components/HeroImage.jsx
import groupHero from "../../assets/group-hero.jpg"; // ✅ replace with your actual banner image

const HeroImage = () => {
  return (
    <div className="w-full h-72 md:h-96 overflow-hidden">
      <img
        src={groupHero}
        alt="Group Trips Banner"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default HeroImage;
