import React from "react";
import { motion } from "motion/react";

const AboutgameHub = () => {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
    <div className="min-h-screen bg-base-300 text-white py-12 px-6 lg:px-20">
      {/* Hero Section */}
      <title>About Gamehub</title>
      <section className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-accent">
          About GameHub
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Welcome to <span className="text-accent font-semibold">GameHub</span>,
          an online library built to connect players and indie developers. Our
          mission is to make discovering new games simple, fun, and rewarding —
          all in one place.
        </p>
      </section>

      {/* What Users Can Do */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-accent">
          What Users Can Do
        </h2>
        <ul className="space-y-3 text-gray-300">
          <li>🎮 <strong>Browse Games:</strong> Explore a growing collection of indie and popular titles.</li>
          <li>🌟 <strong>Discover Hidden Gems:</strong> Sort and filter games by rating to find your next favorite.</li>
          <li>👥 <strong>Developer Support:</strong> Learn about game developers and support their work.</li>
          <li>🔐 <strong>Personalized Experience:</strong> Log in to save your profile and access exclusive features.</li>
        </ul>
      </section>

      {/* Why GameHub Is Useful */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-accent">
          Why GameHub Is Useful
        </h2>
        <div className="space-y-2 text-gray-300">
          <p><strong>For players:</strong> A clean, fast, and easy-to-use game library with honest ratings and details.</p>
          <p><strong>For developers:</strong> A platform to showcase projects and gain visibility among real players.</p>
          <p><strong>For everyone:</strong> A secure, responsive web app accessible across devices.</p>
        </div>
      </section>

      {/* Technology & Design */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-accent">
          Technology & Design
        </h2>
        <p className="text-gray-300">
          GameHub is built using <strong>React</strong>,{" "}
          <strong>Firebase Authentication</strong>, and{" "}
          <strong>Tailwind CSS</strong> for a modern, responsive UI. It features
          protected routes, dynamic titles, and an engaging banner powered by
          animations for a lively experience.
        </p>
      </section>

      {/* Future Plans */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-accent">
          Future Plans
        </h2>
        <p className="text-gray-300">
          We plan to add features like user reviews, leaderboards, and direct
          game downloads to make GameHub the go-to platform for game lovers.
        </p>
      </section>
    </div>
    </motion.div>
  );
};

export default AboutgameHub;