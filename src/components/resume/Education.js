import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020-2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Position and Responsibilities</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Intel Student Ambassador"
            subTitle="Lead - ISDC Bajaj Institute of Technology, Wardha"
            result="2022-Present"
            des="Get the Training of  Intel® AI Analytics Toolkit."
          />
          <ResumeCard
            title="Student Placement Cordinator"
            subTitle="SPC - Computer Engineering Department (BITW)"
            result="2022-Present"
            des="Student Placement Coordinator at Training and Placement Cell of Computer Engineering Department"
          />
          <ResumeCard
            title="Design Lead - Google Developer Students Club"
            subTitle="Design Lead- GDSC(BITW)"
            result="2022-Present"
            des="Creating Posters, Flyers using latest technologies like Canva, Adobe Illustrator and Figma. "
          />
           <ResumeCard
            title="Public Relations Lead -Coding Blocks Students Chapter"
            subTitle="Public Relations Lead- CBSC(BITW)"
            result="2022-Present"
            des="Connecting with different peoples using this club."
          />
        </div>
      </div>
      {/* part Two */}

    </motion.div>
  );
}

export default Education