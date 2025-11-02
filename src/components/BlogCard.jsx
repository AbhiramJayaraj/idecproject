import React from 'react';

export default function BlogCard({post, onReadMore}){
  return (
    <article className="bg-white rounded-2xl shadow overflow-hidden">
      <img
        src={post.thumb}
        alt={post.title}
        className="w-full h-40 object-cover bg-gray-100"
        onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/logo192.png'; }}
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{post.title}</h3>
        <div className="text-sm text-gray-500">By {post.author} · {post.date}</div>
        <p className="mt-2 text-gray-600">{post.snippet}</p>
        <div className="mt-4 text-right">
          <button onClick={() => onReadMore(post)} className="px-4 py-2 bg-primary text-white rounded-lg">Read More</button>
        </div>
      </div>
    </article>
  )
}
