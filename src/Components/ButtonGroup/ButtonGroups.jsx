import React from 'react'
import { Button, ButtonGroup } from 'reactstrap';

const ButtonGroups = ({handlePrice}) => {
    return (

    <ButtonGroup size="lg" className="my-4" style={{maxWidth: '20rem'}} onClick={(e) => handlePrice(e)} >
      <Button style={{backgroundColor: 'black'} } >1kg</Button>
      <Button style={{backgroundColor: 'black'}} >5kg</Button>
      <Button style={{backgroundColor: 'black'}} >12kg</Button>
    </ButtonGroup>
    )
}

export default ButtonGroups
