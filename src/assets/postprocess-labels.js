const labels = ["Audi", "Bmw", "Toyota", "Tesla"];
const axis = 0;
var index = data.argMax(axis).dataSync();
console.log(labels[index]);
