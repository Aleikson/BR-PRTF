import React from 'react';
import Style from './Skills.module.css';
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaGitAlt,
} from 'react-icons/fa';
import { DiJqueryLogo } from 'react-icons/di';
import { SiJavascript, SiTypescript, SiFirebase, SiStyledcomponents } from 'react-icons/si';

const Skills = () => {
  const icons = [
    { icon: FaHtml5, name: 'HTML' },
    { icon: FaCss3Alt, name: 'CSS' },
    { icon: FaBootstrap, name: 'Bootstrap' },
    { icon: SiJavascript, name: 'JavaScript' },
    { icon: SiTypescript, name: 'TypeScript' },
    { icon: DiJqueryLogo, name: 'jQuery' },
    { icon: FaReact, name: 'React' },
    { icon: SiStyledcomponents, name: 'Styled Components' },
    { icon: FaGitAlt, name: 'Git' },
    { icon: SiFirebase, name: 'Firebase' },
  ];

  return (
    <div className={Style.container}>

    <div className={Style.containerGrid}>
      {icons.map((item, index) => (
        <div key={index} className={Style.item}>
          <div className={Style['iconContainer']}>
            {React.createElement(item.icon)}
          </div>
          <span className={Style.name}>{item.name}</span>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Skills;