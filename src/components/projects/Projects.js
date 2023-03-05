import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour, projectFive } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="PORTFOLIO WEBSITE"
          des=" Personal Portfolio Website. Don't Need Much Info About It, Just Scroll Down. You're Here Only!"
          src={projectOne}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" E-commerce Website Built With MERN Stack. The Objective Of This Project Is To Practising The Concepts Of 'MERN STACK'."
          src={projectTwo}
        />
        <ProjectsCard
          title="Leave Management System"
          des=" This Is A College Leave Management System Website. In Which Faculty Can Apply For Leaves."
          src={projectThree}
        />
        <ProjectsCard
          title="Learning App"
          des=" Developed an App to track the learning outcomes in Foundational Years "
          src={projectFour}
        />
        <ProjectsCard
          title="CharDham Website"
          des="Developed a Chardham Website for tourists guidance using HTML,CSS and Javascript."
          src={projectFive}
        />
      
      </div>
    </section>
  );
}

export default Projects