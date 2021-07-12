import React from "react";
import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";

const CartForm = () => {
  return (
    <Form>
      <FormGroup className="my-3">
        <Label for="firstName">Nombre</Label>
        <Input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Nombre "
        />
      </FormGroup>
      <FormGroup className="my-3">
        <Label for="lastName">Apellido</Label>
        <Input type="text" name="lastName" id="Email" placeholder="Apellido" />
      </FormGroup>
      <FormGroup className="my-3">
        <Label for="domicilio">Domicilio</Label>
        <Input
          type="text"
          name="domicilio"
          id="domicilio"
          placeholder="calle123..."
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
      <FormGroup className="my-4 pb-4" style={{borderBottom: 'solid 1px black'}} check>
        <Label check>
          <Input type="checkbox" />{' '}
          Guardar como dirección predeterminada
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
        />
      </FormGroup>
      <FormGroup className="my-3">
        <Label for="telefono">Teléfono</Label>
        <Input type="text" name="telefono" id="telefono" placeholder="+54 11..." />
      </FormGroup>
      <FormGroup className="my-3 pb-3" check>
        <Label check>
          <Input type="checkbox" />{' '}
          Deseo recibir contenido promocional
        </Label>
      </FormGroup>
      <Button color="primary mb-3 text-center px-5">Continuar Compra a MercadoPago</Button>
    </Form>
  );
};

export default CartForm;
