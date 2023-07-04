import React, { useEffect, useState } from 'react';
import style from './NavBar.module.css';

const NavBar = () => {
  const [name, setName] = useState('');
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const targetName = '< Home />';
    let currentIndex = 0;
    let isDeleting = false;

    const animateTyping = () => {
      const currentName = targetName.slice(0, currentIndex);

      setName(currentName);

      if (!isDeleting) {
        currentIndex++;

        if (currentIndex > targetName.length) {
          isDeleting = true;
          currentIndex = targetName.length;
        }
      } else {
        currentIndex--;

        if (currentIndex === 0) {
          isDeleting = false;
          currentIndex = 0;
        }
      }
    };

    const intervalId = setInterval(animateTyping, 250);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (e) => {
    e.preventDefault();

    const targetId = e.target.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }

    setMenuOpen(false);
  };

  return (
    <div className={style.container}>
      <a href="/" className={style.nameLink}>
        {name}
      </a>
      <div className={`${style.links} ${isMenuOpen ? style.open : ''}`}>
        <a href="#perfil" onClick={handleLinkClick}>Sobre</a>
        <a href="#skills" onClick={handleLinkClick}>Habilidades</a>
        <a href="#experience" onClick={handleLinkClick}>Experiência</a>
      </div>
      <div className={style.menuIcon} onClick={toggleMenu}>
        <span className={`${style.iconBar} ${isMenuOpen ? style.open : ''}`} />
        <span className={`${style.iconBar} ${isMenuOpen ? style.open : ''}`} />
        <span className={`${style.iconBar} ${isMenuOpen ? style.open : ''}`} />
      </div>
    </div>
  );
};

export default NavBar;
