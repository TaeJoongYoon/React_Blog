import React from 'react';
import '../styles/style.css';

export const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className="form-group">
    <label className="form-control-label">{label}</label>
    <input className={`form-control ${touched && error ? 'is-invalid' : ''}`} {...input} placeholder={label} type={type}/>
    {touched && ((error && <span className="error">{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
)

export const renderTextArea = ({input, label, meta: { touched, error, warning }}) => (
  <div>
      <label>{label}</label>
      <div className="form-group">
          <textarea className={`form-control ${touched && error ? 'is-invalid' : ''}`} {...input} placeholder={label} rows="10"></textarea>
          {touched && ((error && <span className="error">{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
  </div>
);
