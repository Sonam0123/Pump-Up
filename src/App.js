import React, {useState} from 'react';
import './App.css';
import Login from './Login/Login';
import { Route, Routes, useLocation } from 'react-router-dom';
import Main from './Main/Main';
import SignUp from './Signup/Signup';
import Navigation from './Navigation/Navbar';
import axios from 'axios';
import Bulking from './goals/Bulking';
import LosingFat from './goals/LosingFat';
import Leaner from './goals/Leaner';
import Endurance from './goals/Endurance';

function App() {
  const location = useLocation();
  const [userData, setUserData] = useState([]);
  const [user, setUser] = useState(
    {
      name: '',
      username: '',
      password: ''
    }
  );

  const [loginForm, setLoginForm] = useState({
    username: '',
    password: '',
  });
  const handleLogin = (e) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
    console.log(loginForm);
  };
  const validateLogin = () => {
    const userSignIn = userData.find(
      (user) => user.username === loginForm.username
    );
    if (userSignIn.password === loginForm.password) {
      console.log('welcome');
      const index = userData.indexOf(userSignIn);
      console.log(userData[index]._id);
      axios
        .put(
          `https://localhost3000/users/${userData[index]._id}`,
          {
            logIn: true,
          }
        )
        .then((res) => {
          console.log(res.data);
          setUser(res.data);
        });
    } else {
      alert('The password you’ve entered is incorrect.');
    }
  };
  const [signUpForm, setSignUpForm] = useState({
    name: '',
    username: '',
    password: ''
  });

  const handleSignUp = (e) => {
    setSignUpForm({
      ...signUpForm,
      [e.target.name]: e.target.value,
    });
  };

  const createUser = () => {
    axios
      .post(
        'https://petstagram-backend.herokuapp.com/petstagram/users/',
        signUpForm
      )
      .then((res) => {
        let oldArray = [...userData];
        oldArray.push(res.data);
        setUserData(oldArray);
      });
  };
  return (
    <div className="App">
      <nav className='fullNav'>
          {location.pathname === '/' ? null : <Navigation /> &&
            location.pathname === '/sign-up' ? null : (
           <Navigation />)}
      </nav>

      <Routes>
        <Route path="/" element={<Login handleLogin={handleLogin} validateLogin={validateLogin} />} />
        <Route path="/main" element={<Main />} />
        <Route path="/sign-up" element={<SignUp handleSignUp={handleSignUp} createUser={createUser}/>} />
        <Route path="/losing-fat" element={<LosingFat />}/>
        <Route path="/leaner" element={<Leaner />} />
        <Route path="/endurance" element={<Endurance />} />
        <Route path="/bulking" element={<Bulking />} />
      </Routes>
    </div>
  );
}

export default App;
