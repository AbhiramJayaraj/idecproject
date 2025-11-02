import React from 'react';

export default function TeamCard({member}){
  return (
    <div className="bg-white rounded-2xl shadow p-4 flex flex-col items-center text-center">
      <img
        src={member.photo}
        alt={member.name}
        className="w-24 h-24 rounded-full object-cover bg-gray-100"
        onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/logo192.png'; }}
      />
      <h4 className="mt-3 font-semibold text-black">{member.name}</h4>
      <div className="text-sm text-gray-500">{member.role}</div>
      <div className="mt-3 flex items-center gap-3">
        {member.socials?.linkedin && <a href={member.socials.linkedin} className="text-blue-600 text-sm">LinkedIn</a>}
        {member.socials?.twitter && <a href={member.socials.twitter} className="text-sky-500 text-sm">Twitter</a>}
      </div>
    </div>
  )
}
