import Head from 'next/head'

const DEFAULT_OG_IMAGE = 'https://icoc.netlify.app/icoclogo.jpg'
const APP_STORE_URL = 'https://apps.apple.com/us/app/icoc/id1585486521'
const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=ru.icoc.app'

function safeString(value) {
  return typeof value === 'string' ? value.trim() : ''
}

function safeHttpUrl(value) {
  const normalized = safeString(value)
  if (!normalized) {
    return null
  }
  try {
    const parsed = new URL(normalized)
    if (parsed.protocol === 'http:' || parsed.protocol === 'https:') {
      return parsed.toString()
    }
    return null
  } catch (_) {
    return null
  }
}

export async function getServerSideProps({ req, resolvedUrl, params, query }) {
  const host =
    req.headers['x-forwarded-host'] || req.headers.host || 'icoc.netlify.app'
  const protocol = req.headers['x-forwarded-proto'] || 'https'
  const canonicalUrl = `${protocol}://${host}${resolvedUrl}`

  const id = safeString(params?.id)
  const lang = safeString(query?.lang)
  const deepLinkPath = lang
    ? `/qanda/article/${id}?lang=${encodeURIComponent(lang)}`
    : `/qanda/article/${id}`

  const ogImage = safeHttpUrl(query?.image) || DEFAULT_OG_IMAGE
  const ogTitle = safeString(query?.title) || 'ICOC Q&A'
  const ogDescription =
    safeString(query?.description) || 'Open this Q&A in ICOC app'

  return {
    props: {
      canonicalUrl,
      deepLinkPath,
      ogImage,
      ogTitle,
      ogDescription,
    },
  }
}

export default function QandADeepLinkPage({
  canonicalUrl,
  deepLinkPath,
  ogImage,
  ogTitle,
  ogDescription,
}) {
  return (
    <>
      <Head>
        <title>{ogTitle}</title>
        <meta name="description" content={ogDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={canonicalUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={ogTitle} />
        <meta name="twitter:description" content={ogDescription} />
        <meta name="twitter:image" content={ogImage} />
      </Head>

      <main style={{ padding: 24, fontFamily: 'Arial, sans-serif' }}>
        <h1 style={{ marginBottom: 12 }}>{ogTitle}</h1>
        <p style={{ marginBottom: 16 }}>{ogDescription}</p>
        <p style={{ marginBottom: 20 }}>
          Deep link: <code>{deepLinkPath}</code>
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
            Google Play
          </a>
          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
            App Store
          </a>
        </div>
      </main>
    </>
  )
}
