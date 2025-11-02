import React from 'react';

export default function TeamCard({member}){
  return (
    <div className="bg-white rounded-2xl shadow p-4 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-lg">
      <img
        src={member.photo}
        alt={member.name}
        className="w-24 h-24 rounded-full object-cover bg-gray-100"
        onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/logo192.png'; }}
      />
      <h4 className="mt-3 font-semibold text-black text-base bg-gray-200 px-2 py-1 rounded">{member.name}</h4>
      <div className="text-sm text-gray-500">{member.role}</div>

    </div>
  )
}
