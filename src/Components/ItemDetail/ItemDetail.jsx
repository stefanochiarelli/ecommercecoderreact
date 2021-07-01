import React from 'react'
import StrapCard from '../StrapCard/Strapcard'
import ButtonGroups from '../ButtonGroup/ButtonGroups'
import { Button } from 'reactstrap';

const ItemDetail = ({fArray}) => {

    
    

    return (

        <>
             <div>
                 <h2 className="title mt-4">Detalle de su Compra</h2>
             </div>
        <div className="container d-flex align-items-center" style={{height: '80vh'}}>
             
            {fArray.map((item) =>
            
             
            <div className="row " key={item.id}>
                <div className="ml-5 col-md-12 col-lg-6" >
                    <StrapCard dataItems={item} />
                </div>
                <div className="d-flex flex-column align-items-center col-md-12 col-lg-6 my-5" >
                    <h3 style={{fontStyle: 'italic'}}>PRODUCTO: {item.producto}</h3>
                    <div>
                        <h4 style={{display:'inline'}}>Precio: {item.precio}</h4>
                        <span className="mb-2 mx-3" style={{backgroundColor: '#000000', padding:'.5rem .7rem', color: 'white', borderRadius: '1.5rem'}}>{item.tipo}</span>
                    </div> 
                    <ButtonGroups  />
                    <Button className="mt-4" size="lg" color="primary"> Agregar al Carrito</Button> 
                </div>

            </div>
                
            )}
            
        </div>
    </>    
    )
}

export default ItemDetail
