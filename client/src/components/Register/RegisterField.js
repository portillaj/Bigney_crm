//EmailField contains logic to render label and text input
import React from 'react';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

export default ({ input, name, type, label, placeholder, meta: { error, touched } }) => {
  return (
    <div className={Bootstrap['form-group']}>
      <label htmlFor="username">Username</label>
      <input
        className={Bootstrap['form-control']}
        type={type}
        placeholder={placeholder}
        {...input}
      />
      <div className={Bootstrap['text-danger mt-2']}>{touched && error}</div>
    </div>
  );
};
