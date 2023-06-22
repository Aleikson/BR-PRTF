import React from 'react';
import Style from './Home.module.css';
import Contact from '../contactMe/Contact';

const Home = () => {
  return (
    <div className={Style.home}>
      <div className={Style.content}>
        <div className={Style.title}>
          <h2>Olá, eu sou o Aleikson</h2>
          <Contact />
        </div>
        <div className={Style.role}>
          <h1>FRONTEND</h1>
        </div>
        <div className={Style.role2}>
          <h1>DEVELOPER</h1>
        </div>
        <div className={Style.description}>
          <p>
            Tenho experiência em criar interfaces interativas e funcionais, entregando soluções de alta qualidade e usabilidade.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
