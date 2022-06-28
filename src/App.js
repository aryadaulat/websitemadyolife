import React from 'react'
import HomePage from './Pages/Homepage'
import Login from './Pages/Login'
import Auth from './Pages/Auth'
import EditProfile from './Pages/Editprofile'
import { Amplify,Analytics  } from 'aws-amplify';
import awsExports from './aws-exports';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
Amplify.configure(awsExports);
Analytics.record({ name: 'albumVisit' });
function App() {
  return (
      <Router>       
        <Routes>
            <Route path="/" element={<HomePage />} />
						<Route path="/Login" element={<Login/>} />     
						<Route path="/Auth" element={<Auth/>} />    
						<Route path="/EditProfile" element={<EditProfile/>} />      
        </Routes>     
      </Router>

  );
}

export default App;
