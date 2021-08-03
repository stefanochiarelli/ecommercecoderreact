import React, { useState } from 'react';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { toast } from 'react-toastify';
import './UserModal.scss'


const UserModal = (props) => {

 

    const {
        buttonLabel,
        className
      } = props;
      
      const user = JSON.parse(localStorage.getItem('User'))

      const [modal, setModal] = useState(false);
    
      const toggle = (e) => {
        if(e.target.textContent === "Cerrar Sesion"){
          
          toast.warn('Se ha cerrado sesion con exito!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
          setModal(!modal);
          localStorage.removeItem('User')
        }else {
        setModal(!modal);
        }
    }
      return (
        <>
        {localStorage ? <div>
          <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
          <Modal isOpen={modal} toggle={toggle} className={className}>
            <ModalHeader toggle={toggle}>Hola {user?user.firstName:null}!</ModalHeader>
            <ModalBody>
              <div className="box1">
                <h4>Sus datos son:</h4>
                <ul>
                  <li><b>Nombre:</b> {user?user.firstName:null} {user?user.lastName:null}</li>
                  <li><b>Domicilio:</b> {user?user.domicilio:null} </li>
                  <li><b>Teléfono:</b> {user?user.telefono:null}</li>
                  <li><b>Email:</b> {user?user.email:null}</li>
                </ul>
              </div>
              <div className="box2">
                <h4>Su ultima compra fue:</h4>
                <ul>
                  {user?user.items.products.map((y, o) => 
                    <span key={o}>
                    <li >Item: {y} </li>
                    <li>Cantidad: {user?user.items.cantidad[o]:null}</li>
                    </span>
                  ):null}
                  <li>Total ${user?user.items.total:null} </li>
                </ul>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" onClick={toggle}>Cerrar Sesion</Button>{' '}
              
            </ModalFooter>
          </Modal>
        </div>: null}
        </>
      );
}

export default UserModal
