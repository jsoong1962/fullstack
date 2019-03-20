import React from 'react';

export default ({input, label, meta: {error, touched}}) => {

  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{marginbBottom: '5px'}}/>
      <div className="red-text" style={{marginbBottom: '20px'}}>
      {touched && error}
      </div>
    </div>
  )
}
