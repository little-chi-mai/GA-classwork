// `this` lets us access the current object (from inside a method) withour needing to know the name of the variable containing the object

const groucho = {
  fullname: 'Groucho Marx',
  greeting() {
    return 'Good evening, my name is ' + this.fullname; // self
  }
};

console.log( 'method', groucho.greeting() );

// What if we remove the method from the object?
const unboundGreeting = groucho.greeting;
console.log('function/undbound', unboundGreeting());

// bind() /////////////////////////////////
const boundGreeting = groucho.greeting.bind(groucho); // permanent connection with groucho
console.log('function/bound', boundGreeting()); // can see full name

const otherGreeting = groucho.greeting.bind({fullname: 'Harpo Marx', residence: 'NYC'});
console.log('function/bound to a different object', otherGreeting());

// call() ///////////////////////////////////
console.log(unboundGreeting.call(groucho)); // one time thing
console.log(unboundGreeting.call({fullname: 'Mai xinh'})); // one time thing


// apply() /////////////////////////////////
console.log(unboundGreeting.apply(groucho));

const numbers = [99,  88, 77, 66];

Math.max(numbers); //NaN

//Old fix:
Math.max.apply(Math, numbers);

// New fix ES6:
Math.max(...numbers)
