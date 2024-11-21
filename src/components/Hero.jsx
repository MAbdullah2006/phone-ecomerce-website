import React from 'react';

const Hero = () => {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Find Your Perfect Phone
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Discover the latest smartphones at unbeatable prices
        </p>
        <button 
          onClick={scrollToProducts}
          className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold 
            hover:bg-opacity-90 transition duration-300 transform hover:scale-105"
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Hero;