import React from 'react'
import netflixImg from '@/public/assets/netflix.jpg'
import coffeeImg from '@/public/assets/coffee.jpg'
import chatgptImg from '@/public/assets/chatgpt.jpg'
import portfolioImg from '@/public/assets/portfolio.png'
import shoesImg from '@/public/assets/shoes.jpg'
import { LuGraduationCap } from 'react-icons/lu'
import { FaReact } from 'react-icons/fa'
import { CgWorkAlt } from 'react-icons/cg'
import { FaCloud } from 'react-icons/fa'


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Netflix Clone",
    description: "Creating a Netflix clone was one of my initial projects as I delved into the realm of full-stack application development.",
    tags: ["TypeScript", "React", "Tailwind", "MongoDB", "Prisma", "NextJS", "Full-stack"],
    imageUrl: netflixImg,
  },
  {
    title: "Cafe Peregrino",
    description: "A Spanish coffee shop, drawing inspiration from the pilgrims of Camino de Santiago, was developed using WordPress and subsequently launched on AWS Lightsail.",
    tags: ["WordPress", "AWS", "Lightsail", "Front-end"],
    imageUrl: coffeeImg,
  },
  {
    title: "What is Chat-GPT?",
    description: "I developed a simple responsive website using React and deployed it through AWS Amplify",
    tags: ["TypeScript", "React", "AWS Amplify", "Front-end", "Github"],
    imageUrl: chatgptImg,
  },
  {
    title: "Isupong Mo E-Commerce",
    description: "An e-commerce website built for a wholesaler small goods merchandise ",
    tags: ["TypeScript", "React", "MongoDB", "Prisma", "NextJS"],
    imageUrl: shoesImg,
  },
  {
    title: "Portfolio Website",
    description: "Personal website to showcase my projects and skills",
    tags: ["TypeScript", "React", "Tailwind", "Framer-motion", "NextJS", "Email", "Github"],
    imageUrl: portfolioImg,
  }, 
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "Prisma",
    "MongoDB",
    "AWS",
    "Azure",
    "Wordpress",
    "Framer Motion",
    "Express",
] as const;

export const experiencesData = [
  {
    title: "B.A in Business Administration",
    location: "Los Angeles, CA",
    description:
      "I graduated from Mount Saints Mary's University in Los Angeles, CA.",
    icon: React.createElement(LuGraduationCap),
    date: "2018",
  },
  {
    title: "Sales Specialist",
    location: "Santa Monica, CA",
    description:
      "I worked as a sales specialist for Apple in Santa Monica. I learned about hardware setup, software integration, data migration and authentication.",
    icon: React.createElement(CgWorkAlt),
    date: "2010 - 2020",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - 2022",
  },
  {
    title: "Solutions Architect",
    location: "Los Angeles, CA",
    description:
      "Providing recommendations and roadmaps for proposed solutions. Performing design, debug, and performance analysis on solutions. Documenting and sharing best practice knowledge for new solutions.",
    icon: React.createElement(FaCloud),
    date: "2022 - present",
  },
  
] as const;
