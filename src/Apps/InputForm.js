import React, { useState } from "react";

const InputForm = () => {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <h2>Форма ввода</h2>
      <input type="text" value={name} onChange={handleChange} />
      <p>Привет, {name}!</p>
    </div>
  );
};

export default InputForm;
