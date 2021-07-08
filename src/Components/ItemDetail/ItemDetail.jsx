import React,{ useContext } from 'react'
import { Alert } from 'reactstrap';
import ItemCount from "../ItemCount/ItemCount";
import StrapCard from '../StrapCard/Strapcard'
import ButtonGroups from '../ButtonGroup/ButtonGroups'
import { CartContext } from '../../Context/Cart/CartContext';
import { Link } from 'react-router-dom'


const ItemDetail = ({fArray}) => {
    
    
    let result = {id: 0, producto: ''};
    for (let i = 0; i < fArray.length; i++) {
      result.id = parseInt(fArray[i].id);
      result.producto = fArray[i].producto;
    }

    
    
    const  value  = useContext(CartContext)

    const { AddItem, count, cartState } = value
    
    const onAdd = () => {
        
        AddItem(result, count)
        
        
     }

    const checkProd = cartState.map(g => {
        if(g.id === result.id ){
            return g.quantity
        } else return null;
        
        
    })
 
    
    

    return (
      <>
        <div>
          <h2 className="title mt-4">Detalle de su Compra</h2>
        </div>
        <div
          className="container d-flex align-items-center"
          style={{ height: "80vh" }}
        >
          {fArray.map((item) => (
            <div className="row " key={item.id}>
              <div className="ml-5 d-flex flex-column align-items-center col-md-12 col-lg-6">
                <StrapCard dataItems={item} />
                {cartState.find(item => item.producto === result.producto) ? <Alert color="primary w-50 h-40 my-5">Agrego {checkProd} {result.producto} al carrito!</Alert>: null}
              </div>
              
              <div className="d-flex flex-column align-items-center col-md-12 col-lg-6 my-3">
                <h3 style={{ fontStyle: "italic" }}>
                  PRODUCTO: {item.producto}
                </h3>
                <div>
                  <h4 style={{ display: "inline" }}>Precio: {item.precio}</h4>
                  <span
                    className="mb-2 mx-3"
                    style={{
                      backgroundColor: "#000000",
                      padding: ".5rem .7rem",
                      color: "white",
                      borderRadius: "1.5rem",
                    }}
                  >
                    {item.tipo}
                  </span>
                </div>
                <ButtonGroups />

                <div className="d-flex flex-column my-4">
                {cartState.find(item => item.producto === result.producto)? null :<ItemCount cantidad={onAdd} producto={item.producto} />}
                  {count > 0 ? (
                    <div>
                      {cartState.find(item => item.producto === result.producto) ?<Link to="/Cart" ><button className="btn btn-warning p-2 my-3">Terminar Compra</button></Link>:null}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
           
        </div>
      </>
    );
}

export default ItemDetail
