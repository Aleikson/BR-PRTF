import React from 'react'
import { FaEnvelope, FaPhone, FaWhatsapp, FaGithub } from 'react-icons/fa';
import Style from './Contact.module.css'

const Contact = () => {
  return (
    <div className={Style.contactPage}>
      <div className={Style.container}>
        <a className={Style.contactItem} href="mailto:aleiksonsilva@hotmail.com">
          <FaEnvelope className={Style.icon} />
        </a>
      </div>
      <div className={Style.container}>
        <a className={Style.contactItem} href="https://wa.me/5599984557469">
          <FaPhone className={Style.icon} />
        </a>
      </div>
      <div className={Style.container}>
        <a className={Style.contactItem} href="https://api.whatsapp.com/send?phone=99984557469">
          <FaWhatsapp className={Style.icon} />
        </a>
      </div>
      <div className={Style.container}>
        <a className={Style.contactItem} href="https://github.com/Aleikson">
          <FaGithub className={Style.icon} />
        </a>
      </div>
    </div>
  )
}

export default Contact