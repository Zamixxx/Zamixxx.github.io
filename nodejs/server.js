var user = require('./user');

var vasya = new user.User("vas");
var petya = new user.User("pet");

vasya.hello(petya);