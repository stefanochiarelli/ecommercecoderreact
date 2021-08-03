import React, { useEffect, useContext} from 'react'
import ItemList from '../ItemList/itemList'
import './ItemListContainer.scss'
import { useParams, useHistory } from 'react-router'
import {CartContext} from '../../Context/Cart/CartContext'
import CarruselHome from '../CarruselHome/CarruselHome'
import Cjumbo from '../Cjumbo/Cjumbo'



function ItemListContainer() {

    const queryParams = window.location.search

    let { id } = useParams();

    const handlePush = useHistory()

    console.log(id)
    const value = useContext(CartContext)

    const { getItems, fireData } = value

    

    useEffect(() => {
        
       getItems()
       //eslint-disable-next-line
    }, []);

    const filteredContainer = fireData.filter( r => id === r.tipo )

    const HandleSelect = (e) => {
        const {value} = e.target
        switch (value) {
            case 'TODOS':
                handlePush.push("/")
                break;

            case 'Suave':
                handlePush.push("/Suave")
                break;    

            case 'Medio':
                handlePush.push("/Medio")
                break;
                
            case 'Fuerte':
                handlePush.push("/Fuerte")
                break;    
        
            default:
                break;
        }


       
    }
        

    //descripciones
    const descrSuave = "Esta es la sección de los cafes con intensidad Suave, si a usted le gusta tomarse un cafe y es bastante sensible a la cafeína, entonces se le recomienda este tipo de intensidad."
    const descrMedio = "Esta es la sección de los cafes con intensidad Medio, esta categoria es recomendada si a usted le gusta estar productivo en su mañana/tarde, pero sin tomar bastante cantidad de cafeína."
    const descrFuerte = "Esta es la sección de los cafes con intensidad Fuerte, esta categoría se describe por si sola, es para aquellos que ya estan acostumbrados a tomar bastante cafe."

    return (
        <>
        {id === 'AboutUs' || id === 'Terms' ? null : <section className="d-flex flex-wrap justify-content-center "  >
            { queryParams === `?name=${id}` || id === 'Cart' ? null : <CarruselHome />}
            <div className="container">
                { queryParams === `?name=${id}` || id !== 'Cart' ? <div className="row">
                    {/* eslint-disable-next-line */}
                    { !id || id === `${id}` && !queryParams ? <h2 className="my-4">Nuestros Productos</h2>: null}
                    { queryParams !== `?name=${id}` ? <label className="label-select">
                        <span className="mx-4">Elija su tipo:</span>
                        <div className="coffee__select my-5">
                            <select name="label-select" onChange={HandleSelect}>
                                <option value="TODOS">TODOS</option>
                                <option value="Suave">SUAVE</option>
                                <option value="Medio">MEDIO</option>
                                <option value="Fuerte">FUERTE</option>
                            </select>
                        </div>    
                    </label>: null}
                </div> : null}
                {/* Descripcion de Categoria */}
                { queryParams === `?name=Suave` ? <Cjumbo tipo='Suave' color='#FFC107' descr={descrSuave}/> : null}
                { queryParams === `?name=Medio` ? <Cjumbo tipo='Medio' color='#08FFC1' textColor="black" descr={descrMedio}/> : null}
                { queryParams === `?name=Fuerte` ? <Cjumbo tipo='Fuerte' color='#C108FF' descr={descrFuerte}/> : null}
                <div className="row d-flex justify-content-center mb-5">    
                    { id ? <ItemList apiData={filteredContainer} /> :  <ItemList apiData={fireData}/>}
                </div>    
            </div>     
        </section>}
        </>
    )
}

export default ItemListContainer
