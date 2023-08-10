import React from 'react';
import '../styles/Gallery.css';
import latte from '../images/latte.jpg';
import turkish from '../images/turkish.jpg';
import irish from '../images/irish.jpg';
import frenchpress from '../images/frenchpress.jpg'

const Gallery = () => {
  const gallery = [
    { id: 1, title: 'Premium Coffee', imgSrc: latte },
    { id: 2, title: 'Cold Brews', imgSrc:turkish },
    { id: 3, title: 'Espresso Shots', imgSrc: irish },
    { id: 4, title: 'Artisan Pastries', imgSrc: frenchpress },
    // Add more services here
  ];

  return (
    <div className="gallery">
      <h2 className="gallery-title">Gallery</h2>
      <div className="gallery-container">
        {gallery.map((gallery) => (
          <div className="gallery-item" key={gallery.id}>
            <img
              src={gallery.imgSrc}
              alt={gallery.title}
              className="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
