import React, {useState ,useEffect, Fragment } from 'react'
import './Item.scss';
import ItemCount from '../ItemCount/ItemCount'


function Item() {
    const [dataReal , setRealdata] = useState([]);
    
    

    useEffect(() => {
         fetch('https://mocki.io/v1/7156b595-e88a-4d3a-bc5e-fd2d53465483')
         .then((response) => response.json())
         .then((json) => setRealdata(json))
      }, []);

    return (
        
         <>   
                 
            {dataReal.map((data) =>
            <div className=" card mx-3 my-5" style={{width: '18rem'}} key={data.id}>     
               <div >   
                    <img className="card-img-top" src={data.img} alt="card" />
                    <div className="card-body" >
                        <h5 className="card-title">{data.producto}</h5>
                        <p className="card-text  ">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        <ItemCount /> 
                    </div>
                </div>
            </div>
                 )} 
       
        </>
        
    )
}

export default Item
