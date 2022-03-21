import React from "react";
import Project from "./Project";

const projects = [
  {
    id: 0,
    title: "MoviesNme",
    languages: "express, sequelize, css, js, mysql2, handlebars",
    image: "/images/moviesnme.png",
    repo: "https://github.com/MeenaAlemiJalal/moviesNme",
    live: "https://movienme.herokuapp.com/",
  },
  {
    id: 1,
    title: "Employee Management CLI",
    languages: "html, handlebars, node.js, css",
    image: "/images/employee-manage.png",
    repo: "https://github.com/MeenaAlemiJalal/08-challenge-OOP",
    live: null,
  },
  {
    id: 2,
    title: "Password Generator",
    languages: "html, css, js",
    image: "/images/pass-generator.png",
    repo: "https://github.com/MeenaAlemiJalal/03-Challenge-Javascript-Password-Generator",
    live: "https://meenaalemijalal.github.io/03-Challenge-Javascript-Password-Generator/",
  },
  {
    id: 3,
    title: "Tech Blog",
    languages: "css, js, handlebars, node.js, express, mongodb",
    image: "/images/techblog.png",
    repo: "https://github.com/MeenaAlemiJalal/14-Challenge-MVC",
    live: "https://the-tech-blog-meena.herokuapp.com/posts",
  },
  {
    id: 4,
    title: "Note Taker",
    languages: "html, css, js, node.js",
    image: "/images/notetaker.png",
    repo: "https://github.com/MeenaAlemiJalal/11-Challenge-Express.js-Note-Taker",
    live: "https://note-taker-meena.herokuapp.com/",
  },
  {
    id: 6,
    title: "Budgetar",
    languages: "html, css, js",
    image: "/images/budgetar.png",
    repo: "https://github.com/MeenaAlemiJalal/17-Challenge-PWA",
    live: "https://budgetar.herokuapp.com/",
  },
  {
    id: 7,
    title: "Lets Chat",
    languages: "express, Gql, css, js, mongodb",
    image: "/images/lets-chat.png",
    repo: "https://github.com/ebtaterbug/lets-chat",
    live: "https://vast-temple-57974.herokuapp.com/",
  },
];

function Projects() {
  return (
    <div 
    style={{
      width: '100%'
      }}>
      <h3  style={{
      fontSize: '20px'
      }}>Projects</h3>
      <hr />
      <Project projects={projects} />
    </div>
  );
}

export default Projects;
