import React from 'react';
import Style from './Experience.module.css';

const Experience = ({ title, description, image, link }) => {
  return (
    <div className={Style.container}>
      <div className={Style.image}>
        <div className={Style.imgContent}>
          <img src={image} alt="" />
        </div>
      </div>
      <div className={Style.content}>
        <h2>{title}</h2>
        {description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        <a  className={Style.link} href={link} target="" rel="noopener noreferrer">
          Ver Repositório
        </a>
      </div>
    </div>
  );
};

export default Experience;