'use strict';

const Hapi = require('hapi');
const Inert = require('inert');

const server =  new Hapi.Server();

const plugins = [Inert];

server.connection({
	host: '0.0.0.0',
  	port: process.env.PORT || 8080
});

server.register(plugins, (err) => {
	if (err) {
		console.log(err);
	}

	// Start the server
	server.start((err) => {

		if (err) {
			throw err;
		}
		console.log('Server running at:', server.info.uri);

		server.route({
			method: 'GET',
			path: '/{param*}',
			handler: {
				directory: {
					path: 'app/build'
				}
			}
		});
	});
});