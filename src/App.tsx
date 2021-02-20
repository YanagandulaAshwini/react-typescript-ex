import React from 'react';
import logo from './logo.svg';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
    <Header title="hello" count={10}/>
    <Footer title="welcome" caption="Legato"/>
  </div>
  );
}

export default App;
