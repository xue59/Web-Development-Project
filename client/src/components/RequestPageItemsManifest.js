import React from 'react'

export default function RequestPageItemsManifest() {
  return (
    <>
     <table className="table table-striped" style={{ marginTop: 5, border: 1, width: "100%" }}>
        <thead>
            <tr>
                <th>Item Name:</th>
                <th>Preview</th>
                <th>Quantity</th>
                <th>Subteam</th>
                <th>Request amount</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>11</td>
                <td>22</td>
                <td>33</td>
                <td>44</td>
                <td>55</td>
            </tr>
        </tbody>
     </table>
     <div>
         <button>Add an item</button>
     </div>
       
    </>
  )
}
