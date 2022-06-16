import React from 'react'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import Analytics from '../components/Analytics'

const Homepage = () => {
	return (
		<>
			<Navbar/>
			<Hero/>
			<Analytics/>
			<NewsLetter/>
			<Cards/>
			<Footer/>
		</>
	)
}

export default Homepage
