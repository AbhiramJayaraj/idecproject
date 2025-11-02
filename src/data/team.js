// Local team images imported from src/assets/team/
// Prefer raster images (webp) if present for broader browser compatibility and sharper thumbnails
import joe from '../assets/joe.webp';
import lekshmi from '../assets/lekshmipriya.webp';
import jerry from '../assets/jerry.webp';
import abhijith from '../assets/abhijith.webp';

// Single `leads` section containing all leads/members consolidated per request
const team = {
  leads: [
    {
      id: 'l1',
      name: 'Joe Abraham K',
      role: 'Student Lead 1',
      photo: joe,
      socials: { linkedin: '#', twitter: '#' }
    },
    {
      id: 'l2',
      name: 'Lekshmipriya S',
      role: 'Student Lead 2',
      photo: lekshmi,
      socials: { linkedin: '#', instagram: '#' }
    },
    {
      id: 'l3',
      name: 'Jerry Sanju Joanes',
      role: 'Finance Lead',
      photo: jerry,
      socials: { linkedin: '#', twitter: '#' }
    },
    {
      id: 'l4',
      name: 'Abhijith J Nair',
      role: 'Quality & Operations Lead',
      photo: abhijith,
      socials: { linkedin: '#', twitter: '#' }
    }
  ]
};

export default team;
