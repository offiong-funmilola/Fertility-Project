import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Community from './Components/Community';
import Chat from './Components/Chat';
import Contact from './Components/Contact';
import Register from './Components/Register';
import SignIn from './Components/SignIn';
import Forgot from './Components/Forgot';
import Confirm from './Components/Confirm';
import Reset from './Components/Reset';
import Article from './Components/Article';
import Account from './Components/Account';
import Registration from './Components/Registration';
import {RegProvider} from './Components/Context/RegContext';
import {AlertProvider} from './Components/Context/AlertContext';

function App() {
  return (
    <RegProvider>
      <AlertProvider>
        <Router>
          <>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/community' element={<Community/>} />
              <Route path='/chat' element={<Chat/>}/>
              <Route path='/article' element={<Article/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='login' element={<SignIn/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/forgot' element={<Forgot/>}/>
              <Route path='/confirm' element={<Confirm/>}/>
              <Route path='/reset' element={<Reset/>}/>
              <Route path='/account' element={<Account/>}/>
              <Route path='/registration' element={<Registration/>}/>
            </Routes>
          </> 
        </Router>
      </AlertProvider>
    </RegProvider> 
  );
}

export default App;



