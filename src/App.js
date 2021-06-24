import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className="App ">
      <header className="App-header">
        <Navbar />
      </header>
        <ItemListContainer />
    </div>
  );
}

export default App;
