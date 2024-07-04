const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const totalBatteries= batteryBatches.reduce(sum)
function sum(element, number){
    return element + number;
}//console.log(totalBatteries)