import logo from './logo.svg';
import './App.css';
import InputTracker from './InputTracker.js';
import { Hello, HelloWithProps } from './Hello';
import Counter from './Counter.js';
import LoginStatus from './LoginStatus.js';
import TodoList from './TodoList.js';
import LoginForm from './LoginForm.js';
function App() {
  const tasks = ["Zadanie 1", "Zadanie 2", "Zadanie 3"];
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

<Counter></Counter>
<InputTracker></InputTracker>
<LoginStatus isLoggedIn={true} />
<LoginStatus isLoggedIn={false} />


<TodoList todos={tasks} />
<LoginForm></LoginForm>
</div>

      </header>
    </div>
  );
}

export default App;
