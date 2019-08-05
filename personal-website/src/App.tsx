import React from 'react';
import './App.scss';
import Projects from './Projects';

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
    <div className="Page">
      <header className="Header">
        <h1>Header items</h1>
      </header>
      <div className="page-container y-scroll y-proximity">
        <div className="sidenav">
          <ul>
            <li value={1} onClick={handleClick}></li>
            <li value={2} onClick={handleClick}></li>
            <li value={3} onClick={handleClick}></li>
            <li value={4} onClick={handleClick}></li>
          </ul>
        </div>
        <div className="tile-wrapper">
          <div className="tile" id="Title">Title Page</div>
          <div className="tile" id="About">About Me</div>
          <div className="tile" id="Portfolio">Portfolio<Projects/></div>
          <div className="tile" id="Social">Social Links</div>
        </div>
      </div>
    </div>
  );
}

export default App;
