import React from 'react';
import Navbar from './components/header/Navbar';
import MainRoutes from './components/routes/MainRoutes';
import Footer from './components/header/Footer';

const App = () => {
  return (
    <div>
      <Navbar/>
      <MainRoutes/>
      <Footer />
    </div>
  );
}

export default App;
