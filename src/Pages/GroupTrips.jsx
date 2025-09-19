import Navbar from "../components/shared/Navbar";
import HeroImage from "../components/group/HeroImage";
import UpcomingTrips from "../components/group/UpcomingTrips";
import RegisterForTripForm from "../components/group/RegisterForTripForm";
import ParticipantReviews from "../components/group/ParticipantReviews";
import Footer from "../components/shared/Footer";


const GroupTrips = () => {
  return (
    <>
      <Navbar />
      <HeroImage />

      <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
        <UpcomingTrips />
        <RegisterForTripForm />
        <ParticipantReviews />
      </div>

      <Footer />
    </>
  );
};

export default GroupTrips;
