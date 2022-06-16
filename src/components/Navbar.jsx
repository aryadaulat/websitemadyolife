import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, animateScroll as scroll } from 'react-scroll'
import { useAuthenticator } from "@aws-amplify/ui-react";
import { Auth } from 'aws-amplify';
import { Link as Pindah} from "react-router-dom";

const Navbar = () => {
  const [navi, setNavi] = useState(false);

  // const [cek, setCek] = useState(false);
  const handleNav = () => {
    setNavi(!navi);
  };
  const login = () => {
    // setCek(!cek);
    alert("Login");
  };
  return (
    <div name='home' className="flex w-full justify-between items-center h-[12vh]  mx-auto mt-14 px-4 fixed text-white z-10 bg-zinc-800 drop-shadow-lg">
      <h1 className="text-3xl font-bold mx-4 mt-7 text-[#00df9a]">MadyOLife.</h1>
      <ul className="hidden md:flex mt-7">
        <li><Link to='Company' smooth={true} offset={50} duration={500}>Home</Link></li>
        <li><Link to='analytics' smooth={true} offset={50} duration={500}>Analytics</Link></li>
				<li><Link to='price' smooth={true} offset={50} duration={500}>Price</Link></li>
        <li><Link to='about' smooth={true} offset={50} duration={500}>About</Link></li>
      </ul>
      <div className='hidden md:flex mt-7'>
        <button className='border-none bg-transparent text-white pr-4'> <Pindah to="/Login">Sign In</Pindah></button>
				<button className='border-none bg-transparent text-white pr-4'>Sign Up</button>
      </div>
      <div onClick={handleNav} className="block md:hidden mt-7">
        {navi ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          navi
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900  ease-in-out duration-500"
            : "fixed left-[-100%] "
        }
      >
        <div className='bg-[#000300]'>
				<h1 className="w-full text-3xl font-bold text-[#00df9a]">MadyOLife.</h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600"><Link to='Company' smooth={true} offset={50} duration={500}>Home</Link></li>
          <li className="p-4 border-b border-gray-600"><Link to='analytics' smooth={true} offset={50} duration={500}>Analytics</Link></li>
          <li className="p-4 border-b border-gray-600"><Link to='price' smooth={true} offset={50} duration={500}>Price</Link></li>
					<li className="p-4 border-b border-gray-600"><Link to='about' smooth={true} offset={50} duration={500}>About</Link></li>
          <div className='flex flex-col my-4'>
       		 <button className='bg-transparent px-8 py-3 mb-4'>Sign In</button>
						<button className='px-8 py-3 mb-4'>Sign Up</button>
      		</div>
        </ul>				
				</div>
      </div>
    </div>
  );
};

export default Navbar;
