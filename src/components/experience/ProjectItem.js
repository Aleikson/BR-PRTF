import React from 'react';
import Experience from '../experience/Experience';
import TestImage from '../../assets/ProfilePicture.png';

const ProjectItem = () => {
    const projects = [
        {
            title: 'Site de E-commerce',
            description: [
                'Este projeto é uma simulação de e-commerce de uma loja de cupcakes que foi desenvolvido utilizando JavaScript, ReactJS e CSS. O site inclui barra de navegação, página inicial, de compras e carrinho com valores.',
                'Durante o desenvolvimento deste projeto, aprendi a utilizar as tecnologias mencionadas acima, além de aprimorar minhas habilidades em design de interface de usuário e desenvolvimento de front-end.',
                'Este projeto demonstra minha habilidade em desenvolver soluções de front-end atraentes e funcionais para aplicações web, além de minha capacidade de aprender novas tecnologias e aplicá-las em projetos reais.'
            ],
            image: TestImage,
            link: 'https://github.com/Aleikson/ExampleOfEcommerce'
        },
        {
            title: 'Site de Produtividade',
            description: [
                'Este projeto é um site de produtividade que permite aos usuários adicionar notas e tarefas para gerenciar suas atividades diárias. Foi desenvolvido utilizando JavaScript, ReactJS, CSS e Firebase. As notas são salvas localmente no navegador do usuário usando LocalStorage, enquanto a lista de tarefas é armazenada no Firebase.',
                'Além disso, o site apresenta frases motivacionais para incentivar o usuário a manter o foco e a produtividade. Durante o desenvolvimento deste projeto, aprimorei minhas habilidades de desenvolvimento front-end, bem como na integração do Firebase ao projeto.',
                'Este projeto demonstra minha capacidade de desenvolver soluções eficazes para problemas cotidianos, bem como minha habilidade em trabalhar com tecnologias front-end e back-end. Além disso, o projeto ilustra minha capacidade de aprender e aplicar novas tecnologias para melhorar a qualidade das minhas soluções.'
            ],
            image: TestImage,
            link: 'https://github.com/Aleikson/PlanNote'
        }
    ];

    return (
        <div>
            <h1>Experience</h1>
            {projects.map((project, index) => (
                <Experience
                    key={index}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    link={project.link}
                />
            ))}
        </div>
    );
};

export default ProjectItem;