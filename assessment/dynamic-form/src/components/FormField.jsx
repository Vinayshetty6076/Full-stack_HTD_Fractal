import React from "react";

const FormField = ({ value, onChange, onRemove }) => {
  return (
    <div className="d-flex align-items-center mb-2">
      <input
        type="text"
        className="form-control me-2"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button type="button" className="btn btn-danger" onClick={onRemove}>
        Remove
      </button>
    </div>
  );
};

export default FormField;
