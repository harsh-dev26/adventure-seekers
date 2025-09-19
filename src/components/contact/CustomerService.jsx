// src/components/CustomerService.jsx
const CustomerService = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
      <p className="text-gray-700">
        <span className="font-medium">Phone:</span> +1 234 567 890
      </p>
      <p className="text-gray-700">
        <span className="font-medium">Email:</span>{" "}
        <a
          href="mailto:support@adventureseekers.com"
          className="text-red-600 hover:underline"
        >
          support@adventureseekers.com
        </a>
      </p>
    </div>
  );
};

export default CustomerService;
