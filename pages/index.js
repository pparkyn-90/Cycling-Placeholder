import Head from 'next/head';
import { useState, useEffect } from 'react';

const deals = [
  {
    name: "Garmin Edge 530 GPS",
    discount: "40% off",
    price: "£229.99",
    expiry: "Ends in 2 days",
    image: "https://m.media-amazon.com/images/I/71Uwo9fKJPL._AC_SL1500_.jpg",
    link: "https://www.amazon.co.uk/dp/B07G2X3ZDL?tag=pkaff-21"
  },
  {
    name: "Giro Register MIPS Helmet",
    discount: "30% off",
    price: "£59.95",
    expiry: "Ends in 5 days",
    image: "https://m.media-amazon.com/images/I/81Q7uEZxEXL._AC_SL1500_.jpg",
    link: "https://www.amazon.co.uk/dp/B08F2YN6Y6?tag=pkaff-21"
  },
  {
    name: "RockBros Cycling Sunglasses",
    discount: "50% off",
    price: "£19.99",
    expiry: "Ends in 1 day",
    image: "https://m.media-amazon.com/images/I/61WbL6Fv9qL._AC_SL1500_.jpg",
    link: "https://www.amazon.co.uk/dp/B09DL7NN59?tag=pkaff-21"
  }
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % deals.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>Cycle Deals</title>
      </Head>
      <div
        style={{
          backgroundImage: 'url("/hero.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '300px',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2rem',
          fontWeight: 'bold'
        }}
      >
        Cycle Deals
      </div>
      <main style={{ fontFamily: 'Arial', padding: '2rem', textAlign: 'center' }}>
        <h2 style={{ color: '#001F54' }}>Top Cycling Deals</h2>
        <div style={{ maxWidth: '400px', margin: '2rem auto', border: '2px solid #ccc', padding: '1rem', borderRadius: '8px', background: '#f0f8ff' }}>
          <img src={deals[current].image} alt={deals[current].name} style={{ maxWidth: '100%', height: '200px', objectFit: 'contain' }} />
          <h3>{deals[current].name}</h3>
          <p style={{ fontSize: '1.25rem', color: 'red' }}>{deals[current].discount}</p>
          <p style={{ fontSize: '1.1rem' }}>{deals[current].price}</p>
          <p style={{ fontSize: '0.9rem', color: '#555' }}>{deals[current].expiry}</p>
          <a href={deals[current].link} target="_blank" rel="noreferrer">
            <button style={{ marginTop: '1rem', padding: '0.5rem 1rem', backgroundColor: '#ff3b3f', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
              View Deal
            </button>
          </a>
        </div>
      </main>
    </>
  );
}
