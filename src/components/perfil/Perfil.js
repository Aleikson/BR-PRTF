import React from 'react'
import Style from './Perfil.module.css'
import CV from '../../assets/CV.pdf'

const Perfil = () => {

  const handleButton = () => {
    const link = document.createElement('a')
    link.href = CV;
    link.download = ''
    link.click()
  }

  return (
    <div className={Style.container}>
      <div className={Style.picture}>
      <img src={require('../../assets/ProfilePicture.png')} alt='Profile' />
      </div>
      <div className={Style.description}>
        <p>Olá, meu nome é Aleikson e sou um desenvolvedor frontend. Tenho sólidos conhecimentos em JavaScript e seu framework React, e estou comprometido em criar experiências digitais intuitivas e funcionais para os usuários.</p>
        </div>
      <button className={Style.btn} onClick={handleButton}>Baixar Currículo</button>
    </div>
  )
}

export default Perfil