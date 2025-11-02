import React from 'react';
import { motion } from 'framer-motion';

export default function EventCard({event}){
  return (
    <motion.article whileHover={{scale:1.02}} className="relative rounded-2xl overflow-hidden shadow-lg">
      <div className="p-6 bg-white">
        <h3 className="text-xl font-semibold text-black">{event.title}</h3>
        <div className="text-sm text-gray-500 mt-1">{event.date} · {event.location}</div>
        <p className="mt-3 text-gray-600">{event.short}</p>

        <div className="mt-4 flex justify-end">
          <button className="px-4 py-2 rounded-lg bg-primary text-white font-medium">Learn More</button>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white opacity-0 hover:opacity-30 transition-opacity pointer-events-none" />
    </motion.article>
  )
}
