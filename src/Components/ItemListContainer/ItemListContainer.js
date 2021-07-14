import React, {useState, useEffect, useContext} from 'react'
import ItemList from '../ItemList/itemList'
import './ItemListContainer.scss'
// import { useParams } from 'react-router'
import {CartContext} from '../../Context/Cart/CartContext'

function ItemListContainer() {

    // let { id } = useParams();

    const value = useContext(CartContext)

    const { fireData } = value

    const objArr = []
    // const [dataReal , setRealdata] = useState([]);

    useEffect(() => {
       objArr.push(fireData)
    }, []);

    // const filteredContainer = dataReal.filter( r => id === r.tipo )

    return (
        <section className="d-flex flex-wrap justify-content-center mx-5"  >
            <ItemList apiData={objArr} />
        </section>

    )
}

export default ItemListContainer
