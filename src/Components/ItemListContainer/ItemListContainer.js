import React, {useState, useEffect} from 'react'
import ItemList from '../ItemList/itemList'
import './ItemListContainer.scss'
import { useParams } from 'react-router'



function ItemListContainer() {

    const [dataReal , setRealdata] = useState([]);

    let { id } = useParams();

    const filteredContainer = dataReal.filter( r => id === r.tipo )
    
    
    useEffect(() => {

        

         fetch('https://mocki.io/v1/d2257ce1-54b5-4381-b50a-10b08d17544a')
         .then((response) => response.json())
         .then((json) => setRealdata(json))
         
         
        }, []);


    return (
        <section className="d-flex flex-wrap justify-content-center mx-5"  >
            <ItemList apiData={id ? filteredContainer : dataReal} />
        </section>

    )
}

export default ItemListContainer
