exports.mongopay = function(secret) {
	var PaymentMethod = require('./src/PaymentMethod');
	var PaymentIntent = require('./src/PaymentIntent');
	var Source = require('./src/Source');
	var Payments = require('./src/Payments');
	var Webhook = require('./src/Webhook');

	/** Setup secret **/
	PaymentMethod.secret = secret;
	PaymentIntent.secret = secret;
	Source.secret = secret;
	Payments.secret = secret;
	Webhook.secret = secret;
}