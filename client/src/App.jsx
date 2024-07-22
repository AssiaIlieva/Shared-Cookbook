import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';

import Home from './components/home/Home';
import Register from './components/register/Register';
import Login from './components/login/Login';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
