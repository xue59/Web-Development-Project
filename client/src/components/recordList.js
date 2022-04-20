import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Record = (props) => (
  <tr>
    <td>{props.record.itemName}</td>
    <td>{props.record.img}</td>
    <td>{props.record.currentQuantity}</td>
    <td>{props.record.subTeams}</td>
    <td>{props.record.region}</td>
    <td>{props.record.warehouseLocation}</td>
    <td>{props.record.notes}</td>
    <td>
      <Link className="btn btn-link" to={`/edit/${props.record._id}`}>
        Edit
      </Link>{" "}
      |
      {props.isAuthenticated && (
        <>
          <button
            className="btn btn-link"
            onClick={() => {
              props.deleteRecord(props.record._id);
            }}
          >
            Delete
          </button>
          |
        </>
      )}
      <Link className="btn btn-link" to={`/record/${props.record._id}`}>
        View
      </Link>{" "}
    </td>
  </tr>
);

export default function RecordList() {
  const [records, setRecords] = useState([]);
  const { isAuthenticated } = useAuth0();

  // This method fetches the records from the database.
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`${SERVER_URL}/record/`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      setRecords(records);
    }

    getRecords();

    return;
  }, [records.length]);

  // This method will delete a record
  async function deleteRecord(id) {
    await fetch(`${SERVER_URL}/${id}`, {
      method: "DELETE",
    });

    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  }

  // This method will map out the records on the table
  function recordList() {
    return records.map((record) => {
      return (
        <Record
          record={record}
          deleteRecord={() => deleteRecord(record._id)}
          key={record._id}
          isAuthenticated={isAuthenticated}
        />
      );
    });
  }

  // This following section will display the table with the records of individuals.
  return (
    <div>
      <h3>Inventory Record List</h3>
      <table
        className="table table-striped"
        style={{ marginTop: 20, border: 1, width: "100%" }}
      >
        <thead>
          <tr className="inventory-table-head">
            <th>Item Name:</th>
            <th>Type:</th>
            <th>Current Quantity:</th>
            <th>Sub-teams:</th>
            <th>Region:</th>
            <th>Warehouse location:</th>
            <th>Notes: </th>
            <th>Actions: </th>
          </tr>
        </thead>
        <tbody>{recordList()}</tbody>
      </table>
    </div>
  );
}
