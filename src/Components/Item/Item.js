import React from 'react'
import './Item.scss';
import ItemCount from '../ItemCount/ItemCount'


function Item({ producto, imagen}) {
    

    return (
        
         <>   
                 
            
            <div className=" card mx-3 my-5" style={{width: '18rem'}} >     
               <div >   
                    <img className="card-img-top" src={imagen} alt="card" />
                    <div className="card-body" >
                        <h5 className="card-title">{producto}</h5>
                        <p className="card-text  ">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        <ItemCount /> 
                    </div>
                </div>
            </div>
                  
       
        </>
        
    )
}

export default Item
