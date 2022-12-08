import { useState } from 'react';
import Button from '../components/Button';
import Modal from '../components/Modal';

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <Button primary onClick={handleClose}>
      I Accept
    </Button>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <div>
        <p>Here is an important agreement for you to accept.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
          quibusdam deserunt neque sed nam ipsa, doloremque ullam! Sed,
          asperiores similique?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem alias
          consectetur sit fuga nihil est!
        </p>
      </div>
    </Modal>
  );

  const lorem = (
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae vel
      pariatur autem laudantium sequi illo quibusdam quas veritatis tempore
      reprehenderit quae nulla earum, reiciendis incidunt velit eaque quo
      adipisci ipsam dolorem consequatur doloremque exercitationem, laborum
      fugiat. Praesentium, ipsa! Illo ullam adipisci praesentium provident aut.
      Iure, mollitia. Voluptas ipsum beatae reiciendis.
    </p>
  );

  return (
    <div>
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && modal}

      {lorem}
      {lorem}
      {lorem}
      {lorem}
      {lorem}
      {lorem}
      {lorem}
      {lorem}
      {lorem}
      {lorem}
      {lorem}
      {lorem}
      {lorem}
      {lorem}
      {lorem}
      {lorem}
      {lorem}
      {lorem}
      {lorem}
      {lorem}

      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && modal}
    </div>
  );
};

export default ModalPage;
