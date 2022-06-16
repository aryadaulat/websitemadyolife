import React from 'react'
import HomePage from './Pages/Homepage'
import Login from './Pages/Login'
import Auth from './Pages/Auth'
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
Amplify.configure(awsExports);
function App() {
  return (
      <Router>       
        <Routes>
            <Route path="/" element={<HomePage />} />
						<Route path="/Login" element={<Login/>} />     
						<Route path="/Auth" element={<Auth/>} />        
        </Routes>     
      </Router>

  );
}

export default App;
