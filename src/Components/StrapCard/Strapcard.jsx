import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle
} from 'reactstrap';

const StrapCard = (props) => {
    
    const { img, producto, description } = props.dataItems
    
  return (
    <div className="d-flex justify-content-center">
      <Card style={{ maxWidth: '50%', margin:'0'}}>
        <CardImg  src={img} alt="Card image cap" style={{maxHeight: '20rem'}}/>
        <CardBody>
          <CardTitle tag="h5">{producto}</CardTitle>
          <CardText>{description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default StrapCard;