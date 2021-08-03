import React from 'react';
import { Jumbotron } from 'reactstrap';
import './Cjumbo.scss'



const Cjumbo = ({tipo, color, textColor, descr}) => {
    return (
      <div>
        <Jumbotron style={{backgroundColor: `${color}`, color: `${textColor}`}} className="coffee__Jumbotron">
          <h1 className="display-3">{tipo}</h1>
          <p className="lead">
            {descr}
          </p>
          <hr className="my-2" />
          <p>
            NOTA PARA EL COMPRADOR: Nosotoros ofrecemos el cafe en grano y no molido, ya que somos una empresa que se dedica a vender
            el cafe al por mayor.
          </p>
        </Jumbotron>
      </div>
    );
}

export default Cjumbo
