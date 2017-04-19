function BasicCard(front, back) {

this.front = front;
this.back = back;
}

var language = new BasicCard("what is your favorite language?", "javascript");

console.log(language.front);
console.log(language.back);

