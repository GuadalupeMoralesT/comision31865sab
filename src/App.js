import logo from './logo.svg';
import './App.css';
import NavBar from './components/NarBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting= 'Bienvenidos'/>



      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{color: 'purple'}}>Bienvenidos</h1>
        <h1 style={{color: 'purple'}}>Libreria del Saber</h1>
        <p style={{backgoundColor: 'pink'}}>
        Comision 31865
        </p> 
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button></button> 
      </header>
    </div>
  );
}

export default App;
