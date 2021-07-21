import React,{ useContext } from 'react'
import { Alert } from 'reactstrap';
import ItemCount from "../ItemCount/ItemCount";
import StrapCard from '../StrapCard/Strapcard'
import ButtonGroups from '../ButtonGroup/ButtonGroups'
import { CartContext } from '../../Context/Cart/CartContext';
import { Link } from 'react-router-dom'



const ItemDetail = (props) => {
    
    const { fArray } = props



    //ESTE FOR LOOP CONVIERTE LA DATA DE FIRESTORE EN UN OBJETO, PARA PODER MANUPULARLO EN CARTCONTEXT MAS FACIL.

    let result = {id: '', producto: '', precio1: 0, precio2: 0, precio3: 0, img: ''}
    for (let i = 0; i < fArray.length; i++) {
      result.id = fArray[i].id
      result.producto = fArray[i].producto
      result.precio1 = fArray[i].precio1 
      result.precio2 = fArray[i].precio2 
      result.precio3 = fArray[i].precio3
      result.img = fArray[i].img
      
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
      <section>
        
          
        
        <div
          className="container d-flex align-items-center justify-content-center"

          style={{margin:'5rem auto'}}
          
        >
          {fArray.map((item) => (
            <div className="row " key={item.id}>
              <h2 className="title" style={{marginBottom: '6rem'}}>Detalle de su Compra</h2>
              <div className="ml-5 d-flex flex-column align-items-center col-md-12 col-lg-6">
                <StrapCard dataItems={item} />
                { cartState.find(item => item.producto === result.producto) ? <Alert color="primary w-50 h-40 my-5">Agrego {checkProd} {result.producto} al carrito!</Alert>: null} 
              </div>
              
              <div className="d-flex flex-column align-items-center col-md-12 col-lg-6 my-3 mt-5">
                <h3 style={{ fontStyle: "italic" }}>
                  PRODUCTO: {item.producto}
                </h3>
                <div>
                  <h4 style={{ display: "inline" }}>Precio: ${item.precio1}</h4>
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
                  {cartState.find(item => item.id === result.id) ? null  : <ItemCount cantidad={onAdd}/>} 
                   
                    <div>
                      {cartState.find(item => item.id === result.id) ?<Link to="/Cart" ><button className="btn btn-warning p-2 my-3">Terminar Compra</button></Link> : null}
                    </div>
                   
                </div>
              </div>
            </div>
          ))}
           
        </div>
      </section>
    );
}

export default ItemDetail
