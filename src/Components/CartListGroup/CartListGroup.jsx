import React, {useContext} from 'react'
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CartContext } from '../../Context/Cart/CartContext';

const CartListGroup = ({dataCompra}) => {


    const contextValue = useContext(CartContext)

    const { removeItem } = contextValue

    const {id, producto, quantity} = dataCompra

  return (
    <ListGroup className="my-4">
      <ListGroupItem disabled ><span style={{fontWeight: 'bold'}}>N# de Refencia de Producto:</span> {id}</ListGroupItem>
      <ListGroupItem ><span style={{fontWeight: 'bold'}}>Producto:</span> {producto}</ListGroupItem>
      <ListGroupItem ><span style={{fontWeight: 'bold'}}>Cantidad:</span> {quantity}</ListGroupItem>
      <ListGroupItem ><Button color="danger" onClick={() => removeItem(id)}> Eliminar Prodcuto</Button></ListGroupItem>
    </ListGroup>
  );
}

export default CartListGroup;