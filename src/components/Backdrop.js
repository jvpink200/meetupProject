import React from 'react';
//onClick is built in as it is not a custom component
function BackDrop(props) {
    return <div className='backdrop' onClick={props.onCancel}/>
}

export default BackDrop;