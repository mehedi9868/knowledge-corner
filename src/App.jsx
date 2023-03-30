import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import Header from './components/Header/Header';
import '../src/App.css';
import Home from './components/Home/Home';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Home></Home>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default App;