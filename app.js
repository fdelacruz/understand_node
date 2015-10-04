var Greet1 = require('./greet1');
Greet1();

var Greet2 = require('./greet2').greet;
Greet2();

var Greet3 = require('./greet3');
Greet3.greet();
Greet3.greeting = 'Changed Hello World!';

var Greet3b = require('./greet3');
Greet3b.greet();

var Greet4 = require('./greet4');
var grtr = new Greet4();
grtr.greet();

var Greet5 = require('./greet5').greet;
Greet5();

