import React from 'react';
import { FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';
import Style from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const authorName = 'Aleikson';

  return (
    <div className={Style.footerContainer}>
      <div className={Style.contactContainer}>
        <div className={Style.content}>
          <a href="mailto:aleiksonsilva@hotmail.com">
            <FaEnvelope className={Style.contactIcon} />
            <spam className={Style.contactText}>aleiksonsilva@hotmail.com</spam>
          </a>
        </div>
        <div className={Style.content}>
          <a href="https://wa.me/5599984557469">
            <FaPhone className={Style.contactIcon} />
            <spam className={Style.contactText}>+55 99984-557469</spam>
          </a>
        </div>
        <div className={Style.content}>
          <a href="https://github.com/Aleikson">
            <FaWhatsapp className={Style.contactIcon} />
            <spam className={Style.contactText}>github.com/Aleikson</spam>
          </a>
        </div>
      </div>
      <p className={Style.footerText}>&copy; {currentYear} {authorName} - Todos os direitos reservados</p>
    </div>
  );
};

export default Footer;