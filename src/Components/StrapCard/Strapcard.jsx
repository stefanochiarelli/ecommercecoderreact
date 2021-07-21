import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle
} from 'reactstrap';

const StrapCard = (props) => {
    
    const { img, producto, description } = props.dataItems
    
  return (
    <div className="d-flex justify-content-center">
      <Card style={{ maxWidth: '70%', margin:'0', height: '100%'}}>
        <CardImg  src={img} alt="Card image cap" />
        <CardBody className="d-flex flex-column justify-content-center">
          <CardTitle tag="h5">{producto}</CardTitle>
          <CardText>{description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default StrapCard;