// src/components/FamilyTripCustomizer.jsx
import AccommodationOptions from "./AccommodationOptions";
import ActivityOptions from "./ActivityOptions";

const FamilyTripCustomizer = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <AccommodationOptions />
      <ActivityOptions />
    </section>
  );
};

export default FamilyTripCustomizer;
