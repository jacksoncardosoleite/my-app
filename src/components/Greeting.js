import React, {useState, useEffect} from 'react';
import "./styles.css";
import clickSound from './som de clique.mp3';
import clickSound2 from './ofelia.mp3';

function Hello(props) {
    return <h4>Hello, {props.name}!</h4>
  }
  
  function App2() {
    return <div>
      <Hello name="Jean" />
      <Hello name="Luma" />
      <Hello name="Jackson" />
    </div>
  }
const el = <App2 />
  
class Hello2 extends React.Component {
    render() {
      return <p>Hello, {this.props.name}!</p>;
    }
  }
  
  const el2 = <Hello2 name="amigos" />;


class Hello3 extends React.Component {
    state = {
      name: "Keiji Haino",
      ocupation: "Noise Musician"
    }
    
    render() {
      return (
      <div>
        <p>Hello {this.state.name}.</p>
        <p>You are a very good {this.state.ocupation}</p>
      </div>
      );
    }
  }

const el3 = <Hello3 />


class MyComponent extends React.Component {
    state = {
      count: 0
    };

    incrementCount() {
      // Updating the count state using SetState
      this.setState({ count: this.state.count +1});
    }

    resetCount() {
      this.setState({ count: 0});
    }

    render() {
      return (
        <div>
          <h1>Count: {this.state.count}</h1>
          <button className="Button"
          onClick={() => this.incrementCount()}>Increment</button>
          <button className="Button" 
          onClick={() => this.resetCount()} style={{ marginLeft: '10px' }}>Reset</button>
        </div>
      );
    }
  }

const counter = <MyComponent />


function Counter() {
  const [counter, setCounter] =
  useState(0);

  function increment() {
    const audio = new Audio(clickSound);
    audio.play();
    setCounter(counter-1);

  }

  function reset() {
    setCounter(0);
  }
  

  return <div>
  <h1>- Count: {counter}</h1>
  <button className="Button" onClick={increment}>
    Increment
  </button>
  <button className="Button" onClick={reset} style={{ marginLeft: '10px' }}>
    Reset
  </button>
  </div>

}

const countertest = <Counter />



function Hello4() {
  const [name, setName] = useState("Merzbow");

  return <p className="merzbow">Hello {name}.</p>
}

const el4 =<Hello4 />


function CounterAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.useRef(null);

  function toggleAudio() {
    const audioElement = audioRef.current;
    if (isPlaying) {
      audioElement.pause();

    } else {
      audioElement.play();
    }
    setIsPlaying(!isPlaying);
  }

  return (
    <div>
      <audio ref={audioRef} src={clickSound2}></audio>
      <button className="Button" onClick={toggleAudio}>
        {isPlaying ? 'Stop Audio' : 'Play Audio'}
      </button>
    </div>
  );
}

const audiotest = <CounterAudio />;


function Converter() {
  const [km, setKm] = useState(null);

  function handleChange(e) {
    setKm(e.target.value);
  }
  function convert(km) {
    return (km/1.609).toFixed(2);
  }

  return <div>
    <h3 id="kmtomiles">Km to Miles Converter:</h3>
    <input className="input" type="number" value={km}
    onChange={handleChange} 
    placeholder="Insert your Km value:"/>
    <br />
    <p id="kmresult"> {km} km is {convert(km)} miles
    </p>
  </div>
}

const kmconverter = <Converter />


function AddForm() {
  const [sum, setSum] = useState(0);
  const [num, setNum] = useState(null);

  function handleChange(e) {
    setNum(e.target.value);
  }

  function handleSubmit(e) {
    setSum(sum + Number(num));
    e.preventDefault();
  }

  return <form onSubmit={handleSubmit}>
  <p className="summarizer">Summarizer</p>
  <input type="number" value={num}
  onChange={handleChange} id="inputsum" 
  placeholder="Enter number"/>
  <br />
  <input type="submit" value="Add" className="addbutton"/>
  <p> Sum is {sum} </p>
  </form>;
}

const formel = <AddForm />;


function Mylist(props) {
  const arr = props.data;
  const listItems = arr.map((val, index) =>
    <li key={index} style={{ paddingBottom : "16px"}}>{val}</li>
    );
    return <ul>{listItems}</ul>;
}

const arr = ["Luisa", "Julia", "Sofia"];
const el5 = <Mylist data={arr} />;


// componentDidMount

class Counter2 extends React.Component {
  state = {
    counter: 0
  }
  increment = () => {
    this.setState({counter: this.state.counter+1});
  }
  componentDidMount() {
    this.setState({counter: 42});
  }
  render() {
    return <div>
      <p>{this.state.counter}</p>
      <button className="addbutton" onClick={this.increment}
      >Increment</button>
    </div>
  }
}

const button2 = <Counter2 />


//componentDidUpdate

class Counter3 extends React.Component {
  state = {
    counter: 0
  }
  increment = () => {
    this.setState({counter: this.state.
    counter+1});
  }
  componentDidUpdate() {
    alert("Number of click: " + this.
    state.counter);
  }
  render() {
    return <div>
      <p>{this.state.counter}</p>
      <button className="addbutton" onClick={this.increment}
      >Increment</button>
    </div>
  }
}

const el6 = <Counter3 />;


// The useEffect Hook:
// It combines the componentDidMount, componentDidUpdate,
// and componentWillUnmount methods into one.

function Counter4() {
  const [counter, setCounter] = useState
  (0);

  useEffect(() => {
    alert("Number of clicks: " + counter);
    return () => {
      //cleanup
    };
  }, [counter]);

  function increment() {
    setCounter(counter+1);
  }
  return <div>
    <p>{counter}</p>
    <button onClick={increment}>Increment</button>
  </div>
}

const el7 = <Counter4 />

// Contact Manager

function AddPersonForm(props) {
  const [person, setPerson ] =
  useState('');

  function handleChange(e) {
    setPerson(e.target.value);
  }

  function handleSubmit(e) {
    props.handleSubmit(person);
    setPerson('');
    e.preventDefault();
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
    <p className="contact">Contact Manager</p>
    <input style={{ marginBottom : "0px" }} className="input" type="text"
    placeholder="Add new contact"
    onChange={handleChange}
    value={person} /><br />
    <button style={{ marginBottom : "10px" }} className="addbutton" type="submit">Add</button>
    </form>
  );
}

function PeopleList(props) {
  const arr = props.data;
  const listItems = arr.map((val, index) => ( 
    <li key={index} style={{ paddingBottom : "18px"}}>{val}</li>
  ));
  return <ul>{listItems}</ul>
}


function ContactManager(props) {
  const [contacts, setContacts] =
useState(props.data);

  function addPerson(name) {
    setContacts([...contacts, name]);
  }

  return (
    <div>
      <AddPersonForm
  handleSubmit={addPerson} />
      <PeopleList data={contacts} />
    </div>
  );
}

const contacts =["Miranda Crossgrove", "Jim Carrey",
"Leadbelly"];

const el9 = <ContactManager data={contacts} />


export { el, el2, el3, counter, el4, countertest,
   audiotest, kmconverter, formel, el5, button2, el6,
  el7, el9 };