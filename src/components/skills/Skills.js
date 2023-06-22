import React from 'react';
import Style from './Skills.module.css';
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaGitAlt,
  FaNodeJs
} from 'react-icons/fa';
import { DiJqueryLogo } from 'react-icons/di';
import { SiJavascript, SiTypescript, SiFirebase, SiStyledcomponents, SiExpress, SiMysql, SiRedux } from 'react-icons/si';

const Skills = () => {
  const icons = [
    { icon: FaHtml5, name: 'HTML', color: '#E34C26' },
    { icon: FaCss3Alt, name: 'CSS', color: '#2965F1' },
    { icon: FaBootstrap, name: 'Bootstrap', color: '#563D7C' },
    { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
    { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
    { icon: DiJqueryLogo, name: 'jQuery', color: '#0868AC' },
    { icon: FaReact, name: 'React', color: '#61DAFB' },
    { icon: SiStyledcomponents, name: 'Styled Components', color: '#DB7093' },
    { icon: FaGitAlt, name: 'Git', color: '#F05032' },
    { icon: SiFirebase, name: 'Firebase', color: '#FFCB2B' },
  ];

  const technologies = [
    { icon: SiRedux, color: '#764ABC', rotate: true },
    { icon: FaNodeJs, color: '#83CD29' },
    { icon: SiExpress, color: '#000000' },
    { icon: SiMysql, color: '#4479A1' },
  ];

  return (
    <div id='skills' className={Style.container}>
      <h2 className={Style.title}>Habilidades</h2>
      <div className={Style.containerGrid}>
        {icons.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div key={index} className={Style.item}>
              <div className={Style.iconContainer} style={{ backgroundColor: item.color }}>
                <IconComponent color="#FFFFFF" />
                <span className={Style.name}>{item.name}</span>
              </div>
            </div>
          );
        })}
      </div>
      <h2 className={Style.title}>Em progresso</h2>
      <div className={Style.technologyContainer}>
        {technologies.map((item, index) => {
          const IconComponent = item.icon;
          const iconStyle = {
            color: item.color,
          };
          return (
            <div key={index} className={Style.technologyItem}>
              <div className={Style.load} >
                <div className={Style.rotateContainer} style={{ borderColor: `transparent transparent ${item.color} transparent` }}></div>
                <IconComponent style={iconStyle} className={Style.icon} />
              </div>
              <div className={Style.name}>{item.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;