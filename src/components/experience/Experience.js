import React from 'react'
import Style from './Experience.module.css'
import Test from '../../assets/SvgSkills/9Git.svg'

const Experience = () => {
  return (
    <>
      <h1>Experience</h1>
      <div className={Style.container}>
        <div className={Style.image}>
          <div className={Style.imgContent}>
            <img src={Test} alt='' />
          </div>
        </div>
        <div className={Style.content}>
          <h2>Site de E-commerce</h2>
          <p>
            Este projeto é uma simulação de e-commerce de uma loja de cupcakes que foi
            desenvolvido utilizando JavaScript, ReactJS e CSS. O site inclui barra de
            navegação, página inicial, de compras e carrinho com valores.
          </p>
          <p>
            Durante o desenvolvimento deste projeto, aprendi a utilizar as tecnologias
            mencionadas acima, além de aprimorar minhas habilidades em design de
            interface de usuário e desenvolvimento de front-end.
          </p>
          <p>
            Este projeto demonstra minha habilidade em desenvolver soluções de front-
            end atraentes e funcionais para aplicações web, além de minha capacidade
            de aprender novas tecnologias e aplicá-las em projetos reais.
          </p>
        </div>
      </div>

      <div className={Style.container}>
        <div className={Style.image}>
          <div className={Style.imgContent}>
            <img src={Test} alt='' />
          </div>
        </div>
        <div className={Style.content}>
          <h2>Site de Produtividade</h2>
          <p>
            Este projeto é um site de produtividade que permite aos usuários adicionar
            notas e tarefas para gerenciar suas atividades diárias. Foi desenvolvido
            utilizando JavaScript, ReactJS, CSS e Firebase. As notas são salvas
            localmente no navegador do usuário usando LocalStorage, enquanto a lista
            de tarefas é armazenada no Firebase.
          </p>
          <p>
            Além disso, o site apresenta frases motivacionais para incentivar o usuário a
            manter o foco e a produtividade. Durante o desenvolvimento deste projeto,
            aprimorei minhas habilidades de desenvolvimento front-end, bem como na
            integração do Firebase ao projeto.
          </p>
          <p>
            Este projeto demonstra minha capacidade de desenvolver soluções eficazes
            para problemas cotidianos, bem como minha habilidade em trabalhar com
            tecnologias front-end e back-end. Além disso, o projeto ilustra minha
            capacidade de aprender e aplicar novas tecnologias para melhorar a
            qualidade das minhas soluções.
          </p>
        </div>
      </div>

    </>
  )
}

export default Experience