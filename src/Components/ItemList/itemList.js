import React from 'react'
import Item from '../Item/Item'





function ItemList({apiData}) {

    

    return (
        <>
        {apiData.map((data) =>
            <Item  producto={data.producto} description={data.description} tipoCafe={data.tipo} imagen={data.img} ids={data.id} origen={data.origen} key={data.id}/>
            )}
            
        </>
        
    )
}

export default ItemList
