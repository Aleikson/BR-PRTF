import React from 'react'
import style from './NavBar.module.css'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className={style.container}>
            <div className={style.profilePicture}>
                <a href='/'>
                    <img src={require('../../assets/ProfilePicture.png')} alt='Profile' />
                </a>
            </div>
            <div className={style.links}>
                <Link to='skills'>Skills</Link>
                <Link to='experience'>Experiência</Link>
                <Link to='portfolio'>Portfolio</Link>
                <Link to='contact'>Contato</Link>
            </div>
        </div>
    )
};

export default NavBar