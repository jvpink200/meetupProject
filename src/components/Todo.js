import React from 'react';

function ToDo(props) {
    return (
        <div className="card mt-2">
          <h2>{props.title}</h2>
          <div className="actions">
              <span>{props.bio}</span>
            <button className="btn">Delete</button>
          </div>
        </div>
    );
}

export default ToDo;