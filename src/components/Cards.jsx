import React from "react";
import Single from '../assets/single.png'
// import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Cards = () => {
	const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <div name='price' className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8">
				<div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
					<img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt=""/>
					<h2 className='text-2xl font-bold text-center py-8'>One Peserta</h2>
					<p className='text-center text-4xl font-bold'>Rp10.000.-</p>
					<div className='text-center font-medium'>
						<p className="py-2 border-b mx-8 mt-8">1 Access/Activity </p>
						<p className="py-2 border-b mx-8">Certificate</p>
						<p className="py-2 border-b mx-8">Build Product Portofolio</p>
					</div>
					<button onClick={() => openInNewTab('https://www.instagram.com/madyolife/')} className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black'>Register</button>
				</div>
				{/* <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
					<img className='w-20 mx-auto mt-[-3rem] bg-transparant' src={Double} alt=""/>
					<h2 className='text-2xl font-bold text-center py-8'>Organisasi</h2>
					<p className='text-center text-4xl font-bold'>$149</p>
					<div className='text-center font-medium'>
						<p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
						<p className="py-2 border-b mx-8">1 Granted User</p>
						<p className="py-2 border-b mx-8">Send Up to 2 GB</p>
					</div>
					<button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-[#00df9a]'>Start Trial</button>
				</div> */}
				<div className="w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300">
					<img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt=""/>
					<h2 className='text-2xl font-bold text-center py-8'>Organization</h2>
					<p className='text-center text-4xl font-bold'>Contact Sales</p>
					<div className='text-center font-medium'>
						<p className="py-2 border-b mx-8 mt-8">All Access Member Organization</p>
						<p className="py-2 border-b mx-8">1 Mental Health Activity</p>
						<p className="py-2 border-b mx-8">6 Bulan Membership</p>
					</div>
					<button onClick={() => openInNewTab('https://www.instagram.com/madyolife/')} className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black'>Register</button>
				</div>
			</div>
    </div>
  );
};

export default Cards;
