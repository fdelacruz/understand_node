var greeting = 'Hello World!!!';

function greet() {
	console.log(greeting);
}

// revealing module pattern
module.exports = {
	greet: greet
};
