import React, { useState } from "react";
import { DataStore } from '@aws-amplify/datastore';
import { NewsLetter as postemail } from '../models';

const NewsLetter = () => {
  const [ email, setEmail ] = useState("");

  const submit = async ()=>{
		console.log('phase1')
		console.log(email)
		await DataStore.save(
			new postemail({
			"email": email
		})
	);
	console.log('endphase')
	}
  
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want All About Information About MadyOLife{" "}
          </h1>
          <p>Sign Up To Our Newsletter And Stay Up To Date</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              onChange={ (event) => setEmail(event.target.value) }
              value={email}
              className="p-3 flex w-full rounded-md text-black"
              type="email"
              placeholder="Enter Email"
            />
            <button
						onClick={submit}
						className="bg-[#00df9a] w-[200px] rounded-md font-medium ml-4 my-6 px-6 py-3 text-black">
              Notify Me
            </button>
          </div>
          <p>
            We Care About the Protection of your data. And{" "}
            <span className="text-[#00df9a]"> Privacy Security.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
