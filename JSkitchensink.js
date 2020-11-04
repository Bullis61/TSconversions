var person = "hunter"; //my name as value
var states = 50; // number of states in US, is Constant
var compute = 5 + 4; // do math through JS
function sayHello() {
    alert('Hello World!');
}
sayHello();
function checkAge(name, age) {
    console.log('Hello ' + name + ' ' + age);
    if (age > 21) {
        alert("Sorry" + name + ", you aren't old enough to view this page!");
    }
}
checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);
//typing objects:
// let chirp: {name: string, text: string} = {name: 'Jake', text: 'my back hurts'}
var vegtables = ["potatoes", "sweet potatoes", "nothing else bc im very unhealthy"];
for (var i = 0; i < vegtables.length; i++) {
    console.log(vegtables[i]);
}
var pet = {
    name: "Stitch",
    breed: "Different"
};
console.log(pet.name, pet.breed);
var people;
people[0].name;
