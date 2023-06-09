import logo from './logo.svg';
import './App.css';
import React from 'react';
import { el, el2,el3, el4, counter,
   countertest, audiotest, kmconverter,
  formel, el5, button2, el6, el7, el9 } from './components/Greeting';
import './components/styles.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{lineHeight:1.2}}>Training Camp</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header>

      <main className="App-main">
        <p className="paragraph">{el}</p>
        <p className="paragraph">{el2}</p>
        <p className="paragraph">{el3}</p>
        <p className="paragraph">{counter}</p>
        <p className="paragraph">{el4}</p>
        <p className="paragraph">{countertest}</p>
        <p className="paragraph">{audiotest}</p>
        <p className="paragraph">{kmconverter}</p>
        <br />
        <p className="paragraph">{formel}</p>
        <p className="paragraph">{el5}</p>
        <p className="paragraph">{button2}</p>
        <p className="paragraph">{el6}</p>
        {/* <p className="paragraph">{el7}</p> */}
        <p className="paragraph">{el9}</p>


        <br /><br />
      </main>

      <footer className="App-footer">
        <p style={{ fontSize: "21px" }}>Developed by Jackson Cardoso Leite</p>
      </footer>
    </div>
  );
}



export default App;
