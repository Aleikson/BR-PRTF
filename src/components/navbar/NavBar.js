import React, { useEffect, useState } from 'react';
import style from './NavBar.module.css';


const NavBar = () => {
    const [name, setName] = useState('');

    useEffect(() => {
        const targetName = "< Home />";
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

    return (
        <div className={style.container}>
            <a href="/" className={style.nameLink}>
                {name}
            </a>
            <div className={style.links}>
                <a href="experience">Experiência</a>
                <a href="perfil">Sobre</a>
                <a href="skills">Skills</a>
                <a href="portfolio">Portfolio</a>
            </div>
        </div>
    );
};

export default NavBar;
