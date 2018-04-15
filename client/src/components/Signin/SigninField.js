//EmailField contains logic to render label and text input
import React from 'react';

export default ({ input, type, label, meta: { error, touched } }) => {
    return(
        <div className="form-group">
            <label>{ label } :</label>
            <input className="form-control" type={ type } { ...input }/>
            <div className="text-danger mt-2">
                { touched && error }
            </div>
        </div>
    );
}