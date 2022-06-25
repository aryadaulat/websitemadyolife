import React from 'react'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import Analytics from '../components/Analytics'
import Virtual3DRoom from '../components/Virtual3DRoom'

const Homepage = () => {
	return (
		<>
			<Navbar/>
			<Hero/>
			{/* <Analytics/> */}
			<Virtual3DRoom/>
			<NewsLetter/>
			<Cards/>
			<Footer/>
		</>
	)
}

export default Homepage
