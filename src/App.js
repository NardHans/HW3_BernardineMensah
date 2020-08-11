import React from 'react';
import './App.css';
import './css/layout.css';
import './css/global.css'
import './css/sample-wallpaper.css'
import './css/components.css'
import Navbar from './navbar'
import Clepe from './css/clepe'
import Imitari from './imitari'
import hulk from './img/hulk-1.jpg'
import venom from './img/venom-1.jpg'
import venom2 from './img/venom-2.jpg'


function App() {
  return (
    <div>
    <Navbar />
    <br/>
    <br/>
      <header className="header">
      <div className='container'>
        <Clepe />

      <div className='sample-imitari'>
        <Imitari pic={venom} />
        <Imitari pic={hulk} />
        <Imitari pic={venom2} />


      </div>


      </div>
        
      </header>
    </div>
  );
}

export default App;

