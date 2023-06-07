import React from 'react';
import Style from './Experience.module.css';

const Experience = ({ title, description, image, page, link, onOpenModal }) => {
  return (
    <div className={Style.container}>
      <h2 className={Style.title}>{title}</h2>
      <div className={Style.imgContent}>
        <img src={image} alt="" />
      </div>
      {description.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      <div className={Style.btnContainer}>
        <a className={Style.link} href={link} target="_blank" rel="noopener noreferrer">
          Ver Repositório
        </a>
        <a className={Style.link} href={page} target="_blank" rel="noopener noreferrer">
          Ver Página
        </a>
        <button className={Style.btnItem} onClick={onOpenModal}>
          Saber mais<span>&rarr;</span>
        </button>
      </div>
    </div>
  );
};

export default Experience;
