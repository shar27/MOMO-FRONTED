import Head from 'next/head'
import Nav from '../components/Nav'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Hero from '../components/Hero'
import CandleGrid from '../components/CandleGrid'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
export default function Home() {
  return (
    <div>
      <Head>
        <title>MOMO</title>
        <meta name="description" content="luxury" />
        <link rel="icon" href="/momo.png" />
      </Head>
      <Banner/>
<Header/>
    <Nav/>
    <Hero/>
    <div className='mt-96'>
    <CandleGrid/>
    </div>
    <Footer/>
    </div>
  )
}
