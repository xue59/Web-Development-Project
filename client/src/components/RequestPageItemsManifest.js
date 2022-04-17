import React from 'react'
import { useState } from "react";

export default function RequestPageItemsManifest() {
  const [newItemList,setNewItemList] = useState([])
  const [displayForm, setDisplayForm] = useState(true);
  const [newItem, setNewItem] = useState({
    newItemName: "",
    currentQuantiry: 0,
    requestAmount: 0
  })

  const createRow = () => {
    setNewItemList([...newItemList,{...newItem}]);
    setNewItem({
        newItemName: "",
        currentQuantiry: 0,
        requestAmount: 0
    });
    setDisplayForm(false);
  };

  const handleOnChange = e => {
    setNewItem({
      ...newItem,
      [e.target.name]: e.target.value
    });
  };

//   function addARow(){
//     //   console.log("add a row clicked!")
//     setNewItemList([...newItemList, 
//         {
//             newItemName: "",
//             currentQuantiry: 0,
//             requestAmount: 0 
//         }
//       ])
//       return 
//   }

function removeLastRow(){
    // console.log("remove last roll clicked!")
    newItemList.pop()
    setNewItemList([...newItemList])
    return
}

// function itemNameChanged(index){
//     console.log(index,"input changed")
// }

  return (
    <>
     <table className="table table-striped" style={{ marginTop: 5, border: 1, width: "100%" }}>
        <thead>
            <tr>
                <th>Item Name:</th>
                <th>Quantity</th>
                <th>Request amount</th>
            </tr>
        </thead>
        <tbody>
            {newItemList.map((row,index) => (
            <tr>
              <td>
                  <input class="form-control" type="text" value={row.newItemName} readOnly = {true}></input>
              </td>
              <td>{row.currentQuantiry}</td>
              <td>
                  <input class="form-control" type="text" value={row.requestAmount} readOnly = {true}></input>
              </td>
              <td>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="green" class="bi bi-check-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                </svg>
              </td>
            </tr>
            ))}
        </tbody>
     </table>
    {/* 展示当前输入框 */}
     {displayForm ? (
        <div>
          <table className="table table-striped" style={{border: 1, width: "100%" }}>
          <tbody>
            <tr>
              <td>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="newItemName"
                    onChange={handleOnChange}
                    name="newItemName"/>
                </td>
              <td>Q</td>
              <td>       
                  <input
                    type="text"
                    class="form-control"
                    placeholder="requestAmount"
                    onChange={handleOnChange}
                    name="requestAmount"/>
                </td>
                <td>
                    <a onClick={removeLastRow} className="confirm" href='#'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                        </svg> 
                    </a>               
                </td>
            </tr>
          </tbody></table>
          <button onClick={createRow} className="confirm">
            Confirm
          </button>
        </div>
      ) : (
        <button onClick={() => setDisplayForm(!displayForm)} className="addRow">
          Add an item
        </button>
      )} 
    </>
  )
}
