function ClozeCard(text, cloze) {
	this.text = text;
	this.cloze = cloze;
}

var pet = new ClozeCard("What is your favorite pet?", "Dog");

console.log(pet.text);
console.log(pet.cloze);

var inquirer = require("inquirer");

function Pet(name, bread, age) {
	this.name = name;
	this.bread = bread;
	this.age = age
}

Pet.prototype.printInfo = function() {
	console.log("Name :" + this.name + "\nBread :" + this.bread + "\nAge :" + "this.age");
};

inquirer.prompt([
	{ 
		name: "name",
		message: "What is your pet name?"

	}, {
		name: "bread",
		message: "What is your pet bread?"

	}, {	
		name: "age",
		message: "How young is your pet?"

	}

	]).then(function(answers) {
		var newPet = new Pet(answers.name, answers.bread, answers.age);

		newPet.printInfo();
});

