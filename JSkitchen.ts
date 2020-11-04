let person: string = "hunter"  //my name as value

const states: number = 50  // number of states in US, is Constant

let compute: number = 5 + 4;  // do math through JS

function sayHello () {
    alert ('Hello World!');
}

sayHello();

function checkAge(name, age){
    console.log('Hello ' + name + ' ' + age);
    if (age > 21){
        alert("Sorry" + name + ", you aren't old enough to view this page!");  
       }
}


checkAge('Charles',21);
checkAge('Abby',27);
checkAge('James',18);
checkAge('John',17);

//typing objects:
// let chirp: {name: string, text: string} = {name: 'Jake', text: 'my back hurts'}

let vegtables: string[] = ["potatoes", "sweet potatoes", "nothing else bc im very unhealthy"]

for (let i = 0; i < vegtables.length; i++) {
    console.log(vegtables[i])
}

let pet: {name: string, breed: string} = {
    name: "Stitch", 
    breed: "Different"
}

console.log(pet.name, pet.breed);

let people:  [
    {
        name:"Hunter",
        age:19,
    },
    {
        name:"Woods",
        age:33,
    },
    {
        name:"Mason",
        age:26,
    },
    {
        name:"Hudson",
        age:34,
    },
    {
        name:"Reznov",
        age:53,
    }

];

people[0].name

