import React from "react";
import Typed from "react-typed";

const Hero = () => {
	const Getstarted =()=>{
		alert('Coming Soon')
	}
  return (
    <div name='Company' className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">
          Change Yourself, Change Your Life
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with MadyOLife
        </h1>
        <div className="flex justify-center items-center ">
          <div>
					<p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Learning Fast, Flexible Learning for
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-[#00df9a]"
            strings={["Yourself", "Organisasi"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
					</div>
        </div>
				<p className="md:text-2xl text-xl font-bold text-gray-500">Monitor your Knowledge</p>
				<button 
				onClick={Getstarted}
				className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
