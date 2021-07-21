import React, {useState, useContext} from "react";
import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";
import { CartContext } from "../../Context/Cart/CartContext";
import { format, endOfDay } from "date-fns";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CartForm = ({BuyerSetter}) => {

  const contextValue = useContext(CartContext)

  const { cartState, summed } = contextValue

  const dateToday = format (endOfDay(new Date()), "yyyy-MM-dd");

  const initialStateUser = {
    firstName: "",
    lastName: "", 
    domicilio: "",
    email: "",
    telefono: "",
    buyerId: Math.floor(Math.random() * 100)
  }

  

  const [userValue, setUserValue] = useState(initialStateUser)


  //Handlers

  const handleChange = (e) => {
    const {name, value} = e.target

    setUserValue({...userValue, [name]: value, items: {id: cartState.map(a => a.id), products: cartState.map(e => e.producto), total: summed + summed * 0.21}, date: dateToday})
    
  }

  const handleSumbit = (e) => {
    e.preventDefault();
    if(userValue.firstName !== ""){
      BuyerSetter(userValue, userValue.buyerId);
      setUserValue({...initialStateUser})
    } else if (userValue.firstName === "") {
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
          value={userValue.firstName}
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
          value={userValue.lastName}
          required
        />
      </FormGroup>
      <FormGroup className="my-3">
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
              <option>Córdoba</option>
              <option>Corrientes</option>
              <option>Entre Ríos</option>
              <option>Formosa</option>
              <option>Jujuy</option>
              <option>La Pampa</option>
              <option>La Rioja</option>
              <option>Mendoza</option>
              <option>Misiones</option>
              <option>Neuquén</option>
              <option>Río Negro</option>
              <option>Salta</option>
              <option>San Juan</option>
              <option>San Luis</option>
              <option>Santa Cruz</option>
              <option>Santa Fe</option>
              <option>Santiago del Estero</option>
              <option>Tierra del Fuego</option>
              <option>Tucumán</option>
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
            />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup
        className="my-4 pb-4"
        style={{ borderBottom: "solid 1px black" }}
        check
      >
        <Label check>
          <Input type="checkbox" /> Guardar como dirección predeterminada
        </Label>
      </FormGroup>
      <h3 className="mt-5">Información de Contacto</h3>
      <FormGroup className="my-3">
        <Label for="email">Email</Label>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Ponga su email... "
          onChange={handleChange}
          value={userValue.email}
        />
      </FormGroup>
      <FormGroup className="my-3">
        <Label for="telefono">Teléfono</Label>
        <Input
          type="text"
          name="telefono"
          id="telefono"
          placeholder="+54 11..."
          onChange={handleChange}
          value={userValue.phone}
        />
      </FormGroup>
      <FormGroup className="my-3 pb-3" check>
        <Label check>
          <Input type="checkbox" /> Deseo recibir contenido promocional
        </Label>
      </FormGroup>
      <Button color="primary mb-3 text-center px-5" onClick={handleSumbit}>
        Terminar mi Compra
      </Button>
    </Form>
  );
};

export default CartForm;
