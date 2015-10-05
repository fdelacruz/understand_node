var obj = {
	name: 'John Doe',
	greet: function () {
		// console.log(`Hello  + ${this.name}`); // Template Literals
		console.log('Hello ' + this.name);
	}
};

obj.greet();
obj.greet.call({ name: 'Jane Doe'}); // 'this' points to a different object
obj.greet.apply({ name: 'Jane Doe'});
