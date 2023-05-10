function milesToKilometer(miles){
    const kilometer = miles * 1.609;
    return kilometer;
}

const mile = 144;
const kim = milesToKilometer(mile);
console.log(kim);