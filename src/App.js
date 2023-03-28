import React, { Fragment } from 'react';
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
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Resources from './Components/Resources';
import Donate from './Components/Donate';
import Payment from './Components/Payment';
import {AuthProvider} from './Components/Context/AuthContext';
import {useState, useEffect} from 'react';
import {auth} from './config/firebase';
import {onAuthStateChanged} from 'firebase/auth';
import VerifyEmail from './Components/VerifyEmail';
import PrivateWrapper from './Components/PrivateWrapper';

function App() {
  const [currentUser, setCurrentUser] =useState(null);
  const [timeActive, setTimeActive] =useState(false);

  useEffect(()=> {
    onAuthStateChanged(auth, (user) => {setCurrentUser(user)})
  }, [setCurrentUser])

  return (
    <RegProvider>
      <AuthProvider value={{currentUser, timeActive, setTimeActive}}>
        <Router>
          <>
            <ToastContainer theme='colored'></ToastContainer>
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
              <Route path='/registration' element={<Registration/>}/>
              <Route path='/resources' element={<Resources/>}/>
              <Route path='/donate' element={<Donate/>}/>
              <Route path='/verify' element={<VerifyEmail/>}/>
              <Route path='/payment' element={<Payment/>}/>
              {/* Private Routes */}
              <Route element={<PrivateWrapper />}>
                <Route path='/account' element={<Account />} />
              </Route>
            </Routes>
          </> 
        </Router>
      </AuthProvider>  
    </RegProvider> 
  );
}

export default App;



