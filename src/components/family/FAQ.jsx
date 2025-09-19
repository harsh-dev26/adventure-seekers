// src/components/FAQ.jsx
const FAQ = () => {
  const faqs = [
    {
      question: "What is the best time for family trips?",
      answer:
        "The best time for family trips depends on your destination, but generally, summer and school holidays are popular options.",
    },
    {
      question: "Are there discounts for children?",
      answer:
        "Many destinations offer discounts for children, which can be applied during booking.",
    },
  ];

  return (
    <div className="bg-white shadow-md rounded-2xl p-6">
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

export default FAQ;
