import React from 'react';
import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";
import Description from './Description';

import Ask from './Ask';
import More from './More';
import Navbar from '../Navbar'



const Homepage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center ">
      <Navbar />
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Let’s build  <br /> from here
      </motion.h1>
    </LampContainer>
    <Description />
    <More />
    <Ask />
    
   

    </div>
  );
}

export default Homepage;
