import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Head from 'next/head'
import '@styles/globals.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      console.log(url)
      if (!shallow && url !== '/') {
        router.push('/')
      }
    }

    router.events.on('routeChangeStart', handleRouteChange)

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [router])

  return (
    <>
      <Head>
        <title>ICOC</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="International Churches of Christ" />
        <meta property="og:title" content="ICOC" />
        <meta property="og:description" content="Open in the app" />
        <meta property="og:image" content="/icoclogo.jpg" />
        <meta property="og:url" content="https://icoc.netlify.app" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
