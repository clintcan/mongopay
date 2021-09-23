exports.default = {
	secret: null,
	PaymentMethod: null,
	PaymentIntent: null,
	Source: null,
	Payments: null,
	Webhook: null,
	PaymentMethod: require('./src/PaymentMethod'),
	PaymentIntent: require('./src/PaymentIntent'),
	Source: require('./src/Source'),
	Payments: require('./src/Payments'),
	Webhook: require('./src/Webhook'),
	init: function(secret) {
		this.secret = secret;
		this.PaymentMethod.secret = secret;
		this.PaymentIntent.secret = secret;
		this.Source.secret = secret;
		this.Webhook.secret = secret;
	},
}


// exports.mongopay = function(secret) {

// 	var module = {};

// 	exports.PaymentMethod = require('./src/PaymentMethod');
// 	exports.PaymentIntent = require('./src/PaymentIntent');
// 	exports.Source = require('./src/Source');
// 	exports.Payments = require('./src/Payments');
// 	exports.Webhook = require('./src/Webhook');

// 	/** Setup secret **/
// 	exports.PaymentMethod.secret = secret;
// 	exports.PaymentIntent.secret = secret;
// 	exports.Source.secret = secret;
// 	exports.Payments.secret = secret;
// 	exports.Webhook.secret = secret;
// }