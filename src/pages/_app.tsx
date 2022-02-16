import type { AppProps } from 'next/app'
import { Header } from '../collections/Header'
import {GlobalStyles} from "../styles"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <GlobalStyles />
    <Header />
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
