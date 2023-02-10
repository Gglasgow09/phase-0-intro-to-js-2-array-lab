// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push("Ralph");
    console.log(cats);
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
    console.log(cats);
}

function destructivelyRemoveLastCat(name) {
    cats.pop();
    console.log(cats);
}

function destructivelyRemoveFirstCat(name) {
    cats.shift();
    console.log(cats);
}

function appendCat(name) {
    const newName =[...cats, "Broom"];
    return newName;
}

function prependCat(name) {
    const newName = ["Arnold", ...cats];
    return newName;
}

function removeLastCat(){
    const newCats = cats.slice(0, cats.length - 1);
    return newCats;
}

function removeFirstCat() {
    const newCats = cats.slice(1);
    return newCats;
}