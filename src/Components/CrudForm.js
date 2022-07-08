import React, { useState, useEffect } from "react";

//basic form data, required for updating form after adding new element to the table
const initialForm = {
  name: "",
  task: "",
  id: null,
};

const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(initialForm);

  //manage update data
  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  //manage input data in form
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  //manage submit button ,require for adding data or updating
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.task) {
      alert("incomplete data");
      return;
    }

    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }
    handleReset();
  };

  //clean inputs
  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
  };
  return (
    <div className="task-form">
      <h3 className="task-title">
        {dataToEdit ? "Edit a worker or a task" : "Add a worker and a task"}{" "}
      </h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={form.name}
          className="input"
        />
        <input
          type="text"
          name="task"
          placeholder="Task"
          onChange={handleChange}
          value={form.task}
          className="input"
        />
        <input type="submit" value="Send" className="button" />
        <input
          type="reset"
          value="Clean"
          onClick={handleReset}
          className="button"
        />
      </form>
    </div>
  );
};

export default CrudForm;
