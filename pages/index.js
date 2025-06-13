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
      <a href="https://amzn.to/3FThBaV" target="_blank">
        Shimano SH-RC3 Fahrradschuhe Schwarz - £99.99
      </a>
    </li>
    <li>
      <a href="https://www.amazon.co.uk/dp/B07YSPG3H1" target="_blank">
        ROCKBROS Bike Light Set – £26.99
      </a>
    </li>
    <li>
      <a href="https://www.amazon.co.uk/dp/B08BJJFZ5K" target="_blank">
        Giro Syntax MIPS Helmet – £79.95
      </a>
    </li>
    <li>
      <a href="https://www.amazon.co.uk/dp/B079Z8Y5NB?tag=pkaff-21" target="_blank">
        Kryptonite D-lock + Cable – £49.99
      </a>
    </li>
    <li>
      <a href="https://www.amazon.co.uk/dp/B082PZSPW6?tag=pkaff-21" target="_blank">
        Castelli Entrata V Jersey – £59.00
      </a>
    </li>
  </ul>
</div>

      </main>
    </>
  );
}
