import './App.css';
import Header from './components/Header/Header';
import Sobre from './components/About/Sobre';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <Header/>
      <Sobre/>
      <Portfolio/>
    </div>
  );
}

export default App;
