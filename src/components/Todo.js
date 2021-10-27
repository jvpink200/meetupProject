import React, { useState } from 'react';
import Modal from './Modal';
import BackDrop from './Backdrop';

function ToDo(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function deleteHandler() {
        setModalIsOpen(true);
    }

    return (
        <div className="card mt-2">
          <h2>{props.title}</h2>
          <div className="actions">
              <span>{props.bio}</span>
            <button className="btn" onClick={deleteHandler}>Delete</button>
          </div>
          {modalIsOpen ? <Modal/> : null }
        </div>
    );
}

export default ToDo;