import React, { useState } from "react";
function Projects() {
  const [projects] =useState([
    {
      name: 'Password Generator',
      githubLink: 'https://github.com/Rd2423/Password-Generator',
      photo: '../../assets/pwdGenerator.png',
      subtitle: 'HTML, CSS, Weather API, JQuery, Javascript'
    },
    {
      name: "Weather",
      subtitle: "HTML, CSS, JavaScript, jQuery, APIs",
      image: "../../assets/124415474-ed9c4480-dd22-11eb-81f2-5e01fe911386.png",
      githubLink: "https://github.com/Rd2423/Weather",
    }
  ])
    return (
      <div>
          <div className="flex flex-col w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
              Projects
            </h1>

          </div>
          <div className="flex flex-wrap -m-4"></div>
            
            {projects.map((project, i) => (
              <div>
             <h3 key={project.name}>{project.name}</h3>
             <br />
             <img key ={project.photo}
             src={project.photo}/>
             <br />
             <p key={project.subtitle}>{project.subtitle}</p>
             <a href={project.githubLink}key={project.githubLink}>{project.githubLink}</a>
             </div>
            ))}
            
          </div>
          
    );
  }
export default Projects
  