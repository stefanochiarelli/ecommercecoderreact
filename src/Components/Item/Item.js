import React from 'react'
import './Item.scss';
import ItemCount from '../ItemCount/ItemCount'
import { Badge } from 'reactstrap';




function Item({ producto, imagen, ids, tipoCafe, description, origen }) {
    
    const idesCount = ids;

    //Color Checker

    let styles = {}

        if (tipoCafe === 'Suave') {
            styles = {backgroundColor: '#FFC107'}
        } else if (tipoCafe === 'Medio') {
            styles = {backgroundColor: '#08FFC1', color: 'black'}
        } else {
            styles = {backgroundColor: '#C108FF'}
        }

    return (
        
         <>   
                 
            
            <div className=" card mx-3 my-5" style={{width: '18rem'}} >     
               <div >   
                    <img className="card-img-top" src={imagen} alt="card" />
                    <div className="card-body" >
                        <h5 className="card-title">{producto}</h5>
                        <p className="card-text font-weight-bold" style={{fontWeight: 'bold'}}><Badge className="coffee__Badge" style={styles}>{tipoCafe}</Badge></p>
                        <p className="card-text font-weight-bold" style={{fontWeight: 'bold'}}><span style={{fontWeight: 'normal'}}>Origen:</span> {origen}</p>
                        <p className="card-text  ">{description}</p>
                        <ItemCount  isThisId={idesCount} /> 
                    </div>
                </div>
            </div>
                  
       
        </>
        
    )
}

export default Item
