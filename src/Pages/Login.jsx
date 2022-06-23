import React, { useState } from 'react'
import { Amplify } from 'aws-amplify';
import { Authenticator,View,Image,useTheme,Text,Heading,Button,useAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../aws-exports';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from 'react-scroll'
import { Link as Pindah} from "react-router-dom";
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import NewsLetter from '../components/NewsLetter'
import Analytics from '../components/Analytics'
import Logo from '../assets/LogoMadyOLife.png'
Amplify.configure(awsExports);

const components = {
  Header() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Image
          alt="Amplify logo"
          src={Logo}
					backgroundColor='white'
					objectFit="cover"
        />
      </View>
    );
  },

  Footer() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Text color={tokens.colors.neutral[80]}>
          &copy; All Rights Reserved
        </Text>
      </View>
    );
  },

  SignIn: {
    Header() {
      const { tokens } = useTheme();

      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Sign in to your account
        </Heading>
      );
    },
    Footer() {
      const { toResetPassword } = useAuthenticator();

      return (
        <View textAlign="center">
          <Button
            fontWeight="normal"
            onClick={toResetPassword}
            size="small"
            variation="link"
          >
            Reset Password
          </Button>
        </View>
      );
    },
  },

  SignUp: {
    Header() {
      const { tokens } = useTheme();

      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Create a new account
        </Heading>
      );
    },
    Footer() {
      const { toSignIn } = useAuthenticator();

      return (
        <View textAlign="center">
          <Button
            fontWeight="normal"
            onClick={toSignIn}
            size="small"
            variation="link"
          >
            Back to Sign In
          </Button>
        </View>
      );
    },
  },
  ConfirmSignUp: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  SetupTOTP: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  ConfirmSignIn: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  ResetPassword: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  ConfirmResetPassword: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
};

const formFields = {
  signIn: {
    username: {
      labelHidden: false,
      placeholder: 'Enter your email',
    },
  },
  signUp: {
    password: {
      labelHidden: false,
      label: 'Password:',
      placeholder: 'Enter your Password:',
      isRequired: false,
      order: 2,
    },
    confirm_password: {
      labelHidden: false,
      label: 'Confirm Password:',
      order: 1,
    },
  },
  forceNewPassword: {
    password: {
      labelHidden: false,
      placeholder: 'Enter your Password:',
    },
  },
  resetPassword: {
    username: {
      labelHidden: false,
      placeholder: 'Enter your email:',
    },
  },
  confirmResetPassword: {
    confirmation_code: {
      labelHidden: false,
      placeholder: 'Enter your Confirmation Code:',
      label: 'New Label',
      isRequired: false,
    },
    confirm_password: {
      labelHidden: false,
      placeholder: 'Enter your Password Please:',
    },
  },
  setupTOTP: {
    QR: {
      totpIssuer: 'test issuer',
      totpUsername: 'amplify_qr_test_user',
    },
    confirmation_code: {
      labelHidden: false,
      label: 'New Label',
      placeholder: 'Enter your Confirmation Code:',
      isRequired: false,
    },
  },
  confirmSignIn: {
    confirmation_code: {
      labelHidden: false,
      label: 'New Label',
      placeholder: 'Enter your Confirmation Code:',
      isRequired: false,
    },
  },
};
export default function Login() {
	const [navi, setNavi] = useState(false);

	const handleNav = () => {
    setNavi(!navi);
  };
		return (
			<Authenticator formFields={formFields} components={components}>
      {({ signOut,user }) => 
			// <div>
			// <h1>Hello {user.username}</h1>
			// <button onClick={signOut}>Sign out</button>	
			// </div>
			<>
			<div name='home' className="flex w-full justify-between items-center h-[12vh]  mx-auto mt-14 px-4 fixed text-white z-10 bg-zinc-800 drop-shadow-lg">
      <h1 className="text-3xl font-bold mx-4 mt-7 text-[#00df9a]">MadyOLife.</h1>
      <ul className="hidden md:flex mt-7">
        <li><Link to='Company' smooth={true} offset={50} duration={500}>Home</Link></li>
        <li><Link to='analytics' smooth={true} offset={50} duration={500}>Analytics</Link></li>
				<li><Link to='price' smooth={true} offset={50} duration={500}>Price</Link></li>
        <li><Link to='about' smooth={true} offset={50} duration={500}>About</Link></li>
      </ul>
      <div className='hidden md:flex mt-7'>
			<h1 className='mr-3'>Welcome To MadyOLife </h1>
        {/* <button className='border-none bg-transparent text-white pr-4'> <Pindah to="/Login">Sign In</Pindah></button> */}
				<button className='border-none bg-transparent text-white pr-4'><Pindah to="/EditProfile"> Profile</Pindah></button>
				<button className='border-none bg-transparent text-white pr-4' onClick={signOut}><Pindah to="/"> Logout</Pindah></button>
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
		<div>
		<Hero/>
		<Analytics/>
		<NewsLetter/>
		<Cards/>
		<Footer/>
		</div>
		</>
			}
    </Authenticator>
		)
	}

