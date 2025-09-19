// src/components/BookMysteryTripButton.jsx
const BookMysteryTripButton = () => {
  const handleClick = () => {
    alert("🎉 Your mystery trip has been booked! We'll surprise you with a destination soon.");
  };

  return (
    <div className="flex justify-center">
      <button
        onClick={handleClick}
        className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-full font-semibold text-lg transition"
      >
        Book Your Mystery Trip
      </button>
    </div>
  );
};

export default BookMysteryTripButton;
