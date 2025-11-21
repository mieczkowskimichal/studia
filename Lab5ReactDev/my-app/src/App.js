import logo from './logo.svg';
import './App.css';
import Hello from './Hello.js'
import HelloWithProps from './Hello.js'
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
        <div>
  <h2>Ćwiczenie 1</h2>
  <Hello />
</div>
<div> 
<HelloWithProps name="Anna" /> 
<HelloWithProps name="Bartek" /> 
<HelloWithProps name="Celina" /> 
</div>

      </header>
    </div>
  );
}

export default App;
