import React, { useState } from 'react';
import Modal from './Modal';
import BackDrop from './Backdrop';

function ToDo(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function deleteHandler() {
        setModalIsOpen(true);
    }

    function closeModalHandler() {
        setModalIsOpen(false);
    }

    function confirmClose() {
        //closes Modal
        setModalIsOpen(false);
        console.log('Deleted Confirmed');
    }

    return (
      <div className="card mt-2">
        <h2>{props.title}</h2>
        <div className="actions">
          <span>{props.bio}</span>
          <button className="btn" onClick={deleteHandler}>
            Delete
          </button>
        </div>
        {modalIsOpen ? (
          <Modal 
          onCancel={closeModalHandler} 
          onConfirm={confirmClose} 
          />
        ) : null}
        {modalIsOpen ? <BackDrop onCancel={closeModalHandler} /> : null}
      </div>
    );
}

export default ToDo;