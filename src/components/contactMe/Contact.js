import React from 'react'
import { FaEnvelope, FaPhone, FaWhatsapp, FaGithub } from 'react-icons/fa';
import Style from './Contact.module.css'

const Contact = () => {
  return (
    <div className={Style.contactPage}>
      <h1>Informações de Contato</h1>
      <div className={Style.contactItem}>
        <FaEnvelope className={Style.icon} />
        <a className={Style.contactLink} href="mailto:aleiksonsilva@hotmail.com">aleiksonsilva@hotmail.com</a>
      </div>
      <div className={Style.contactItem}>
        <FaPhone className={Style.icon} />
        <span>(99) 98455-7469</span>
      </div>
      <div className={Style.contactItem}>
        <FaWhatsapp className={Style.icon} />
        <a className={Style.contactLink} href="https://api.whatsapp.com/send?phone=99984557469">whatsapp.com/Aleikson</a>
      </div>
      <div className={Style.contactItem}>
        <FaGithub className={Style.icon} />
        <a className={Style.contactLink} href="https://github.com/Aleikson">github.com/Aleikson</a>
      </div>
    </div>
  )
}

export default Contact