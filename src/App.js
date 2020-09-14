import React from 'react';
import { BrowserRouter as Router , Route , Switch, Link} from 'react-router-dom';
 import Login from './pages/LoginPage/login';
 import Register from './pages/RegisterPage/register';
import './App.css';
import EmailVerification from './pages/ResetPasswordPage/emailVerification';
import ResetPassword from './pages/ResetPasswordPage/resetPassword';
//import ResponsiveDrawer from './dashBoard/drawerComponent';
import NavBar from './DashBoard/navBar';
//import NavBar from './DashBoard/navBar';

function App() {
  return (
    <div className="App">
     <Router>
      
       <div>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>  
          <Route path='/emailVerification' component={EmailVerification}/>
          <Route path='/resetpassword/:token' component={ResetPassword}/>
          <Route path='/navBar' component={NavBar} />
          {/* <Route path='/dashBoard/drawerComponent' component={ResponsiveDrawer}/> */}


       </div>
     </Router>
    </div>
  );
}

export default App;
