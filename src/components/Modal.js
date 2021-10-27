import React from 'react';

function Modal(props) {
    return (
        <div className='modal'>
            <p>Are you Sure you want to Delete?</p>
            <button className='btn btn-all' onClick={props.onCancel}>Cancel</button>
            <button className='btn' onClick={props.onConfirm}>Confirm</button>
        </div>
    )
}

export default Modal;