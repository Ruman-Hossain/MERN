var billGates = {shirt:true, shirtColor:"off White",smile:true,sweater:true,sweaterColor:"Gray"};

//console.log(billGates.shirtColor);

var billGatesPro = {
    shirt:{
        color:"Off White",
        quality: "Good",
        price: "200USD"
    },
    sweater:{
        color:"Gray",
        quality:"Good",
        price: "230USD",
        warm: "best"
    },
    face:{
        smiling: "Yes",
        chosma : "Yes",
        teeth : "White Big"
    }
}
console.log(billGatesPro.shirt.price);
console.log(billGatesPro['face']['smiling']);