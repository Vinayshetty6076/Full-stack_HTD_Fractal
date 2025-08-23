import React, { useState } from "react";
import DynamicForm from "./components/DynamicForm";

const App = () => {
  const [submittedValues, setSubmittedValues] = useState([]);

  const handleFormSubmit = (values) => {
    setSubmittedValues(values);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center fw-bold mb-4">Dynamic Form Builder</h2>
      <DynamicForm onSubmit={handleFormSubmit} />

      <h4 className="text-center fw-bold mt-5">Submitted Values</h4>
      <div className="list-group">
        {submittedValues.map((val, index) => (
          <div key={index} className="list-group-item">
            {val}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
