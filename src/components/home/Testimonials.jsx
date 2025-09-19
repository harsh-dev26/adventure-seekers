// src/components/Testimonials.jsx
import TestimonialCard from "./TestimonialCard";
import emilyImg from "../../assets/emily.jpg";
import jakeImg from "../../assets/jake.jpg";
import sarahImg from "../../assets/sarah.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      image: emilyImg,
      name: "Emily",
      text: "Our family trip was a dream come true. Thank you, AdventureSeekers!",
    },
    {
      image: jakeImg,
      name: "Jake",
      text: "The group trip was exhilarating and unforgettable. Highly recommended!",
    },
    {
      image: sarahImg,
      name: "Sarah",
      text: "Mystery trips are the best! I discovered places I never knew existed.",
    },
  ];

  return (
    <section className="bg-red-100 py-12 px-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, index) => (
          <TestimonialCard key={index} {...t} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
