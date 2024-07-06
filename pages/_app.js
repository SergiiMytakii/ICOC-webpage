import { useRouter } from 'next/router'
import { useEffect } from 'react'
import '@styles/globals.css'


function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (url !== '/') {
        router.push('/')
      }
    }

    router.events.on('routeChangeStart', handleRouteChange)

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [router.events])

  return <Component {...pageProps} />
}

export default MyApp
