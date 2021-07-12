import React, {createContext, useState} from 'react'

//Context

export const CartContext = createContext()

//Provider

export const CartProvider = (props) => {

    const [count , setCount] = useState(0)

    const [cartState, setCartState] = useState([])


    //checkea si el item esta en el cart
    const isInCart = itemCartId => cartState.some( paramId => paramId.id === itemCartId);


    //remueve item del Cart
    const removeItem = (id) => { 
        
        let filiteredItem = cartState.filter(cartItem => cartItem.id !== id)
        
        setCartState(filiteredItem)
    }  
    
    
    //Vacia el cart por completo
    const clearCart = () => setCartState([])
   
    
    
    function AddItem(item, quantity) {
    
    //logica para no agregar duplicados
        if(isInCart(item.id)) {
            const nuevoCart = cartState.map( elemItem => {
                if(elemItem.id === item.id) {
                    //logica para agregar más cantidad y no el item de nuevo
                    return {...elemItem, quantity: elemItem.quantity + quantity}
                } else return elemItem;
            })
            setCartState(nuevoCart);
        } else {
            //si no encuentra duplicados lo almacena en el state
            setCartState(prev => [...prev, {...item, quantity}]);
            
        }
        
    };


    //logica para sumar el total del carrito
    let sum = []
    for (let i = 0; i < cartState.length; i++) {
        sum = [...sum, cartState[i].precio]
    }

    const summed = sum.reduce((a, b) => a + b, 0);

    //
    
    

    //Return Context
    return(
        <CartContext.Provider value={ {AddItem, setCount, count, cartState, clearCart, removeItem, summed}}>
            {props.children}
        </CartContext.Provider>
    )
};


