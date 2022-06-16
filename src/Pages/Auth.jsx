import React from 'react'
import { useAuthenticator } from '@aws-amplify/ui-react';
import Login from './Login'
import Homepage from './Homepage'

const Auth = () => {
	const { authStatus } = useAuthenticator(context => [context.authStatus]);
	return (
		<>
      {authStatus === 'configuring' && 'Loading...'}
      {authStatus !== 'authenticated' ? <Login /> : <Homepage />}
    </>
	)
}

export default Auth
