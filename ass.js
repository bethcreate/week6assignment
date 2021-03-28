var fruits = {
    firstFruit: "Banana",
    secondFruit: "Orange"
}
function kiosk(firstFruit , secondFruit) {
    return `${firstFruit} ${secondFruit}';
}
let result = kiosk.apply(fruits, ["Banana", "Orange"]);

console.log;