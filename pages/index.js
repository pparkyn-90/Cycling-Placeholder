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
      <a href="https://www.amazon.co.uk/SHIMANO-RC300-SPD-SL-Shoes-Black/dp/B08HYVVP84?crid=2X32ZMHUGI71Z&dib=eyJ2IjoiMSJ9.uWsGAdrCz-g8T32iFojzk45bEREJYq2QdWjUSNLXOf0Fbx-p-1FzjXS0Kp-MqAvzY1OYi1fQf3psd6XLgpmkSIQiGB9d5l4c9ffk1TPnfc68FGeUwiCBzou2ggSdlb5GcqdNfg1hinPJQRKTCuUz-TcU_yIToTW6gEIXrnRhkUEIfmcZN_ZfXzsLucMTm9JHVabCQej6vYzxyW8FXfhuhdNQ_ZzRSQ0xKmPGQJ3WILiT5Biouy3aPKPrX8eFxvGitjg5wyPj9PVU_EQhJJ4p05Qh7qcBc1vTJa01DZke4tY.6D3F5DGg52J607VHQ3d7_46gr0d9Vmxi4F_HerlFVYY&dib_tag=se&keywords=Shimano%2BRC3%2BCycling%2BShoes&qid=1749841846&sprefix=shimano%2Brc3%2Bcycling%2Bshoes%2Caps%2C121&sr=8-10&ufe=app_do%3Aamzn1.fos.0fa28f01-6fca-4422-af4e-d52d5ad71bfe&th=1&psc=1&linkCode=ll1&tag=pkaff-21&linkId=1b18b72e02b1c3228b0320c2a60d7e91&language=en_GB&ref_=as_li_ss_tl" target="_blank">
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
