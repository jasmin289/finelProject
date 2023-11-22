import logo from './logo.svg';
import './App.css';



function App() {

const changeName =()=>{
  const name = ["jasmin","dave","miska"]
  const int = Math.floor(Math.random()*3);
  return name[int]
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          this is a new line
          hello {changeName()}!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
