import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
	const Dashboard =()=>{
		alert('Coming Soon')
	}
	return (
		<div name='analytics' className='w-full bg-white py-16 px-4'>
			<div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
				<img className='w-[500px] mx-auto my-4' src={Laptop} alt="/"/>
				<div className='flex flex-col justify-center'>
					<p className='text-[#00df9a] font-bold '>MadyOLife Dashboard</p>
					<h1 clalssName='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Learning The Knowladge For Self Development</h1>
					
					<button onClick={Dashboard} className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a]'>Get Started</button>
				</div>

			</div>
			
		</div>
	)
}

export default Analytics
