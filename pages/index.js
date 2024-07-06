import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Image from 'next/image'



export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>ICOC</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="International Churches of Christ" />
        <meta property="og:title" content="ICOC" />
        <meta property="og:description" content="Open in the app" />
        <meta property="og:image" content="/icoclogo.jpg" />
        <meta property="og:url" content="https://icoc.netlify.app" />

      </Head>

      <main>
        <Header title="Welcome to ICOC app!" />
        <Image src="/icoclfullogo.jpg" alt="ICOC Logo"  width={800} height={300}  layout="responsive"/>
        <div className="content-container">
          <p>Now there's no need to carry paper literature, all necessary materials are in the app.</p>

          <ul>
            <li>Christian songs with chords and videos</li>
            <li>Basics of Christianity</li>
            <li>Q&A</li>
            <li>Video teachings</li>
          </ul>
        </div>

        <h2 className="description">
          Do not have the app?
        </h2>
        <h2>
          Download it here:
        </h2>
        <div className="image-container">
          <a href="https://play.google.com/store/apps/details?id=ru.icoc.app" target="_blank" rel="noopener noreferrer">
            <Image src="/512x512.png" alt="Google Play Market" width={200} height={50}  />
          </a>

          <a href="https://apps.apple.com/us/app/icoc/id1585486521" target="_blank" rel="noopener noreferrer">
            <Image src="/appstore.png" alt="App Store" width={200} height={50}  />
          </a>
        </div>
      </main>

      <Footer />
    </div>
  )
}
