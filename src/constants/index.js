import {
    next,
    php,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    svelte
  } from "../assets";

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: reactjs,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Svelte Developer",
      icon: svelte,
    },
  ];

  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Svelte",
      icon: svelte,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "next",
      icon: next,
    },
    {
      name: "PHP",
      icon: php,
    },
  ];

  const experiences = [
    {
      title: "HTML-CSS-JS Developer",
      company_name: "2020",
      icon: javascript,
      iconBg: "#383E56",
      date: "September 2020 - March 2021",
      points: [
        "I started coding when i was in 7th grade at the age of 12, my first languages were html and css",
        "Then i started to learn more about JavaScript and deep about its core concepts and that of programming as a whole",
      ],
    },
    {
      title: "PHP Developer",
      company_name: "2021",
      icon: php,
      iconBg: "#E6DEDD",
      date: "April 2021 - Feb 2022",
      points: [
        "After i had learnt main things about Vanilla frontend, I started to learn more about the backend side of the web",
        "I started with php during the start of my 8th grade and made various project with it, one is Qbonanza"
      ],
    },
    {
      title: "Typescript/Express developer",
      company_name: "2022",
      icon: typescript,
      iconBg: "#383E56",
      date: "April 2022 - October 2022",
      points: [
        "As i got more into the field and promoted to my 9th grade, I started to get more into new things and discovered about developing backend api's with node",
        "I also learned typescript and learnt key concepts about type safety and http protocol during this time"
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "November 2022 - Present",
      icon: reactjs,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "As time went on, I started to learn more about how full stack development works and started to learn it",
        "I learnt various frameworks during this time such As React, Redux, Svelte, Passport.js, Next.js, MongoDb and hope to increase my sphere of knowledge and experience"
      ],
    },
  ];

  const projects = [
    {
      name: "Car Racing",
      description:
        "Web-based game made using pure vanilla js and css, with interactivity, scores and made with the understanding of the DOM model",
      tags: [
        {
          name: "html",
          color: "text-orange-500",
        },
        {
          name: "css",
          color: "blue-text-gradient",
        },
        {
          name: "vanilla-js",
          color: "text-yellow-500",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/KartikeyKakaria/Car-Racing",
    },
    {
      name: "Chat Application",
      description:
        "A web application where users can create an account and find random people to have real time chat with, which would increase their social skills",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "socket-io",
          color: "black-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/KartikeyKakaria/mern-chat-app",
    },
    {
      name: "Programmers-Media: Sociomedia",
      description:
        "A complete programmers chat and excercise media platform made in react, typescript express and mongodb. IT is currently in dev",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "text-blue-800",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/KartikeyKakari/Sociomedia-backend",
    },
  ];

  export { services, technologies, experiences, projects };
