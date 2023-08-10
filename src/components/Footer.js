import React from 'react';
import '../styles/Footer.css';
import footer from '../images/footer.jpg'

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-section">
    
  <form className="contact-form">
  <h2 id="contact">Contact Us</h2>
  <input type="text" placeholder="Name" className="contact-input" />
  <input type="email" placeholder="Email" className="contact-input" />
  <textarea placeholder="Message" className="contact-input"></textarea>
  <button className="contact-btn">Send</button>

  <p className="footer-address">123 Coffee Street, City ville, Country</p>
  </form>
  
  <div className="footer-info">
  <h2 id="about">About Us</h2>
    <img src={footer} alt="Coffee Shop Logo" className="footer-logo" />
    <div className="footer-about">
    
    <p>
      At our coffee shop, we take immense pride in serving the finest quality
      coffee to our valued customers. Our team of skilled baristas is dedicated
      to crafting the perfect cup, ensuring that each sip delivers a delightful
      and rich flavor experience.
    </p>
    <p>
      We offer a diverse menu featuring various coffee blends and specialty
      drinks, catering to the unique preferences of our customers. From classic
      espressos to creamy lattes and refreshing cold brews.
    </p>
    </div>
    
  </div>
</div>


    </footer>
  );
};

export default Footer;
