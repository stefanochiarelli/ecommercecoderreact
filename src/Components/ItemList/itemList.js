import React from 'react'
import Item from '../Item/Item'





function ItemList({apiData}) {


    return (
        <>
        {apiData.map((data) =>
            <Item  producto={data.producto} tipoCafe={data.tipo} imagen={data.img} ids={data.id} key={data.id}/>
            )}
            
        </>
        
    )
}

export default ItemList
