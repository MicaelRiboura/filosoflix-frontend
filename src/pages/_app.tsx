import type { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyle from '../styles/GlobalStyles'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Filosoflix</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Mukta&display=swap" rel="stylesheet" />
      </Head>
        <GlobalStyle />
        <Component {...pageProps} />
    </>
  )
}
export default MyApp
