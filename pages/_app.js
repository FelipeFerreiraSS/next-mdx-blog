// import 'nextra-theme-blog/style.css'
import Head from 'next/head'
// import Prism from 'prism-react-renderer/prism'

import '../styles/main.css'

// (typeof global !== "undefined" ? global : window).Prism = Prism

// require("prismjs/components/prism-javascript")

export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
