// src/components/FollowUs.jsx
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const FollowUs = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
      <div className="flex space-x-4 text-gray-700 text-xl">
        {/* Facebook */}
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-600"
        >
          <FaFacebookF />
        </a>

        {/* Twitter */}
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-600"
        >
          <FaTwitter />
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-600"
        >
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  );
};

export default FollowUs;
