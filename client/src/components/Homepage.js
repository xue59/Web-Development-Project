import React from 'react'
import "../stylesheet/Homepage.css";

export default function Homepage() {
  return (
    <div>
        <h1>Welcome to this inventory management system!</h1>
        <p>Please follow the left menue to navgiate your needs:</p>
        <ol>
            <li><u>Show Inventory</u> provides a table of all the items in the current inventory.</li>
            <li><u>Creat Items</u> lets you to establish a new item into the warehouse. <b>Login required</b></li>
            <li><u>Search Items</u> lets you find a specific item in the inventory.</li>
            <li><u>Request Shipment</u> lets you submit a request for the items you need. <b>Login required</b></li>
            <li><u>View Records</u> shows requests record for audit purpose. <b>Login required</b></li>
        </ol>
        <img src='inventory1.png' alt="picture demo a worker in a warehouse"></img>
    </div>
  )
}
