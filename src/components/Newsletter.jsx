import React, { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <div className="bg-blue-600 py-16">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Stay Updated
        </h2>
        <p className="text-blue-100 mb-8 text-lg">
          Subscribe to our newsletter for exclusive deals, new arrivals, and
          shopping tips
        </p>

        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <button
            type="submit"
            className="bg-white text-blue-600 font-bold px-8 py-3 rounded-lg hover:bg-blue-50 transition transform hover:scale-105"
          >
            Subscribe
          </button>
        </form>

        {subscribed && (
          <p className="text-green-200 mt-4">
            ✓ Thank you for subscribing!
          </p>
        )}

        <p className="text-blue-100 text-sm mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  );
}
