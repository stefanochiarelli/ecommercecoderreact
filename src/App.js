import './App.scss';
import Navbar from './Components/Navbar/Navbar.jsx';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    
    <div className="App ">
    <Router> 
        <Navbar />
        <Switch>
          <Route exact path="/" >
            <ItemListContainer />
          </Route>
          <Route exact path="/Catalogo/:id" >
            <ItemListContainer />
          </Route>   
          <Route path="/ItemDetailContainer/:id">
            <ItemDetailContainer/>
          </Route>
        </Switch>
    </Router>           
  </div>
   
  );
}

export default App;
