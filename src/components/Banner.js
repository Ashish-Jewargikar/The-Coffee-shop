import React, { useState, useEffect } from 'react';
import '../styles/Banner.css';
import banner1 from '../images/banner-1.jpg'; // Import other images
import banner2 from '../images/banner-2.jpg';
// import banner3 from '../images/banner-3.jpg';

const Banner = () => {
  const images = [banner1, banner2]; // Array of imported images
  const advertisements = [
    'Discover Our New Coffee Blends',
    'Join us for Freshly Brewed Delights',
    'Try Our Limited Edition Espresso Shots',
  ];

  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="banner">
      <div className="banner-image-container">
        <img
          src={images[imageIndex]} // Use the appropriate image based on index
          alt="Advertisement"
          className="banner-image"
          style={{ width: '100%', height: '300px' }}
        />
        <div className="advertisement-text">
          {advertisements[imageIndex]}
        </div>
      </div>
    </div>
  );
};

export default Banner;
