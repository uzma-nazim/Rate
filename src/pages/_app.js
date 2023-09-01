
import Head from 'next/head'
import "@/styles/globalstyle.scss"
import { ThemeProvider } from '@/context/ThemeContext'
export default function App({ Component, pageProps }) {
  
  
  return <>
    <Head>
      <title>Rate</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>

  </>
}
