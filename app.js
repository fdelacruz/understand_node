var EventEmitter = require('events');
var Util = require('util');

function Greetr() {
	this.greeting = 'Hello World!';
}

Util.inherits(Greetr, EventEmitter); // Greetr.prototype = EventEmitter.prototype

Greetr.prototype.greet = function (data) {
	console.log(this.greeting + ': ' + data);
	this.emit('greet', data);
};

var greeter1 = new Greetr();

greeter1.on('greet', function (data) {
	console.log('Someone greeted! ' + data);
});

greeter1.greet('Francisco');
