import React,{ useContext, useState, useEffect } from 'react'
import { Alert } from 'reactstrap';
import ItemCount from "../ItemCount/ItemCount";
import StrapCard from '../StrapCard/Strapcard'
import ButtonGroups from '../ButtonGroup/ButtonGroups'
import { CartContext } from '../../Context/Cart/CartContext';
import { Link } from 'react-router-dom'



const ItemDetail = (props) => {
    
    const { fArray } = props



    //ESTE FOR LOOP CONVIERTE LA DATA DE FIRESTORE EN UN OBJETO, PARA PODER MANUPULARLO EN CARTCONTEXT MAS FACIL.
    const [resState, setResState] = useState({})
    const result = {id: '', producto: '', precio: 0, tipo: '' ,  img: ''}
    for (let i = 0; i < fArray.length; i++) {
      result.id = fArray[i].id
      result.producto = fArray[i].producto
      result.precio = fArray[i].precio1 
      result.img = fArray[i].img
      result.tipo = fArray[i].tipo
    }
    

    useEffect(() => {
      setResState(result)
    // eslint-disable-next-line 
    }, [])

    

    const  value  = useContext(CartContext)

    const { AddItem, count, cartState } = value
    
    const onAdd = () => {
        
        AddItem(resState, count)
        
        
     }

    const checkProd = cartState.map(g => {
        if(g.id === result.id ){
            return g.quantity
        } else return null;
        
        
    })
    
    //funcion que cambia el precio en el state
    const handlePrice = (event) => {

      const {textContent} = event.target

      switch (textContent) {
        case "1kg":
          let precio1;
          for (let i = 0; i < fArray.length; i++) {
            precio1 = fArray[i].precio1 
            
          }

          setResState({...result, precio: precio1})
          console.log(resState)
          
          break;

        case "5kg":
          let precio2;
          for (let i = 0; i < fArray.length; i++) {
            precio2 = fArray[i].precio2 
            
          }

          setResState({...result, precio: precio2})

          console.log(resState)
            break;

        case "12kg":
          let precio3;
          for (let i = 0; i < fArray.length; i++) {
            precio3 = fArray[i].precio3 
            
          }

          setResState({...result, precio: precio3})
          console.log(resState)
            break;

        default:
          break;
      }

    }

    let styles = {}
    switch (result.tipo) {
      case 'Suave':
        styles =  {backgroundColor: '#FFC107', color: 'white' , borderRadius: "1.5rem", padding: ".5rem .7rem"}

        break;

      case 'Medio':
        styles = {backgroundColor: '#08FFC1', color: 'black', borderRadius: "1.5rem", padding: ".5rem .7rem"}

        break;

      case 'Fuerte':
        styles = {backgroundColor: '#C108FF', color: 'white' , borderRadius: "1.5rem", padding: ".5rem .7rem"}

        break;

      default:
        break;
    }
    
    

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
                  <h4 style={{ display: "inline" }}>Precio: ${resState.precio}</h4>
                  <span 
                    className="mb-2 mx-3"
                    style={styles}
                  >
                    {item.tipo}
                  </span>
                </div>
                <ButtonGroups  handlePrice={handlePrice} />

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
