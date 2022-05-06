const SERVER_URL = process.env.REACT_APP_SERVER_URL;

async function getInventory(){
    try {
        const response = await fetch(`${SERVER_URL}/record/`);
        if (!response.ok) {
            const message = `An error occurred: ${response.statusText}`;
            window.alert(message);
            return;
        }
        const inventory= await response.json()
        let [idItemName, idCurrentQuantity] =[{},{}]
        
        for (let index in inventory){
            idItemName[inventory[index]._id] = inventory[index].itemName
            idCurrentQuantity[inventory[index]._id] = inventory[index].currentQuantity
        }
        return([idItemName, idCurrentQuantity])
    } catch(err){
        console.log(err)
    }
}

export default getInventory;