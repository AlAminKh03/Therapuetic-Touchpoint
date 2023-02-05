import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {Inter} from "@next/font/google"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer/Footer'

const inter= Inter({
  subsets:['latin']
})

export default function App({ Component, pageProps }: AppProps) {
  return(
    <main className={`${inter.className}  bg-fixed min-h-screen bg-center bg-cover custom-img z-[4]` }>
        <div className='absolute top-0 left-0 bottom-0 right-0 bg-black/70 z-[2]'/>
      <Navbar/>
       <Component {...pageProps} />
       <Footer/>
    </main>
  )
}
