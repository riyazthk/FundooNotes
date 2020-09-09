import React from 'react';
import { BrowserRouter as Router , Route , Switch, Link} from 'react-router-dom';
 import login from './pages/Login/login';
 import register from './pages/Register/register';
import './App.css';
import emailVerification from './pages/ResetPassword/emailVerification';
import resetpassword from './pages/ResetPassword/resetpassword';
import navBar from './DashBoard/navBar'

function App() {
  return (
    <div className="App">
     <Router>
      
       <div>
          <Route path='/login' component={login}/>
          <Route path='/register' component={register}/>  
          <Route path='/emailVerification' component={emailVerification}/>
          <Route path='/resetpassword/:token' component={resetpassword}/>
          <Route path='/DashBoard/navBar' component={navBar}/>

       </div>
     </Router>
    </div>
  );
}

export default App;
