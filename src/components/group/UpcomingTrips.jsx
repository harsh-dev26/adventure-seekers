// src/components/UpcomingTrips.jsx
import GroupTripCard from "./GroupTripCard";

const UpcomingTrips = () => {
  const trips = [
    {
      title: "Trip to the Grand Canyon",
      date: "November 20, 2025",
      description:
        "Join us for an unforgettable experience exploring the majestic Grand Canyon with fellow adventurers.",
    },
    {
      title: "Hiking in the Swiss Alps",
      date: "December 5, 2025",
      description:
        "Discover the breathtaking beauty of the Swiss Alps on this group hike designed for thrill-seekers.",
    },
    {
      title: "Safari Adventure in Kenya",
      date: "January 10, 2026",
      description:
        "Experience the wild side of Kenya on a thrilling safari with a group of nature enthusiasts.",
    },
  ];

  return (
    <div>
      <h3 className="text-xl font-semibold mb-6">Upcoming Group Trips</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {trips.map((trip, index) => (
          <GroupTripCard key={index} {...trip} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingTrips;
