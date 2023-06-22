import React, { useState } from 'react';
import Modal from 'react-modal';
import Experience from '../experience/Experience';
import project1 from '../../assets/projeto1.png';
import project2 from '../../assets/projeto2.png';
import Style from './Experience.module.css'

const ProjectItem = () => {
  const projects = [
    {
      title: 'Site de E-commerce',
      description: [
        'Este projeto é uma simulação de e-commerce de uma loja de cupcakes que foi desenvolvido utilizando JavaScript, ReactJS e CSS. O site inclui barra de navegação, página inicial, de compras e carrinho com valores.',
        'Durante o desenvolvimento deste projeto, aprendi a utilizar as tecnologias mencionadas acima, além de aprimorar minhas habilidades em design de interface de usuário e desenvolvimento de front-end.',
        'Este projeto demonstra minha habilidade em desenvolver soluções de front-end atraentes e funcionais para aplicações web, além de minha capacidade de aprender novas tecnologias e aplicá-las em projetos reais.'
      ],
      image: project1,
      page: '',
      link: 'https://github.com/Aleikson/ExampleOfEcommerce'
    },
    {
      title: 'Site de Produtividade',
      description: [
        'Este projeto é um site de produtividade que permite aos usuários adicionar notas e tarefas para gerenciar suas atividades diárias. Foi desenvolvido utilizando JavaScript, ReactJS, CSS e Firebase. As notas são salvas localmente no navegador do usuário usando LocalStorage, enquanto a lista de tarefas é armazenada no Firebase.',
        'Além disso, o site apresenta frases motivacionais para incentivar o usuário a manter o foco e a produtividade. Durante o desenvolvimento deste projeto, aprimorei minhas habilidades de desenvolvimento front-end, bem como na integração do Firebase ao projeto.',
        'Este projeto demonstra minha capacidade de desenvolver soluções eficazes para problemas cotidianos, bem como minha habilidade em trabalhar com tecnologias front-end e back-end. Além disso, o projeto ilustra minha capacidade de aprender e aplicar novas tecnologias para melhorar a qualidade das minhas soluções.'
      ],
      image: project2,
      page: '',
      link: 'https://github.com/Aleikson/PlanNote'
    }
  ];

  const [showModal, setShowModal] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const openModal = (project) => {
    setCurrentProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={Style.containerItem}>
      {projects.map((project, index) => (
        <div key={index} className={Style.content}>
          <Experience
            title={project.title}
            description={[]}
            image={project.image}
            link={project.link}
            page={project.page}
            onOpenModal={() => openModal(project)}
          />
        </div>
      ))}

      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        contentLabel="Description Modal"
        style={{
          overlay: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: "1"
          },
          content: {
            width: "40%",
            height: "auto",
            maxHeight: "70%",
            position: "relative",
          },
        }}
      >
        {currentProject && (
          <div>
            <h2>{currentProject.title}</h2>
            <ul>
              {currentProject.description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <button
              onClick={closeModal}
              style={{
                padding: "10px 20px",
                backgroundColor: "lightgray",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Fechar
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ProjectItem;