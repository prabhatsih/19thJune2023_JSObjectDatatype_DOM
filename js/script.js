let car = {
    //1. P:V (Many)
    brand:"TATA",
    year:2023,
    model:"Harrier",
    color:'Black',
    type:'SUV',
    engine:'EV/Petrol/Diesel',
    Price:2000000,

    //2. Functions (Many)
    getFullDetail(){
        //Every function return something
        return this.brand+" "+this.year+" "+ this.model;
    }
}

let car2 = {
    //1. P:V (Many)
    brand:"Mahindra",
    year:2022,
    model:"Thar",
    color:'Black',
    type:'Gypsy',
    engine:`Diesel`,
    Price:4000000,

    //2. Functions (Many)
}

const car3 = {
    //1. P:V (Many)
    brand:"Hundai",
    year:2023,
    model:"Verna",
    color:'White',
    type:'Sedan',
    engine:'Petrol',
    Price:1600000,

    //2. Functions (Many)
}

console.log(car.getFullDetail());


//Accessing Object Properties
//* There are three way to access JS Object Property
//1. objectName.propertyName
//2. objectName['propertyName']
//3. objectName[expesssion]

console.log(car.brand); //object.property
console.log(car2["brand"]); //object["property"]
console.log(car2['brand']); //object["property"]
let x = "brand"
console.log(car3[x]); //object[expression]
console.log(car[x]); //object[expression]