import Navbar from "../components/shared/Navbar";
import FamilyTripCustomizer from "../components/family/FamilyTripCustomizer";
import TripPlanningForm from "../components/family/TripPlanningForm";
import Filters from "../components/family/Filters";
import PopularDestinations from "../components/family/PopularDestinations";
import FAQ from "../components/family/FAQ";
import Footer from "../components/shared/Footer";


const FamilyTrips = () => {
  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Side - Customization + Form + FAQ */}
        <div className="lg:col-span-2 space-y-6">
          <FamilyTripCustomizer />
          <TripPlanningForm />
          <FAQ />
        </div>

        {/* Right Side - Filters + Popular Destinations */}
        <div className="space-y-6">
          <Filters />
          <PopularDestinations />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default FamilyTrips;
