/* IMPORT REQUIRED MODULEs */
/*********************************************/
var signin_routes = require('./signin_routes');
var signup_routes = require('./signup_routes');
var home_routes = require('./home_routes');

var directory_table = {
	signin : "/../../web-pages/signin.html",
	signup : "/../../web-pages/signup.html",
	home : "/../../web-pages/customer-view/home.html",
	cart : "/../../web-pages/customer-view/cart.html"
}



/* REQUEST-ROUTING TABLE */
/*********************************************/
exports.start_listening = function(server, database)
{
	signin_routes.handle_routes(server, database, directory_table);
	signup_routes.handle_routes(server, database, directory_table);
	home_routes.handle_routes(server, database, directory_table);
}



















