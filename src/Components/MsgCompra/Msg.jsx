import React, {useContext} from 'react'
import { CartContext } from '../../Context/Cart/CartContext';


const Msg = ({newArr, orderId}) => {


    const context = useContext( CartContext )

    const {checkBool} = context
    
   let newMapped = newArr.map(y => y.items);

  let Newer = newMapped.map(y => ( y.products))

  

  let result = {
    firstName: "",
    lastName: "", 
    domicilio: "",
    email: "",
    telefono: "",
    buyerId: orderId
    
    }
    

    for (let i = 0; i < newArr.length; i++) {
        result.firstName = newArr[i].firstName
        result.lastName = newArr[i].lastName
        result.domicilio = newArr[i].firstName
        result.email = newArr[i].email
        result.telefono = newArr[i].telefono
        
        
    }
    
    
    return (
        <div>
            {Newer.map((t,y)  => (
                <div key={y} >
                    <h4>Gracias Señor/a {result.lastName} por su compra, esta es la orden de su compra:</h4>
                    <h5>N° de Orden: {result.buyerId}</h5>
                        <div>
                            <p className="mx-3 my-3">Su orden ha sido recibida, se le envio su comprobante con el detalle de su compra
                                a su mail, y en 48hs hábiles estara recibiendo su pedido. ¡Muchas gracias por su compra!
                            </p>
                            <h3>Sus items son:</h3>
                            {t[0] ? <p key={y+3}>Producto: {t[0]}, Cantidad: {newArr.map(y=> y.items.cantidad[0])}</p>: null}
                            {t[1] ? <p key={y+5}>Producto: {t[1]}, Cantidad: {newArr.map(y=> y.items.cantidad[1])}</p>: null}
                            {t[2] ? <p key={y+7}>Producto: {t[2]}, Cantidad: {newArr.map(y=> y.items.cantidad[2])}</p>: null}
                            {t[3] ? <p key={y+11}>Producto: {t[3]}, Cantidad: {newArr.map(y=> y.items.cantidad[3])}</p>: null}
                            {t[4] ? <p key={y+12}>Producto: {t[4]}, Cantidad: {newArr.map(y=> y.items.cantidad[4])}</p>: null}
                            {t[5] ? <p key={y+41}>Producto: {t[5]}, Cantidad: {newArr.map(y=> y.items.cantidad[5])}</p>: null}
                            {t[6] ? <p key={y+23}>Producto: {t[6]}, Cantidad: {newArr.map(y=> y.items.cantidad[6])}</p>: null}
                            {t[8] ? <p key={y+13}>Producto: {t[7]}, Cantidad: {newArr.map(y=> y.items.cantidad[7])}</p>: null}
                            {t[9] ? <p key={y+55}>Producto: {t[8]}, Cantidad: {newArr.map(y=> y.items.cantidad[8])}</p>: null}
                            {t[10] ? <p>Producto: {t[9]}, Cantidad: {newArr.map(y=> y.items.cantidad[9])}</p>: null}
                        </div>
                    {checkBool ? <p className="mx-3 my-3">¡Se le creo su usuario en la plataforma!</p> : null}        
                </div>
                ))}
        </div>
    )
}

export default Msg
