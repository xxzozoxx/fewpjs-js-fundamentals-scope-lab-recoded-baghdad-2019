let animal = "cat";

function myAnimal() {
    let myanimal = "cat";
    return myanimal;
}

function yourAnimal() {
    // How can we make sure that this function
    // and the above function both pass?
    // P.S.: You can't just hard-code 'cat' below
let youranimal = myanimal();
    return youranimal;
}

function add2(n) {
    const two = 2;
    return n + two

    // Feel free to move things around!

}