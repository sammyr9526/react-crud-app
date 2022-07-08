import React from "react";
import CrudTableRow from "./CrudTableRow";

const CrudTable = ({ data, setDataToEdit, deleteData }) => {
  return (
    <div className="main-container">
      <div className="table-title">
        <h3>Data Table</h3>
      </div>
      <table className="table-fill">
        <thead>
          <tr>
            <th className="table-head">Name</th>
            <th className="table-head">Task</th>
            <th className="table-head">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td className="text-left" colSpan="3">
                No data
              </td>
            </tr>
          ) : (
            data.map((el) => (
              <CrudTableRow
                key={el.id}
                el={el}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CrudTable;
