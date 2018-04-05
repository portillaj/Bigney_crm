//EmailField contains logic to render label and text input
import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
    return(
        <div className="form-group">
            <label>{ label } :</label>
            <input className="form-control" { ...input }/>
            <div className="text-danger mt-2">
                { touched && error }
            </div>
        </div>
    );
}