import React from 'react'
import {FaGraduationCap} from "react-icons/fa";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="My Education" des="Education" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="B.Tech. in Computer Engineering"
          des="Pursuing Third Year in Computer Engineering at Bajaj Institute of Technology, Wardha (2020-2024) CGPA(till 3rd Year-9.08)"
          icon={<FaGraduationCap />}
        />
        <Card
          title="High School | Science"
          des="Completed from New English Junior College, Wardha (2018-2020)  Percentage-84.92%"
          icon={<FaGraduationCap />}
        />
        <Card
          title="SSC"
          des="Completed from Bharat Dnyan Mandiram, Wardha (2018) Percentage-89.99%"
          icon={<FaGraduationCap/>}
        />
      
      </div>
    </section>
  );
}

export default Features