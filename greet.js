exports = function () { // object override, brakes ref to module.exports
	console.log('Hello World!');
};

console.log(exports);
console.log(module.exports);
