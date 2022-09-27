import React from 'react'
import {Button,Card }from 'react-bootstrap';



const CardList = ({list}) => {
  return (
    <div>
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{list.name}</Card.Title>
        <Card.Text>
          {list.email}
        </Card.Text>
        <Button variant="primary" href={'https://www.google.com/maps/@${list.adresse.geo.lat},$list.adresse.geo.lng},1z'} >Location</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default CardList