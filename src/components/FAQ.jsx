import React, { useState } from "react";

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What is your return policy?",
      answer:
        "We offer a 30-day money-back guarantee on all products. If you're not satisfied, simply return the item in its original condition for a full refund.",
    },
    {
      id: 2,
      question: "How long does shipping take?",
      answer:
        "Standard shipping takes 5-7 business days. Express shipping is available for 2-3 business day delivery.",
    },
    {
      id: 3,
      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship to over 150 countries worldwide. Shipping costs and times vary by location.",
    },
    {
      id: 4,
      question: "Is my payment information secure?",
      answer:
        "Absolutely. We use SSL encryption and PCI compliance to ensure all transactions are safe and secure.",
    },
    {
      id: 5,
      question: "How can I track my order?",
      answer:
        "You'll receive a tracking number via email once your order ships. You can track it in real-time on our website.",
    },
    {
      id: 6,
      question: "Do you have a loyalty program?",
      answer:
        "Yes! Sign up for our rewards program to earn points on every purchase and get exclusive member discounts.",
    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-600 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg">
            Find answers to common questions about our products and services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="border border-gray-200 rounded-lg">
              <button
                onClick={() =>
                  setOpenId(openId === faq.id ? null : faq.id)
                }
                className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-blue-50 transition"
              >
                <span className="text-left font-semibold text-gray-900">
                  {faq.question}
                </span>
                <span
                  className={`text-blue-600 text-2xl transition transform ${
                    openId === faq.id ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              {openId === faq.id && (
                <div className="px-6 py-4 bg-blue-50 border-t border-gray-200">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center border border-blue-200">
            <h3 className="text-xl font-bold text-blue-600 mb-2">
            Didn't find your answer?
          </h3>
          <p className="text-gray-600 mb-4">
            Our customer support team is here to help
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}
