import React from 'react';
import ReactDOM from 'react-dom';
import ScrollSnap from 'scroll-snap';
import './App.scss';
import Projects from './Projects';

const App: React.FC = () => {
  return (
    <div className="AppContainer">
      {/* <section className="Header">
        <h1>Header items</h1>
      </section> */}
      {/* <div className="Body"> */}
        <section className="Tile1">
          <h1>Connor Lacy</h1>
          <p>Some Foofoo quote</p>
        </section>
        <section className="Tile2">
          <h1>Resume Stuff</h1>
          <Projects/>
        </section>
        <section className="Tile3">
          <h1>Projects and details</h1>
        </section>
        <section className="Tile4">
          <h1>Social page</h1>
        </section>
      {/* </div> */}
    </div> 
  );
}

export default App;
