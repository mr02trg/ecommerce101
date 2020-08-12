import React, { useState } from 'react'
import PetCard from 'components/PetCard'
import PetModal from 'components/PetModal';

const PetManager = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = data => {
    setShowModal(false);
    if (data) {
      console.log(data);
    }
  }

  return (
    <>
      <div className="pet-managemnet">
        <PetCard addPet={() => setShowModal(true)} />
      </div>
      <PetModal show={showModal} close={data => handleModalClose(data)}/>
    </>
  )
}

export default PetManager;