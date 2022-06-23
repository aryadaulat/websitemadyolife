import React, { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";
import NavbarLogin from '../components/NavbarLogin'

function EditProfile() {
  const [emailuser, setEmailuser] = useState();
	const [nama, setNama] = useState();
	const [username, setUsername] = useState();
	const [tujuanpribadi, setTujuanpribadi] = useState();
	const [pekerjaan, setPekerjaan] = useState();
	const [namainstansi, setNamainstansi] = useState();
	const [nohandphone, setNohandphone] = useState();
	const [domisili, setDomisili] = useState();
	const [kewarganegaraan, setKewarganegaran] = useState();
	const navigate = useNavigate()
  useEffect(() => {
		const checkuser = async () => {			
		try {			
			let user = await Auth.currentAuthenticatedUser();
			if (user == null) {
				navigate('/Login')
			} else {
				setEmailuser(user.attributes.email);
				setNama(user.attributes.name);
				setUsername(user.attributes.nickname);
				setTujuanpribadi(user.attributes.preferred_username);
				setPekerjaan(user.attributes.profile);
				setNamainstansi(user.attributes.website);
				setNohandphone(user.attributes.phone_number);
				setDomisili(user.attributes.address);
				setKewarganegaran(user.attributes.zoneinfo);
			}
		}catch (e) {
			alert(e);
		}
		};
		checkuser()

		 // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
	const updateUser= async ()=>{
		try{
			const updateuser = await Auth.currentAuthenticatedUser();
			await Auth.updateUserAttributes(updateuser, {
				'name': nama,
				'nickname' :username,
				'preferred_username' :tujuanpribadi,
				'profile':pekerjaan,
				'website':namainstansi,
				'phone_number':nohandphone,
				'address':domisili,
				'zoneinfo' :kewarganegaraan
			});
			console.log('berhasil')
		}catch(e){
			console.log(e);
		}
	}
	const handleChangenama = event => {
    setNama(event.target.value);
  };

	const handleChangeusername = event => {
    setUsername(event.target.value);
  };
	const handleChangetujuanpribadi = event => {
    setTujuanpribadi(event.target.value);
  };
	const handleChangepekerjaan = event => {
    setPekerjaan(event.target.value);
  };
	const handleChangenamainstansi = event => {
    setNamainstansi(event.target.value);
  };
	const handleChangenohandphone = event => {
    setNohandphone(event.target.value);
  };
	const handleChangedomisili = event => {
    setDomisili(event.target.value);
  };
	const handleChangekewarganegaraan = event => {
    setKewarganegaran(event.target.value);
  };

  return (
    <>
			<NavbarLogin/>
			<div className='flex w-full h-screen border-2 bg-white'>
				{/* <div className='flex w-2/4 items-center justify-between '>
					Bagian Kiri
				</div> */}
				<div className='flex flex-col w-full justify-center p-14 rounded-md border-2 my-20'>
				<div className='flex-row  items-center bg-white grid gap-4 grid-cols-2'>
					<text className='text-black'>Nama </text>
					<input
					onChange={handleChangenama}
					value={nama}
					className="p-3 text-black border-slate-600 bg-slate-50 border-2 "
					type="nama"
					placeholder="Enter nama"
					/>
				</div>
				<div className='flex-row items-center bg-white grid gap-4 grid-cols-2'>
					<text className='text-black'>Email </text>
					<text className='p-3'>{emailuser}</text>
				</div>
				<div className='grid gap-4 grid-cols-2 flex-row items-center bg-white '>
					<text className='text-black'>Username </text>
					<input
					onChange={handleChangeusername}
					value={username}
					className="p-3 text-black border-slate-600 bg-slate-50 border-2"
					type="username"
					placeholder="Enter username"
					/>
				</div>
				<div className='grid gap-4 grid-cols-2 flex-row items-center bg-white '>
					<text className='text-black'>Tujuan Pribadi </text>
					<input
					onChange={handleChangetujuanpribadi}
					value={tujuanpribadi}
					className="p-3 text-black border-slate-600 bg-slate-50 border-2"
					type="TujuanPribadi"
					placeholder="Enter Tujuan Pribadi"
					/>
				</div>
				<div className='grid gap-4 grid-cols-2 flex-row items-center bg-white '>
					<text className='text-black'>Pekerjaan Sekarang </text>
					<input
					onChange={handleChangepekerjaan}
					value={pekerjaan}
					className="p-3 text-black border-slate-600 bg-slate-50 border-2"
					type="Pekerjaan"
					placeholder="Enter Pekerjaan Sekarang"
					/>
				</div>
				<div className='grid gap-4 grid-cols-2 flex-row  items-center bg-white '>
					<text className='text-black'>Nama Instansi</text>
					<input
					onChange={handleChangenamainstansi}
					value={namainstansi}
					className="p-3 text-black border-slate-600 bg-slate-50 border-2"
					type="namainstansi"
					placeholder="Enter Nama Instansi"
					/>
				</div>
				<div className='grid gap-4 grid-cols-2 flex-row items-center bg-white '>
					<text className='text-black'>No Handphone </text>
					<input
					onChange={handleChangenohandphone}
					value={nohandphone}
					className="p-3 text-black border-slate-600 bg-slate-50 border-2"
					type="nohandphone"
					placeholder="Enter No Handphone"
					/>
				</div>
				<div className='grid gap-4 grid-cols-2 flex-row items-center bg-white '>
					<text className='text-black'>Domisili </text>
					<input
					onChange={handleChangedomisili}
					value={domisili}
					className="p-3 text-black border-slate-600 bg-slate-50 border-2"
					type="domisili"
					placeholder="Enter Domisili"
					/>
				</div>
				<div className='grid gap-4 grid-cols-2 flex-row items-center bg-white '>
					<text className='text-black'>Kewarganegaraan </text>
					<input
					onChange={handleChangekewarganegaraan}
					value={kewarganegaraan}
					className="p-3 text-black border-slate-600 bg-slate-50 border-2"
					type="kewarganegaraan"
					placeholder="Enter Kewarganegaraan"
					/>
				</div>
				<button onClick={updateUser}
               className="bg-[#00df9a] rounded-md font-medium ml-4 my-6 px-6 py-3 text-black">Simpan</button>
				</div>
			</div>
    </>
  );
}

export default EditProfile;
