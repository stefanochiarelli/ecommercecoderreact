import React from 'react'

const Msg = ({newArr, orderId}) => {

    
    
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
            {Newer.map(t  => (
                <div >
                    <h4>Gracias Señor/a {result.lastName} por su compra, esta es la orden de su compra:</h4>
                    <h5>N° de Orden: {result.buyerId}</h5>
                    {t[0] ? <p>Item: {t[0]}</p>: null}
                    {t[1] ? <p>Item: {t[1]}</p>: null}
                    {t[2] ? <p>Item: {t[2]}</p>: null}
                    {t[3] ? <p>Item: {t[3]}</p>: null}
                    {t[4] ? <p>Item: {t[4]}</p>: null}
                    {t[5] ? <p>Item: {t[5]}</p>: null}
                    {t[6] ? <p>Item: {t[6]}</p>: null}
                    {t[8] ? <p>Item: {t[7]}</p>: null}
                    {t[9] ? <p>Item: {t[7]}</p>: null}
                    {t[10] ? <p>Item: {t[7]}</p>: null}
                </div>
                ))}
        </div>
    )
}

export default Msg
