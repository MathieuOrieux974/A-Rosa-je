
import React from 'react';
import './App.css';
import Header from './composant/Header';
import Footer from './composant/Footer';

const App = () => {
  return (
      <div className="app">
          <Header/>

        <main>
            <h1>A-Rosa-je</h1>
        </main>

        <Footer/>
      </div>
  );
};

export default App;