import React from 'react';
import events from '../data/events';
import EventCard from '../components/EventCard';

export default function Events(){
  return (
    <main className="py-12">
      <div className="container-max">
        <h2 className="text-2xl font-semibold">All Events</h2>
        <p className="text-gray-500 mt-1">Browse scheduled events and workshops</p>

        <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {events.map(ev => (
            <EventCard key={ev.id} event={ev} />
          ))}
        </div>
      </div>
    </main>
  )
}
