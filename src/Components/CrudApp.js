import React, { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

//initial elements in table
const initialDb = [
  {
    name: "Sammyr",
    task: "Code",
    id: 1,
  },
  {
    name: "Alex",
    task: "Debug",
    id: 2,
  },
  {
    name: "Isabel",
    task: "Manage databases",
    id: 3,
  },
  {
    name: "Luiggi",
    task: "Design",
    id: 4,
  },
];

const CrudApp = () => {
  const [db, setDb] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null);

  //create function
  const createData = (data) => {
    data.id = Date.now();
    setDb([...db, data]);
  };

  //update function
  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };

  //delete function
  const deleteData = (id, name) => {
    let isDelete = window.confirm(
      `You want to delete the user with name: '${name}' ?`
    );
    if (isDelete) {
      let newData = db.filter((el) => el.id !== id);
      setDb(newData);
    } else {
      return;
    }
  };

  return (
    <div className="container">
      <CrudForm
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />

      <CrudTable
        data={db}
        deleteData={deleteData}
        setDataToEdit={setDataToEdit}
      />
    </div>
  );
};

export default CrudApp;
