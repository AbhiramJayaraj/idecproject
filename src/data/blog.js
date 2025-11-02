// Use existing raster assets as thumbnails to avoid missing-file errors
// Use safe existing assets as thumbnails
import idec from '../assets/joe.webp';
import idec2 from '../assets/lekshmipriya.webp';
const posts = [
  {
    id: 'b1',
    title: 'Bootcamp Launch: What to expect',
    author: 'Prof. S. Nair',
    date: '2025-10-01',
    thumb: idec,
    snippet: 'An overview of the Bootcamp program, schedule, and how to prepare.',
    content:
      'Welcome to the IEDC Bootcamp CEC. Over the next weeks we will explore product thinking, rapid prototyping and pitching. This post covers logistics and recommended pre-work.'
  },
  {
    id: 'b2',
    title: 'Mentor spotlight: Alumnus Ashwin',
    author: 'IEDC Team',
    date: '2025-10-20',
    thumb: idec2,
    snippet: 'Meet Ashwin, our mentor for product strategy and growth.',
    content:
      'Ashwin is a product leader with experience in startups and scale-ups. In this interview he shares advice for early founders.'
  }
];

export default posts;
