import './App.scss';
import Navbar from './Components/Navbar/Navbar.jsx';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { CartProvider } from "./Context/Cart/CartContext";
import Cart from './Components/Cart/Cart';


function App() {
  return (
    
    <div className="App ">
  <CartProvider>    
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
          <Route path="/Cart">
            <Cart/>
          </Route>
        </Switch>
      
    </Router>
  </CartProvider>             
  </div>
   
  );
}

export default App;
