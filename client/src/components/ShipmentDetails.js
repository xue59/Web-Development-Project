import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export default function ShipmentDetails() {
  const params = useParams();
  console.log(params);

  const [inventory, setInventory] = useState({});

  useEffect(() => {
    async function findInventory() {
      const data = await fetch(`${SERVER_URL}/shipmentRequest/${params.id}`);
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
      You are viewing the details of the Shipment ID {params.id}
      <table
        className="table table-striped"
        style={{ marginTop: 20, border: 1, width: "100%" }}
      >
        <thead>
          <tr className="inventory-table-head">
            <th>receiverName:</th>
            <th>phoneNumber:</th>
            <th>email:</th>
            <th>subTeams:</th>
            <th>region:</th>
            <th>expDeliverDate:</th>
            <th>street: </th>
            <th>address2: </th>
            <th>province: </th>
            <th>city: </th>
            <th>postcode: </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{inventory.receiverName}</td>
            <td>{inventory.phoneNumber}</td>
            <td>{inventory.email}</td>
            <td>{inventory.subTeams}</td>
            <td>{inventory.region}</td>
            <td>{inventory.expDeliverDate}</td>
            <td>{inventory.street}</td>
            <td>{inventory.address2}</td>
            <td>{inventory.province}</td>
            <td>{inventory.city}</td>
            <td>{inventory.postcode}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
