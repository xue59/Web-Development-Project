import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Shipment = (props) => (
  <tr>
    <td>{props.shipment._id}</td>
    <td>{props.shipment.receiverName}</td>
    <td>{props.shipment.phoneNumber}</td>
    <td>{props.shipment.email}</td>
    <td>{props.shipment.subTeams}</td>
    <td>{props.shipment.region}</td>
    <td>{props.shipment.expDeliverDate}</td>
    <td>
     <button className="btn btn-link"
       onClick={() => {
         props.deleteShipment(props.shipment._id);
       }}
     >
       Delete
     </button>
     <Link className="btn btn-link" to={`/shipmentDetails/${props.shipment._id}`}>View</Link> 
   </td>
  </tr>
);

export default function ShipmentList() {
    
  const [shipments, setShipments] = useState([]);

  // This method fetches the records from the database.
  useEffect(() => {
    async function getShipments() {
      const response = await fetch(`${SERVER_URL}/shipmentRequest/`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const shipments = await response.json();
      setShipments(shipments);
    }

    getShipments();

    return;
  }, [shipments.length]);

  // This method will delete a record
  async function deleteShipment(id) {
    await fetch(`${SERVER_URL}/shipmentRequest/delete/${id}`, {
      method: "DELETE",
    });

    const newShipments = shipments.filter((el) => el._id !== id);
    setShipments(newShipments);
  }

  // This method will map out the records on the table
  function shipmentList() {
    return shipments.map((shipment) => {
      return (
        <Shipment
          shipment={shipment}
          deleteShipment={() => deleteShipment(shipment._id)}
          key={shipment._id}
        />
      );
    });
  }

  // This following section will display the table with the records of individuals.
  return (
    <div>
      <h3>Requested Shippments</h3>
      <table
        className="table table-striped"
        style={{ marginTop: 20, border: 1, width: "100%" }}
      >
        <thead>
          <tr className="inventory-table-head">
            <th>ID:</th>
            <th>receiverName:</th>
            <th>phoneNumber:</th>
            <th>email:</th>
            <th>subTeams:</th>
            <th>region:</th>
            <th>expDeliverDate:</th>
            <th>Actions: </th>
          </tr>
        </thead>
        <tbody>{shipmentList()}</tbody>
      </table>
    </div>
  );
}
