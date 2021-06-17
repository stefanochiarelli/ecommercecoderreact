import './App.css';
import './Components/Navbar/Navbar.css'
import './Components/CartWidget/CartWidget.css'
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <ItemListContainer greeting={"Hola Ale como estas!"}/>
    </div>
  );
}

export default App;
