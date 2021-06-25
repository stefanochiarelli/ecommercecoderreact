import React from 'react'
import Item from '../Item/Item'





function ItemList({apiData}) {

    console.log(apiData)

    return (
        <>
        {apiData.map((data) =>
            <Item  producto={data.producto} imagen={data.img} key={data.id}/>
            )}
            
        </>
        
    )
}

export default ItemList
