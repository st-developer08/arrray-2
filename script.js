const cars = [
  { brand: "Toyota", model: "Camry", price: 25000 },
  { brand: "BMW", model: "X5", price: 58000 },
  { brand: "Mercedes", model: "E-Class", price: 62000 },
  { brand: "Kia", model: "Sportage", price: 23000 },
  { brand: "Tesla", model: "Model 3", price: 40000 },
  { brand: "Hyundai", model: "Sonata", price: 24000 }
];

let cheap = cars.filter(el => el.price < 35000);

console.log("Cheap cars:");
cheap.forEach((car) => console.log(`${car.brand} ${car.model} цена:${car.price}`)

);




let arr = ['Aleksey', 'Kartoshka', 'Margarita', 'Morgenshtern', 'Monica'];
let index = +prompt("Выберите машину чтобы удалить: " + arr)

if(index < arr.length){
    let del = arr.splice(index, 1);
    alert(del +' удален')
    alert("Новый список: " + arr)
    
}else{
    alert("Такого элемента нет")
}


let arrTwo = [1,2,3,false,"hello",24,'world',undefined,null,'error',22]

let num = arrTwo.filter(el => typeof el === 'number').length

if(num >= 5){
    console.log('гуд');
    
}