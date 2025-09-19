import Navbar from "../components/shared/Navbar";
import BudgetInput from "../components/mystery/BudgetInput";
import PotentialDestinations from "../components/mystery/PotentialDestinations";
import BookMysteryTripButton from "../components/mystery/BookMysteryTripButton";
import SafetyInfo from "../components/mystery/SafetyInfo";
import UserFeedback from "../components/mystery/UserFeedback";
import Footer from "../components/shared/Footer";


const MysteryTrips = () => {
  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-12 space-y-8">
        <BudgetInput />
        <PotentialDestinations />
        <BookMysteryTripButton />
        <SafetyInfo />
        <UserFeedback />
      </div>

      <Footer />
    </>
  );
};

export default MysteryTrips;
