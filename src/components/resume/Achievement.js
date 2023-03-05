import React from 'react'
import {FaStar} from "react-icons/fa";
import Title from '../layouts/Title';
import Card from '../features/Card';

const Features = () => {
  return (
    <section
      id="resume"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="" des="Achievments" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Smart India Hackathon(SIH-2022)"
          des="Developed an App for Department of School and Education, Ministry of Education. PSID-RK780"
          icon={<FaStar />}
        />
        <Card
          title="BITHON 2022"
          des="Runnerups of Internal Hacakthon i.e., BITHON 2022"
          icon={<FaStar />}
        />
      
      </div>
    </section>
  );
}

export default Features