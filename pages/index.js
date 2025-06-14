import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Cycling Deals UK</title>
        <meta name="description" content="Compare the best-value cycling gear from Amazon — launching soon!" />
      </Head>
      <main style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        fontFamily: 'Arial, sans-serif',
        background: '#f7f7f7',
        padding: '2rem',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '2.5rem', color: '#222' }}>🚴‍♂️ Cycling Deals UK</h1>
        <p style={{ maxWidth: '600px', fontSize: '1.2rem', marginTop: '1rem', color: '#444' }}>
          Compare the best prices on bikes, helmets, cycling shoes, and accessories — all from Amazon.
          We’re launching soon, and you’ll be able to shop smarter in seconds.
        </p>
        <p style={{ marginTop: '2rem', color: '#888' }}>
          This site is under development. Affiliate links and product comparison features coming soon!
        </p>
        <div style={{ marginTop: '2rem', textAlign: 'left' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Featured Deals</h2>
         <ul>
  <li>
    <a href="https://amzn.to/45He8qD" target="_blank">
      Amazon Best Deals!
    </a>
            <p>
    <a href="https://amzn.to/4e7R4Ds" target="_blank">
      Best cycling deals on today!!!
    </a>
            </p>
  </li>
</ul>
        </div>
      </main>
    </>
  );
}
