import React from 'react';
import './App.scss';
import Projects from './Projects';
import Email from './assets/Outlook_icon.png';
import LinkedIn from './assets/LinkedIn_icon.png';
import Github from './assets/GitHub_icon.png';

const handleClick = (evt: any) => {
  switch(evt.target.value){
    case 1: window.location.hash = "#Title"
            break;
    case 2: window.location.hash = "#About"
            break;
    case 3: window.location.hash = "#Portfolio"
            break;
    case 4: window.location.hash = "#Social"
            break;
    
  }
}

const App: React.FC = () => {
  return (
    <div className="page-container y-scroll y-mandatory">
      <header className="Header">
        <div className="headerbuttons">
          <img src={Email} alt="Email Link"/>
          <img src={LinkedIn} alt=""/>
          <img src={Github} alt=""/>
        </div>
      </header>
      <div className="sidenav">
        <ul>
          <li value={1} onClick={handleClick}></li>
          <li value={2} onClick={handleClick}></li>
          <li value={3} onClick={handleClick}></li>
          <li value={4} onClick={handleClick}></li>
        </ul> 
      </div>
      <div className="tile-wrapper">
        <div className="tile" id="Title">Connor Lacy</div>
        <div className="tile" id="About">About Me</div>
        <div className="tile" id="Portfolio">Portfolio<Projects/></div>
        <div className="tile" id="Social">Let's Connect</div>
      </div>
    </div>
  );
}

export default App;
