import logo from './logo.svg';
import './App.css';

function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}


function AboutMe() {
  return (
    <>
      <img className="avatar" src="smoke-avatar.png" />
      <h1>About Me</h1>
      <p>Hello there. I am Qadeer Rizvi a Python Developer learning ReactJs.<br />How do you do?</p>
    </>
  )
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyButton />
        <AboutMe />
      </header>
    </div>
  );
}

export default App;
