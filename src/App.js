import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Work from './components/work/Work';


const App = () => {
  return (
    <>
    <Header />

    <main className='main'>
      <Home />
      <About />
      <Work />
    </main>
    </>
  )
}

export default App;
