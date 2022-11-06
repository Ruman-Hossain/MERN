import { realEstateData } from "./data.js";

realEstateData.map((item,i)=>{
    console.log(`${i+1}. ${item.Owner} owns ${item.Lot_Size} Square feet Lot Area which is located at ${item.Address}, ${item.Borough} is a ${item.Type} property`);
})
