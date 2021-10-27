import React from 'react';

function Modal() {
    return (
        <div className='modal'>
            <p>Are you Sure you want to Delete?</p>
            <button className='btn btn-all'>Cancel</button>
            <button className='btn'>Confirm</button>
        </div>
    )
}

export default Modal;