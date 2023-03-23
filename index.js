// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push("Ralph"); //.push adds cat 'Ralph' to the end destructively 
    console.log(cats);
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob"); //.unshift adds 'Bob' to the beginning destructively
    console.log(cats);
}

function destructivelyRemoveLastCat(name) {
    cats.pop(); //.pop removes last cat destructively 
    console.log(cats);
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(); // .shift removes first cat destructively 
    console.log(cats);
}

function appendCat(name) {
    const newName =[...cats, "Broom"]; //used the spread operator to add a new cat nondestructively to the end of the original array
    return newName;
}

function prependCat(name) {
    const newName = ["Arnold", ...cats]; // used the spread operator to make a copy of original array and add a new cat to the beginning of the new array
    return newName;
}

function removeLastCat(){
    const newCats = cats.slice(0, cats.length - 1); //.slice is nondestructive way to remove the last cat 
    return newCats;
}

function removeFirstCat() {
    const newCats = cats.slice(1); //nondestructive way to remove the first cat 
    return newCats;
}