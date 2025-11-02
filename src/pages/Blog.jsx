import React, {useState} from 'react';
import posts from '../data/blog';
import BlogCard from '../components/BlogCard';
import Modal from '../components/Modal';

export default function Blog(){
  const [openPost, setOpenPost] = useState(null);

  return (
    <main className="py-12">
      <div className="container-max">
        <h2 className="text-2xl font-semibold">Blog & Updates</h2>
        <p className="text-gray-500 mt-1">Latest news and updates</p>

        <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map(p => (
            <BlogCard key={p.id} post={p} onReadMore={(post) => setOpenPost(post)} />
          ))}
        </div>

        <Modal open={!!openPost} onClose={() => setOpenPost(null)} title={openPost?.title}>
          <div>
            <div className="text-sm text-gray-500">By {openPost?.author} · {openPost?.date}</div>
            <div className="mt-4">{openPost?.content}</div>
          </div>
        </Modal>
      </div>
    </main>
  )
}
