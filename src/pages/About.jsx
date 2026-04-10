import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-12 px-4 sm:px-6 lg:px-20">
      
      <div className="max-w-6xl mx-auto space-y-12">

        {/* 🔥 Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-extrabold tracking-tight">
            About <span className="text-red-500">Shopora</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Your one-stop destination for cutting-edge gadgets and modern tech lifestyle.
          </p>
        </div>

        {/* 💎 Main Card */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-8 md:p-12 space-y-10">

          {/* Intro */}
          <p className="text-gray-700 text-lg leading-relaxed">
            Welcome to <span className="font-semibold text-red-500">Shopora</span>, your ultimate destination for the latest electronics. From innovative gadgets to must-have accessories, we bring you premium products with seamless shopping experience.
          </p>

          {/* Grid Sections */}
          <div className="grid md:grid-cols-3 gap-8">

            {/* Mission */}
            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition">
              <h2 className="text-xl font-semibold text-red-500 mb-3">Our Mission</h2>
              <p className="text-gray-600 text-sm">
                Making technology accessible and affordable for everyone while delivering quality and innovation.
              </p>
            </div>

            {/* Why Choose */}
            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition">
              <h2 className="text-xl font-semibold text-red-500 mb-3">Why Choose Us</h2>
              <ul className="text-gray-600 text-sm space-y-2 list-disc pl-4">
                <li>Top-quality products</li>
                <li>Fast & secure delivery</li>
                <li>Trusted support</li>
                <li>Easy returns</li>
              </ul>
            </div>

            {/* Vision */}
            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition">
              <h2 className="text-xl font-semibold text-red-500 mb-3">Our Vision</h2>
              <p className="text-gray-600 text-sm">
                To create a future where technology enhances everyday life effortlessly.
              </p>
            </div>

          </div>

          {/* CTA */}
          <div className="text-center pt-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Join the Shopora Family 🚀
            </h3>
            <p className="text-gray-600 mb-6">
              Explore the future of shopping with us.
            </p>

            <Link to={"/products"}>
              <button className="bg-red-500 text-white px-8 py-3 rounded-full text-lg font-medium 
              hover:bg-red-600 hover:scale-105 transition-all shadow-md">
                Start Shopping
              </button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;