import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export default function Details() {
  const params = useParams();
  console.log(params);

  const [inventory, setInventory] = useState({});

  useEffect(() => {
    async function findInventory() {
      const data = await fetch(`${SERVER_URL}/record/${params.id}`);
      const jsonData = await data.json();
      console.log(jsonData);
      setInventory(jsonData);
      console.log(inventory);
    }
    findInventory();
  }, [params.id]);

  console.log(inventory);

  return (
    <div>
      You are viewing the details of the inventory ID {params.id}
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
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{inventory.itemName}</td>
            <td>{inventory.img}</td>
            <td>{inventory.currentQuantity}</td>
            <td>{inventory.subTeams}</td>
            <td>{inventory.region}</td>
            <td>{inventory.warehouseLocation}</td>
            <td>{inventory.notes}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
