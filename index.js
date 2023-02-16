console.log('Hello World');
// Object
const circle = {
    radius: 1,
    location: {
        x:1,
        y:1
    },
    draw: function(){
        console.log('draw')
    }
};

circle.draw();

// Factory Functions
function createCircle(rad){
    return{
        radius: rad,
        drraw: function(){
            console.log('DRAW');
        }
    };
}
const ciircle = createCircle(1);
ciircle.drraw();

// Constructor Function
function Circle(radius){
    this.radius = radius;
    this.draww = function(){
        console.log('Draw');
    }
}
const another = new Circle(10);
another.draww();


//Arrays

let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
console.log(selectedColors);
console.log(selectedColors[0]);
console.log(selectedColors.length)

//Functions

function greet(name, lastName){
    console.log('Hello ' + name + ' ' + lastName);
}
greet('John', 'Smith');
greet('Mary');

//Strings

//String primitive
const message = 'This is my first message';

//String Object
const Another = new String();

//If and Else
;
let hour = 20;
if(hour >= 6 && hour < 12){
    console.log('Good morning');
}
else if(hour >= 12 && hour < 18){
    console.log('Good afternoon');
}
else{
    console.log('Good evening');
}

//Loops

//For
for(let i = 0; i < 5; i++){
    console.log('Hiiii', i);
}

//Factory Fuunction

function createcircle(radius){
    return{
        radius,
        draw(){
            console.log('draw');
        }
    };
}

const circle1 = createcircle(1);
console.log(circle1);

const circle2 = createcircle(2);
console.log(circle2);

//Constructor Function
 
function Circlee(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}
const circlee = new Circlee(1);

//Getters and Setters

const person = {
    firstName: 'Mayuri',
    lastName: 'Mahto',
    get fullName(){
        return `${person.firstName} ${person.lastName}`;
    },
    set fullName(value){
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};
person.fullName = 'John Smith';
console.log(person);

//Cloning an Object
//video se dekh lena

//this keyword
// method-> object
// function-> global(window, global)
const video = {
    title: 'a',
    play(){
        console.log(this);
    }
};

function Video(title){
    this.title = title;
    console.log(this);
}
const v = new Video('b');

const videoo = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags(){
        this.tags.forEach(function(tag){
            console.log(tag)
        }, this);
    }
};

videoo.showTags();

//Literals

//Object {}
//Boolean true, false
//String '', ""
//Template ``

const name = 'John';

const anotherr =
`hi ${name} ${2+3}`

//Array Filter and Mapping
const numbers = [1,-1,2,3];

const items = numbers
    .filter(number => number >= 0);
    //.map(n => ({ value: n }));
console.log(numbers);

//Array Reduce

//let sum=0;
//for (let n of munbers)
    //sum+= n;

//console.log(sum);

//Reduced

// a=0, c=1, a=1
// a=1, c=-1, a=0
// a=0, c=2, a=2
// a=2, c=3, a=5
let sum=0;
numbers.reduce((accumulator, currentValue) =>{
    return accumulator + currentValue;
}, 0);

console.log(sum);