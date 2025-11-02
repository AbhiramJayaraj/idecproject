import React from 'react';
import { motion } from 'framer-motion';

export default function Modal({open, onClose, title, children}){
  if(!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
      <motion.div initial={{scale:0.9, opacity:0}} animate={{scale:1, opacity:1}} exit={{scale:0.9, opacity:0}} className="relative bg-white rounded-2xl shadow-lg max-w-2xl w-full p-6 z-10">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-semibold">{title}</h3>
          <button onClick={onClose} className="text-black">Close</button>
        </div>
        <div className="mt-4 text-gray-700">{children}</div>
      </motion.div>
    </div>
  )
}
