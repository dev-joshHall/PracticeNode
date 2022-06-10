import React, { Component } from 'react';

const NewItem = (props) => {
    return (
        <React.Fragment>
            <input type="text" className='form-control' />
            <button onClick={props.onAddItem}></button>
        </React.Fragment>
    );
}
 
export default NewItem;