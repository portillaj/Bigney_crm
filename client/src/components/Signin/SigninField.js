//EmailField contains logic to render label and text input
import React from 'react';

export default ({ input, label }) => {
   
    return(
        <div className="form-group">
            <label>{label}</label>
            <input className="form-control" { ...input }/>
        </div>
    );
}