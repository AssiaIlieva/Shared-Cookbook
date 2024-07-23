import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Header from './components/header/Header';
import Home from './components/home/Home';
import Register from './components/register/Register';
import Login from './components/login/Login';

function App() {
  const [auth, setAuth] = useState({});

  const loginSubmitHandler = (values) => {
    console.log(values);
  };
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login loginSubmitHandler={loginSubmitHandler} />} />
      </Routes>
    </>
  );
}

export default App;
