import React, { Component, useState, useEffect} from 'react';
import { useNavigate } from "react-router";
import Select from 'react-select';
import getInventory from './getInventory'
//import RequestPageItemsManifest from './RequestPageItemsManifest';
const SERVER_URL = process.env.REACT_APP_SERVER_URL;


async function selectionRangeNameId(){
  //return a list of : [{label: 'book', value: '625cba79458bd67e31e2f7ba'}]
  //  _id = value   label = ItemName 
  let returnList = []
  const inputObject = (await getInventory())[0]
  for(let key in inputObject ){
    returnList.push({ label: inputObject[key], value: key })
  }
  return(returnList)
}

async function return_dictIdCurrenQuantity(){
  let returnDict = {}
  const inputObject = (await getInventory())[1]
  for(let key in inputObject ){
    returnDict[key] = inputObject[key]
  }
  return(returnDict)
}

export default function RequestAShipment() {

  const [state, setState] = useState(
    {
      receiverName:'',
      phoneNumber : '',
      email: '',
      subTeams :'',
      region :'',
      expDeliverDate :'',

      street : '',
      address2 : '',
      province : '',
      city : '',
      postcode : '',   
      manifestList:{}  // 这个为记录所需物品清单table

    }
  )
const navigate = useNavigate();

useEffect (()=>{ //用useEffect调用当前state 进行fetch给后端
  if (state.receiverName!==''){
  try {
     fetch(`${SERVER_URL}/shipmentRequest/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    })
     console.log("Fetch stated",state)
    navigate("/approveShipment");
  } catch(err){
    console.log(err)
  }}
})

async function updateState(event){
  event.preventDefault()//避免刷新页面不能删除
  try {
    await setState({ //必须await
      receiverName :  event.target.receiverName.value,
      phoneNumber :  event.target.phoneNumber.value,
      email :   event.target.email.value,
      subTeams :  event.target.subTeams.value,
      region :  event.target.region.value,
      expDeliverDate:  event.target.expDeliverDate.value,

      street :   event.target.street.value,
      address2 :   event.target.address2.value,
      province :   event.target.province.value,
      city :   event.target.city.value,
      postcode :   event.target.postcode.value,
      manifestList: newItemList
    });
  } catch(err){
    console.log(err)
  }
}

// ================================清单表======================================================
const [newItemList,setNewItemList] = useState([])
const [displayForm, setDisplayForm] = useState(true);
const [newItem, setNewItem] = useState({
  newitemId : "",
  newItemName: "",
  currentQuantiry: 0,
  requestAmount: 0
})

const [selectionRange, setRange] = useState([])
const [dictIdCurrenQuantity, setDict] = useState({})


useEffect( ()=>{
  async function fetchRangeData(setRange){
      setRange(await  selectionRangeNameId())
  }
  fetchRangeData(setRange);

  async function fetchQuantityData(setDict){
    setDict(await  return_dictIdCurrenQuantity())
  }
  fetchQuantityData(setDict);
  console.log("Effect print",selectionRange)
}, [newItemList])

const createRow = () => {
  setNewItemList([...newItemList,{...newItem}]);
  setNewItem({
      newitemId : "",
      newItemName: "",
      currentQuantiry: 0,
      requestAmount: 0
  });
  setDisplayForm(false)

};

const handleOnChange = e => {
  setNewItem({
    ...newItem,
    [e.target.name]: e.target.value,
    currentQuantiry : dictIdCurrenQuantity[newItem.newitemId]
  });
};

function removeLastRow(){
  newItemList.pop()
  setNewItemList([...newItemList])
  return
}



// // =============================以上为清单表=^^^^^=====================================================

    return (
      <>
        <h3>Start a new shipment request</h3>
        <div>
        <form onSubmit={(e)=> updateState(e)}>
        <div className="containter">
          {/* 第1行 */}
          <div className="row">
            <div className="col-sm">
              <label htmlFor="receiverName">receiverName:</label>
              <input type="text" className="form-control"id="receiverName"/>
            </div>
            <div className="col-sm">
              <label htmlFor="phoneNumber">phoneNumber:</label>
              <input type="text" className="form-control"id="phoneNumber"/>
            </div>
          </div>

          {/* 第2行 */}
          <div className="row">
            <div className="col-sm">
              <label htmlFor="email">email:</label>
              <input type="text" className="form-control"id="email" />
            </div>
            <div className="col-sm">
              <label htmlFor="subTeams">subTeams:</label>
              <input type="text" className="form-control"id="subTeams" />
            </div>
          </div>

          {/* 第3行 */}
          <div className="row">
            <div className="col-sm">
             <label htmlFor="region">region:</label>
             <select className="form-select" id="region" >
                <option selected>Select your region</option>
                <option value="west">West</option>
                <option value="middle">Middle</option>
                <option value="east">East</option>
              </select>
            </div>
            <div className="col-sm">
              <label htmlFor="expDeliverDate">Expected Deliver Date:</label>
              <input type="text" className="form-control" id="expDeliverDate" />
            </div>
          </div>
          <div className="row"><br></br></div>
          {/* Address */}
          <div className="row">
            <div className="col-sm">
              <label htmlFor="street">Street Address1:</label>
              <input className="form-control" id="street" type="text" placeholder="Street address" />
            </div>
            <div className="col-sm">
              <label htmlFor="address2">Address2(Room/APT/Suit):</label>
              <input className="form-control" id="address2" type="text" placeholder="Address2(Room/APT/Suit)"  />
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <label htmlFor="province">Province:</label>
              <input className="form-control" id="province" type="text" placeholder="State/Province" />
            </div>
            <div className="col-sm">
              <label htmlFor="city">City:</label>
              <input className="form-control" id="city" type="text" placeholder="city" />
            </div>
            <div className="col-sm">
              <label htmlFor="postcode">Postcode:</label>
              <input className="form-control"  id="postcode" type="text" placeholder="Zip/Postcode" />
            </div>
          </div>
          
          <div className="row"><br></br></div>{/* Bank line */}
          <div className="row"><p><u>Items manifest:</u></p></div>
          {/* 第五行输入框 */}
          {/* {RequestPageItemsManifest()} */}
          <div>
            <div>
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
                          <input className="form-control" type="text" value={row.newItemName} readOnly = {true}></input>
                      </td>
                      <td>{dictIdCurrenQuantity[row.newitemId]}</td>
                      <td>
                          <input className="form-control" type="text" value={row.requestAmount} readOnly = {true}></input>
                      </td>
                      <td>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="green" className="bi bi-check-circle" viewBox="0 0 16 16">
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
                          {/* <input
                            type="text"
                            className="form-control"
                            placeholder="newItemName"
                            onChange={handleOnChange}
                            name="newItemName"/> */}
                          <Select
                            options={selectionRange}
                            type="text"
                            className="form-control"
                            placeholder="newItemName"
                            name="newItemName"
                            onChange={(opt) => {setNewItem({ newItemName : opt.label , newitemId: opt.value})}}
                          />

                        </td>
                      <td>{dictIdCurrenQuantity[newItem.newitemId]}</td>
                      <td>       
                          <input
                            type="text"
                            className="form-control"
                            placeholder="requestAmount"
                            onChange={handleOnChange}
                            name="requestAmount"/>
                        </td>
                        <td>
                            <a onClick={removeLastRow} className="confirm" href='#'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" className="bi bi-trash3-fill" viewBox="0 0 16 16">
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
            </div>
          </div>
        
        </div> {/* Container End */} 

        {/* Submit 按钮 */}
        <div className="row"><br></br></div>
        <div className="row"><br></br></div>
        <input className="btn btn-primary" type='submit' value='Submit shipment request' />
      </form>
      </div>
      </>

    );
  }
