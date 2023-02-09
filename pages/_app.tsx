import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {Inter} from "@next/font/google"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer/Footer'
import 'react-day-picker/dist/style.css';
import AuthProvider from '../components/Contexts/AuthProvider'

const inter= Inter({
  subsets:['latin']
})

export default function App({ Component, pageProps }: AppProps) {
  console.log(process.env.NEXT_PUBLIC_API_KEY)
  return(
    <main className={`${inter.className}  bg-fixed min-h-screen bg-center bg-cover z-[4]` }>
      {/* <AuthProvider> */}

      <Navbar/>
       <Component {...pageProps} />
       <Footer/>
      {/* </AuthProvider> */}
       
    </main>
  )
}
