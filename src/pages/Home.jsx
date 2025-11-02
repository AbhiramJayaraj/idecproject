import React from 'react';
import Hero from '../components/Hero';
import events from '../data/events';
import EventCard from '../components/EventCard';

export default function Home(){
  const highlights = events.slice(0,3);

  return (
    <main>
      <Hero />

      <section className="py-12">
        <div className="container-max">
          <h2 className="text-2xl font-semibold">Upcoming Events</h2>
          <p className="text-gray-500 mt-1">Quick highlights of upcoming programs</p>

          <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map(ev => (
              <EventCard key={ev.id} event={ev} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
