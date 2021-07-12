import React, { useState, useContext } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import CartWidget from "../CartWidget/CartWidget";
import './CartModal.scss'
import { CartContext } from '../../Context/Cart/CartContext';
import CartListGroup from "../CartListGroup/CartListGroup";
import { Link } from 'react-router-dom'

const CartModal = () => {
  
  const contextValue = useContext(CartContext)

  const { cartState, clearCart } = contextValue

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      {cartState.length >= 1 ?<Button onClick={toggle} className="coffee__CartModal" style={{backgroundColor: '#FFA500', border: 'solid #FFA500'}}> <CartWidget /></Button>:null}
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Su Compra</ModalHeader>
        <ModalBody>
          {cartState.map( cartCompra => (
              <div key={cartCompra.id}>
                  <CartListGroup dataCompra={cartCompra} />
              </div>
                ))}
        </ModalBody>
        <ModalFooter>
          <Link to="/Cart"><Button onClick={toggle} color="success" >Terminar Compra</Button></Link>
          <Button color="danger"  onClick={() => clearCart()} style={{backgroundColor: '#FFA500', border: 'solid #FFA500'}}>Vaciar Carrito</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default CartModal;