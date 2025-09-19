// src/components/ParticipantReviews.jsx
import ReviewCard from "./ReviewCard";

const ParticipantReviews = () => {
  const reviews = [
    {
      text: "The trip to the Grand Canyon was absolutely amazing! I met so many wonderful people and the views were breathtaking.",
      author: "Sarah W.",
    },
    {
      text: "Hiking in the Swiss Alps was a dream come true. The camaraderie among the group made it even more special.",
      author: "Mark T.",
    },
    {
      text: "The Kenya Safari was an unforgettable adventure. I met lifelong friends and saw incredible wildlife.",
      author: "Emily R.",
    },
  ];

  return (
    <div>
      <h3 className="text-xl font-semibold mb-6">Participant Reviews</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
    </div>
  );
};

export default ParticipantReviews;
