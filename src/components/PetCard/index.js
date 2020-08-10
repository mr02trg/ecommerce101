import React from 'react';
import Card from 'react-bootstrap/Card';
import addPetImg from 'assets/images/add-pet.png';
import './style.scss';

const PetCard = ({ pet = null, ...props }) => {
  const renderHelper = () => {
    if (pet) {
      return (
      <Card className="pet-card-wrapper">
        <Card.Img src={pet.imageUrl} />
        <Card.Body>
          <Card.Title>{pet.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{pet.price}</Card.Subtitle>
          <Card.Text>{pet.description}</Card.Text>
          <div className="card-button">
            <button className="btn btn-warning">Go somewhere</button>
          </div>
        </Card.Body>
      </Card>
      );
    } else {
      return (
        <Card className="add-pet-card">
          <div className="add-pet">
            <img className="add-pet-img" alt="" src={addPetImg} />
          </div>
          <Card.Body className="d-flex justify-content-around">
            <button className="btn btn-warning" onClick={props.addPet}>Add Pet</button>
          </Card.Body>
        </Card>
      );
    }
  }

  return renderHelper();
}
export default PetCard;
