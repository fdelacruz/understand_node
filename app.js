var Util = require('util');

var name = 'Francisco';
var greeting = Util.format('Hello, %s', name);
Util.log(greeting);
