import React from 'react';

import { Card } from '../Atoms/Cards/index';
import { SkillList } from './SkillList';
import { SkillsMolecule } from '../Molecules/SkillsMolecule';

import iff from '../../assets/iff.png';
import udemy from '../../assets/udemy.png';
import 'react-multi-carousel/lib/styles.css';
import { SiCypress, SiDocker, SiJavascript, SiRubyonrails, SiTypescript } from 'react-icons/si';
import { FaGraduationCap } from 'react-icons/fa';


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1180 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1180, min: 600 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 2
    }
  };

  const skillsList = [
    {
      src: iff,
      title: 'Curso Técnico em Informática',
      status: 'Concluído em 2014',
      href: "https://portal1.iff.edu.br/nossos-campi/campos-centro/cursos-nova-interface/cursos-tecnicos/curso-tecnico-em-informatica",
      icon: <FaGraduationCap className='text-3xl rounded-full' />
    },
    {
      src: udemy,
      title: 'The Complete Ruby on Rails Developer Course',
      status: 'Em andamento',
      href: 'https://www.udemy.com/course/the-complete-ruby-on-rails-developer-course/',
      icon: <SiRubyonrails className='text-4xl'/>
    },
    {
      src: udemy,
      title: 'Curso Web Moderno Completo com JavaScript 2020',
      status: 'Certificado',
      href: 'https://www.udemy.com/certificate/UC-39998402-6d77-4454-9d43-926719ec4091/',
      icon: <SiJavascript className='text-2xl'/>
    },
    {
      src: udemy,
      title: 'Testes de aplicações modernas com Cypress',
      status: 'Certificado',
      href: 'https://www.udemy.com/certificate/UC-19b74e53-8f2e-46d1-a19a-c56d64196add/',
      icon: <SiCypress className='text-2xl'/>
    },
    {
      src: udemy,
      title: 'Entendendo Typescript',
      status: 'Certificado',
      href: 'https://www.udemy.com/certificate/UC-0dce5ff9-7176-46b3-bf12-3a0253bff2af/',
      icon: <SiTypescript className='text-2xl'/>
    },
    {
      src: udemy,
      title: 'Docker Completo do ZERO ao Avançado',
      status: 'Certificado',
      href: 'https://www.udemy.com/certificate/UC-75b54042-1a9a-4703-a6dd-c03553950c23/',
      icon: <SiDocker className='text-2xl'/>
    },
    {
      src: iff,
      title: 'Licenciatura em Letras',
      status: 'Concluído em 2020',
      href: "https://portal1.iff.edu.br/nossos-campi/campos-centro/cursos-nova-interface/cursos-superiores/licenciatura-em-letras",
      icon: <FaGraduationCap className='text-3xl rounded-full' />
    }
  ];

  return (
    <section className='flex justify-center w-full bg-gray-300 dark:bg-primaryBg' id='skills'>
      <Card.Root className='text-primary dark:text-white w-full md:w-4/5 rounded-2xl p-4 md:p-16'>
        <SkillsMolecule />        
        <SkillList skills={skillsList} responsive={responsive} />
      </Card.Root>
    </section>
  )
}