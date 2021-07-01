import React, {useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router'


const ItemDetailContainer = () => {

    let { id } = useParams();

    const [dataDetail , setDetail] = useState([]);
    

    useEffect(() => {
         fetch('https://mocki.io/v1/d2257ce1-54b5-4381-b50a-10b08d17544a')
         .then((response) => response.json())
         .then((json) => setDetail(json))
      }, []);

      const filteredArray = dataDetail.filter((data) => id === data.id)

      

    return (
        <>
            <ItemDetail fArray={filteredArray}/>
        </>
    )
}

export default ItemDetailContainer
