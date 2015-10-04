exports.greet = function () { // object mutation, maintains ref to module.exports object 
	console.log('Hello World!');
};

console.log(exports);
console.log(module.exports);
