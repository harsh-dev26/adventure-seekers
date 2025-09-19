// src/components/FAQContact.jsx
const FAQContact = () => {
  const faqs = [
    {
      question: "What is the cancellation policy?",
      answer:
        "You can cancel your trip up to 24 hours before departure without any fees.",
    },
    {
      question: "How do I change my booking?",
      answer:
        "Contact our customer service team to modify your booking details.",
    },
    {
      question: "Are there any discounts available?",
      answer:
        "Sign up for our newsletter to receive exclusive offers and discounts.",
    },
  ];

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Frequently Asked Questions</h3>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index}>
            <p className="font-medium text-gray-800">{faq.question}</p>
            <p className="text-gray-600 text-sm mt-1">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQContact;
