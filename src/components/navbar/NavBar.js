import React from 'react'
import style from './NavBar.module.css'

const NavBar = () => {
    return (
        <div className={style.container}>
            <div className={style.profilePicture}>
                <a href='/'>
                    <img src={require('../../assets/ProfilePicture.png')} alt='Profile' />
                </a>
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