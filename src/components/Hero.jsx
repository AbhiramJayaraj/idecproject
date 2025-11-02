import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Hero(){
  return (
    <section className="py-20">
      <div className="container-max text-center">
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.8}} className="bg-gradient-to-r from-primary to-black text-white rounded-2xl p-12 shadow-lg">
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight">Innovate. Create. Transform. — <span className="text-white">IEDC Bootcamp CEC</span></h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">A hands-on program for students to learn product thinking, prototyping and pitching.</p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <Link to="/events" className="inline-block bg-white text-primary font-semibold px-5 py-3 rounded-lg shadow">See Events</Link>
            <Link to="/blog" className="inline-block bg-white/20 text-white font-semibold px-5 py-3 rounded-lg border border-white/30">Read Blog</Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
