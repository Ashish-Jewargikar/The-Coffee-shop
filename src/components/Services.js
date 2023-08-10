import React from 'react';
import '../styles/Services.css';
import premium from '../images/premium.jpg';
import pastries from '../images/pastries.jpg';
import cold from '../images/cold.jpg';
import shots from '../images/shots.jpg';

const Services = () => {
  const services = [
    { id: 1, title: 'Premium Coffee', imgSrc: premium },
    { id: 2, title: 'Cold Brews', imgSrc: cold },
    { id: 3, title: 'Espresso Shots', imgSrc: shots},
    { id: 4, title: 'Artisan Pastries', imgSrc: pastries },
    // Add more services here
  ];

  return (
    <div id="services" className="services">
      <h2 className="section-title">Our Services</h2>
      <div className="services-container">
        {services.map((service) => (
          <div className="service-item" key={service.id}>
            <img
              src={service.imgSrc}
              alt={service.title}
              className="service-image"
            />
            <div className="service-info">
              <h3 className="service-title">{service.title}</h3>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
