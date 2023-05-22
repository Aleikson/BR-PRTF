import React from 'react'
import style from './NavBar.module.css'

const NavBar = () => {
    return (
        <div className={style.container}>
            <div className={style.profilePicture}>
                <img src={require('../../assets/ProfilePicture.png')} alt='Profile' />
            </div>
            <div className={style.links}>
                <a href='skills'>Skills</a>
                <a href='experience'>Experiência</a>
                <a href='portfolio'>Portfolio</a>
                <a href='contact'>Contato</a>
            </div>
        </div>
    )
};

export default NavBar