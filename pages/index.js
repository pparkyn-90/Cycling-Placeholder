import Head from 'next/head';
import { useState, useEffect } from 'react';
const deals = [
  {
    name: "Shark Cordless Stick Vacuum Cleaner",
    discount: "36% off",
    Now: "£179.00",
    expiry: "soon!",
    image: "https://m.media-amazon.com/images/I/51q49k+71GL._AC_SY300_SX300_.jpg",
    link: "https://amzn.to/3TnWVLg"
  },
  {
    name: "Cordless Strimmer",
    discount: "53% off",
    Now: "£42.49",
    expiry: "Limited time",
    image: "https://m.media-amazon.com/images/I/71Evs5lakEL._AC_SX569_.jpg",
    link: "https://amzn.to/4l3rf9H"
  },
  {
    name: "Shark FlexBreeze TableMate Cordless Fan",
    discount: "34% off",
    price: "£99.00",
    expiry: "Ends soon",
    image: "https://m.media-amazon.com/images/I/61ijbs5QVwL._AC_SX679_.jpg",
    link: "https://amzn.to/45ZvtuJ"
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
        <title></title>
      </Head>
      <div
  style={{
    backgroundImage: 'url("/hero.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '1000px',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '0 1rem'
  }}
>
  <h1 style={{
    fontSize: 'clamp(1.5rem, 6vw, 3rem)',
    fontWeight: 'bold',
    color: 'white',
    textShadow: '1px 1px 4px rgba(0,0,0,0.5)',
    margin: 0
  }}>
  </h1>
</div>
      <main style={{ fontFamily: 'Arial', padding: '2rem', textAlign: 'center' }}>
        <h2 style={{ color: '#001F54' }}>Top Deals</h2>
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

                
<section style={{
  backgroundColor: '#f0f8ff',
  padding: '2rem',
  marginTop: '2rem',
  borderTop: '2px solid #ccc'
}}>
  <h2 style={{
    fontSize: '1.75rem',
    marginBottom: '1rem',
    color: '#001F54',
    textAlign: 'center'
  }}>
    About Us
  </h2>
  <p style={{
    maxWidth: '800px',
    margin: '0 auto',
    fontSize: '1rem',
    lineHeight: '1.6',
    color: '#333',
    textAlign: 'center'
  }}>
    <strong>Amazon Deals</strong> Our mission is to help you find the best deals on Amazon, ensuring you're getting the most value for your money and stretching it as far as it can go.
  </p>
</section>
                
                <footer style={{
  backgroundColor: '#f8f8f8',
  textAlign: 'center',
  padding: '1rem',
  fontSize: '0.9rem',
  color: '#555',
  marginTop: '2rem'
}}>
  As an Amazon Associate I earn from qualifying purchases.
</footer>
    </>
  );
}
