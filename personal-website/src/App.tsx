import React from 'react';
import './App.scss';
import Projects from './Projects';

const App: React.FC = () => {
  return (
    <div className="Page">
      <header className="Header">
        <h1>Header items</h1>
      </header>
      <div className="page-body">
        <div className="container y-scroll y-mandatory">
            <div className="tile-wrapper">
              <div className="tile">Title Page</div>
              <div className="tile">About Me</div>
              <div className="tile">Portfolio</div>
              <div className="tile">Social Links</div>
            </div>
          </div>
        </div>
    </div> 
  );
}

export default App;
