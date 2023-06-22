import React from 'react'
import Style from './Perfil.module.css'
import CV from '../../assets/CV.pdf'
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const Perfil = () => {

  const handleButton = () => {
    const link = document.createElement('a')
    link.href = CV;
    link.download = ''
    link.click()
  }

  return (
    <div id='perfil' className={Style.wrapper}>
      <h2 className={Style.title}>Sobre mim</h2>
      <div className={Style.container}>
        <div className={Style.picture}>
          <img src={require('../../assets/ProfilePicture.png')} alt='Profile' />
        </div>
        <div className={Style.description}>
          <p>Olá, meu nome é Aleikson e sou um desenvolvedor Frontend focado em criar experiências envolventes e intuitivas na web. Com sólidos conhecimentos em JavaScript e ReactJS, estou constantemente explorando novas possibilidades e aprimorando minhas habilidades para entregar soluções de alta qualidade.</p>
          <p>Ao navegar por este portfolio, você encontrará projetos recentes. Cada projeto reflete meu compromisso em criar interfaces funcionais e atraentes, com ênfase na usabilidade e na experiência do usuário.</p>
          <div className={Style.content}>
            <button className={Style.btn} onClick={handleButton}>Baixar Currículo</button>
            <a className={Style.contactItem} href="mailto:aleiksonsilva@hotmail.com">
              <FaEnvelope className={Style.icon} />
              aleiksonsilva@hotmail.com
            </a>
            <a className={Style.contactItem} href="https://wa.me/5599984557469">
              <FaPhone className={Style.icon} />
              (99) 98455-7469
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Perfil