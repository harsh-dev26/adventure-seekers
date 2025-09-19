import Navbar from "../components/shared/Navbar";
import ContactForm from "../components/contact/ContactForm";
import CustomerService from "../components/contact/CustomerService";
import FAQContact from "../components/contact/FAQContact";
import FollowUs from "../components/contact/FollowUs";
import Newsletter from "../components/contact/Newsletter";
import Footer from "../components/shared/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left side - Form */}
        <ContactForm />

        {/* Right side - Info */}
        <div className="space-y-8">
          <CustomerService />
          <FAQContact />
          <FollowUs />
          <Newsletter />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
