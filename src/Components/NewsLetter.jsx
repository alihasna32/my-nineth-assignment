import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      // Here you can add your API call to save email
    }
  };

  return (
    <div className="px-4 mb-11">
        <section className="bg-linear-to-r from-[#7a590a] to-[#8166213b] py-12 px-6 sm:px-14 rounded-xl">
      <div className="max-w-2xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-2 ">
          Subscribe to Our Newsletter
        </h2>
        <p className=" mb-6">
          Get the latest updates, news, and offers directly in your inbox.
        </p>

        {submitted ? (
          <p className="text-green-600 font-semibold">
            Thank you for subscribing!
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="input rounded-xl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-base-100 px-2.5 py-2 rounded-xl font-semibold cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
    </div>
  );
};

export default Newsletter;
