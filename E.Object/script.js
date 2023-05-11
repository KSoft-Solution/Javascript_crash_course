// const obj = {}//object
// let obj1 = new Object();
// function obj_s(){

// }
// let obj3 = new obj_s()
// class Obj4{

// }
// let obj4 = new Obj4()

// console.log(typeof obj)
// console.log(typeof obj1)
// console.log(typeof obj3)
// console.log(typeof obj4)
// console.log(typeof obj_s)

// obj.name ='ashok'
// obj.class = 'msc.'
// console.log({obj})

// const car = {
//   name: "tata nexon",
//   weight: "1 ton",
//   color: "dark",
//   manufactureyear: 2020,
// };

// console.log(car);

// const car1 = new Object({
//   name: "tata nexon",
//   weight: "1 ton",
//   color: "dark",
//   manufactureyear: 2020,
// });

// console.log(car1);

// function cars(name, weight, color, manufacture) {
//   (this.name = name),
//     (this.weight = weight),
//     (this.color = color),
//     (this.manufactureyear = manufacture);
// }

// const car3 = new cars("tata nexon", "1ton", "red", "2020");

// console.log(car3);

let obj = {
  name: "ashok",
  getJob: function (name) {
    return this.name;
    // return name
  },
};
// console.log(obj);
// console.log(typeof obj);

// console.log(obj.name)
// console.log(obj.getJob())
// console.log(obj.getJob('ashok sahu'))
// console.log(obj['name'])

// for(let objValues in obj){
//     console.log(objValues)
// }
// for(let objValues of [1,8]){
//     console.log(objValues)
// }

// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.getOwnPropertyNames(obj))

// console.log(_.keys(obj))
// console.log(_.values(obj))

// console.log("name" in obj);
// console.log("name" in obj);

// console.log("getJobs" in obj);
// console.log("names" in obj);

// console.log(obj)
// delete obj.name
// console.log("name" in obj);
// console.log(obj)

console.log(Object.entries(obj));
console.log(_.entries(obj))
