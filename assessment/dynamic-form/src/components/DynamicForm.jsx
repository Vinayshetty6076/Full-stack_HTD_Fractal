import React, { useState } from "react";
import FormField from "./FormField";

const DynamicForm = ({ onSubmit }) => {
  const [fields, setFields] = useState(["Ajay", "Rohit"]);

  const handleAddField = () => {
    setFields([...fields, `Field ${fields.length + 1}`]);
  };

  const handleRemoveField = (index) => {
    const newFields = fields.filter((_, i) => i !== index);
    setFields(newFields);
  };

  const handleChange = (index, value) => {
    const newFields = [...fields];
    newFields[index] = value;
    setFields(newFields);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(fields.filter((f) => f.trim() !== ""));
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field, index) => (
        <FormField
          key={index}
          value={field}
          onChange={(val) => handleChange(index, val)}
          onRemove={() => handleRemoveField(index)}
        />
      ))}

      <div className="mt-3">
        <button
          type="button"
          className="btn btn-success me-2"
          onClick={handleAddField}
        >
          Add Field
        </button>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default DynamicForm;
