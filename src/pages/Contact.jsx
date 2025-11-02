import React, {useState} from 'react';

export default function Contact(){
  const [form, setForm] = useState({name:'', email:'', message:''});
  const [status, setStatus] = useState('idle');

  function handleSubmit(e){
    e.preventDefault();
    setStatus('submitted');
  }

  return (
    <main className="py-12">
      <div className="container-max grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="text-gray-500 mt-1">Send us a message — we will get back to you shortly.</p>

          {status === 'submitted' ? (
            <div className="mt-6 bg-green-50 border border-green-100 p-4 rounded-lg">Thank you! Your message has been received (placeholder).</div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <input required className="w-full p-3 border rounded-lg" placeholder="Name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} />
              <input required type="email" className="w-full p-3 border rounded-lg" placeholder="Email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} />
              <textarea required className="w-full p-3 border rounded-lg" placeholder="Message" rows={6} value={form.message} onChange={e=>setForm({...form, message:e.target.value})} />
              <button className="px-5 py-3 bg-primary text-white rounded-lg">Send Message</button>
            </form>
          )}
        </div>

        <div>
          <h3 className="font-semibold">Location</h3>
          <div className="mt-3 w-full h-64 bg-gray-100 rounded-lg overflow-hidden">
            <iframe title="map" src="https://maps.google.com/maps?q=Trivandrum&t=&z=13&ie=UTF8&iwloc=&output=embed" className="w-full h-full" />
          </div>

          <div className="mt-6">
            <h4 className="font-semibold">Follow us</h4>
            <div className="mt-2 flex items-center gap-3">
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="text-blue-600">LinkedIn</a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-sky-500">Twitter</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-pink-500">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
