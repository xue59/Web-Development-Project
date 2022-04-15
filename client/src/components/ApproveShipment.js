import React from 'react'

export default function ApproveShipment() {
  return (
  <>
    <h1>Approve a shipment</h1>
    <table className="table table-striped" style={{ marginTop: 5, border: 1, width: "100%" }}>
        <thead>
            <tr>
                <th>Shipment No.</th>
                <th>Origon:</th>
                <th>Tracking No.</th>
                <th>Cur. Location</th>
                <th>Status</th>
                <th>Action: (Approve / Reject)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Inter123123</td>
                <td>West Warehouse</td>
                <td>Fedex406260344009</td>
                <td>Seattle, WA</td>
                <td>Approved</td>
                <td>
                    <a href='#'>Approve/Reject</a>
                    <br></br>
                    <a href='#'>View Detail </a>
                </td>
            </tr>
        </tbody>
     </table>
  </>
    
  )
}
