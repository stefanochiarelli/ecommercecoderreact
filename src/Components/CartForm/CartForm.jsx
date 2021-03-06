import React, {useState, useContext} from "react";
import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";
import { CartContext } from "../../Context/Cart/CartContext";
import { format, endOfDay } from "date-fns";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CartForm = ({BuyerSetter}) => {

  const contextValue = useContext(CartContext)

  const { cartState, summed, setUserLocal, checkBool, setChecked } = contextValue

  const dateToday = format (endOfDay(new Date()), "yyyy-MM-dd");

  const initialStateUser = {
    firstName: "",
    lastName: "", 
    domicilio: "",
    email: "",
    telefono: "",
    buyerId: Math.floor(Math.random() * 1000)
  }

  //states

  const [userValue, setUserValue] = useState(initialStateUser)

  


  //Getter de los datos del usario en local storage
  
  const user = JSON.parse(localStorage.getItem('User'))


  //Handlers

  const handleChange = (e) => {
    const {name, value} = e.target

    setUserValue({...userValue, [name]: value, items: {id: cartState.map(a => a.id), products: cartState.map(e => e.producto), cantidad: cartState.map(e => e.quantity) , total: summed + summed * 0.21}, date: dateToday})
    
  }

  
  const isChecked = (e) => {
    const { checked } = e.target

    if (checked) {
      
      if(e.target.className.includes('userCreate')){
        setChecked(true)
        
      } 
      
      
    } else {
      if(e.target.className.includes('userCreate')){
        setChecked(false)
        
      } 
      
      
    }
  }

  
 

  const handleSumbit = (e) => {
    e.preventDefault();
    if(userValue.firstName !== "" && userValue.telefono !== "" && userValue.lastName !== "" && userValue.email !== ""){
      BuyerSetter(userValue, userValue.buyerId);
      setUserValue({...initialStateUser})

      if(checkBool){
        localStorage.setItem('User', JSON.stringify(userValue))
        setUserLocal(JSON.parse(localStorage.getItem('User')))
      }
    } else {
      toast.error('Debe completar el formulario', {autoClose: 2000, pauseOnHover: false})
    }
    
    
  }
  

  return (
    <Form>
      <FormGroup className="my-3">
        <Label for="firstName">Nombre</Label>
        <Input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Nombre "
          required
          onChange={handleChange}
          value={user ? user.firstName : userValue.firstName}
        />
      </FormGroup>
      <FormGroup className="my-3">
        <Label for="lastName">Apellido</Label>
        <Input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Apellido"
          onChange={handleChange}
          value={user ? user.lastName : userValue.lastName}
          required
        />
      </FormGroup>
      <FormGroup className=" my-3 ">
        <Label for="domicilio">Domicilio</Label>
        <Input
          type="text"
          name="domicilio"
          id="domicilio"
          placeholder="calle123..."
          onChange={handleChange}
          value={userValue.domicilio}
        />
        <Input
          className="mt-3"
          type="text"
          name="domicilio2"
          id="domicilio2"
          placeholder="Entre calles..."
        />
      </FormGroup>
      <FormGroup className="my-3">
        <Label for="ciudad">Ciudad</Label>
        <Input
          type="text"
          name="ciudad"
          id="ciudad"
          placeholder="Ej: Buenos Aires"
        />
      </FormGroup>
      <Row>
        <Col>
          <FormGroup>
            <Label for="provinciaSelect">Provincia</Label>
            <Input
              className="form-select"
              aria-label="Default select example"
              type="select"
              name="select"
              id="provinciaSelect"
            >
              <option>Buenos Aires</option>
              <option>Capital Federal</option>
              <option>Catamarca</option>
              <option>Chaco</option>
              <option>Chubut</option>
              <option>C??rdoba</option>
              <option>Corrientes</option>
              <option>Entre R??os</option>
              <option>Formosa</option>
              <option>Jujuy</option>
              <option>La Pampa</option>
              <option>La Rioja</option>
              <option>Mendoza</option>
              <option>Misiones</option>
              <option>Neuqu??n</option>
              <option>R??o Negro</option>
              <option>Salta</option>
              <option>San Juan</option>
              <option>San Luis</option>
              <option>Santa Cruz</option>
              <option>Santa Fe</option>
              <option>Santiago del Estero</option>
              <option>Tierra del Fuego</option>
              <option>Tucum??n</option>
            </Input>
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label for="domicilio">Codigo Postal</Label>
            <Input
              type="text"
              name="domicilio"
              id="domicilio"
              placeholder="Codigo Postal"
              className="mb-5"
            />
          </FormGroup>
        </Col>
      </Row>
      
      <FormGroup
        className=" pt-4"
        style={{borderTop: '1px solid black'}}
        check
      >
        {!localStorage.getItem('User')?<Label check>
          <Input type="checkbox" className="userCreate" onChange={isChecked}/> Crear usuario en la plataforma?
        </Label>:null}
      </FormGroup>
      <h3 className="mt-3">Informaci??n de Contacto</h3>
      <FormGroup className="my-3">
        <Label for="email">Email</Label>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Ponga su email... "
          onChange={handleChange}
          value={user ? user.email : userValue.email}
        />
      </FormGroup>
      <FormGroup className="my-3">
        <Label for="telefono">Tel??fono</Label>
        <Input
          type="text"
          name="telefono"
          id="telefono"
          placeholder="+54 11..."
          onChange={handleChange}
          value={user ? user.telefono : userValue.telefono}
        />
      </FormGroup>
      <FormGroup className="my-3 pb-3" check>
        <Label check>
          <Input type="checkbox" /> Deseo recibir contenido promocional
        </Label>
      </FormGroup>
      <Button color="primary mb-5 text-center px-5" onClick={handleSumbit}>
        Terminar mi Compra
      </Button>
    </Form>
  );
};

export default CartForm;
