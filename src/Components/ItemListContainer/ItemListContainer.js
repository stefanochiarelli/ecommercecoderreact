import React, {useState, useEffect} from 'react'
import ItemList from '../ItemList/itemList'
import './ItemListContainer.scss'




function ItemListContainer() {

    const [dataReal , setRealdata] = useState([]);
    
    

    useEffect(() => {
         fetch('https://mocki.io/v1/7156b595-e88a-4d3a-bc5e-fd2d53465483')
         .then((response) => response.json())
         .then((json) => setRealdata(json))
      }, []);




    return (
        <section className="d-flex justify-content-center" >
            <ItemList apiData={dataReal} />
        </section>

    )
}

export default ItemListContainer
