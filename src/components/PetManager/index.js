import React, { useState } from 'react'
import PetCard from 'components/PetCard'
import PetModal from 'components/PetModal';

const PetManager = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="pet-managemnet">
        <PetCard addPet={() => setShowModal(true)} />
      </div>
      <PetModal show={showModal} close={() => setShowModal(false)}/>
    </>
  )
}

export default PetManager;