import React from 'react';
import team from '../data/team';
import TeamCard from '../components/TeamCard';

export default function Team(){
  return (
    <main className="py-12">
      <div className="container-max">
        <h2 className="text-2xl font-semibold">Team</h2>
        <p className="text-gray-500 mt-1">Leads & Volunteers</p>

        <section className="mt-6">
          <h3 className="text-xl font-semibold">Leads</h3>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {team.leads.map(m => <TeamCard key={m.id} member={m} />)}
          </div>
        </section>
      </div>
    </main>
  )
}
