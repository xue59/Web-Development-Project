import React, { Component } from 'react';

export default function AutoComplete() {
  return (
  <div>
    <h3>AutoComplete Start a new shipment request</h3>
    <input className="AutoComplete__field" id="street" type="text" placeholder="11Street address"/>
    <input className="AutoComplete__field" id="city" type="text" placeholder="City"/>
    <input className="AutoComplete__field" id="province" type="text" placeholder="State/Province"/>
    <input className="AutoComplete__field" id="country" type="text" placeholder="Country"/>
    <input className="AutoComplete__field" id="postcode" type="text" placeholder="Zip/Postcode"/>
  </div>
)}


