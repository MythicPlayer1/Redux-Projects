
import './App.css';
import Header from './Components/Header';
import Form from './Components/Form';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
          Learn React To become frontend Developer
          
        </a>
      </header> */}
      <Header></Header>
      <Form></Form>
    </div>
  );
}

export default App;
