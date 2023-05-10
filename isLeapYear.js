function isLeapYear(year){
    const remainder = year % 4;
    if(remainder === 0){
        console.log('your year is leap year', year);
    }
    else{
        console.log('your year is not leap year', year);
    }

}
isLeapYear(2020);


// // Onno vabe 

function isLeapYear(year){
    const remainder = year % 4;
    if(remainder === 0){
        return true;
    }
    else{
        return false;
    }
}

const myYear = isLeapYear(2020);
console.log('my year:', myYear);

const herYear = isLeapYear(2025);
console.log('her year:', herYear);