import React from 'react';
import { BrowserRouter as Router , Route , Switch, Link} from 'react-router-dom';
 import login from './pages/login';
 import register from './pages/register';
import './App.css';
import emailVerification from './pages/emailVerification';
import resetpassword from './pages/resetpassword';

function App() {
  return (
    <div className="App">
     <Router>
      
       <div>
          <Route path='/login' component={login}/>
          <Route path='/register' component={register}/>  
          <Route path='/emailVerification' component={emailVerification}/>
          <Route path='/resetpassword/:token' component={resetpassword}/>

       </div>
     </Router>
    </div>
  );
}

export default App;
