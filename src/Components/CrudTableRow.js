import React from "react";

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  let { name, task, id } = el;
  return (
    <tr>
      <td className="text-left">{name}</td>
      <td className="text-left">{task}</td>
      <td className="text-left">
        <button onClick={() => setDataToEdit(el)}>Edit</button>
        <button onClick={() => deleteData(id, name)}>Delete</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
