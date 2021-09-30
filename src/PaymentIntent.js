const utility = require('./utility');
const func = 'payment_intents';

module.exports = {
	create: async function (amount, currency = 'PHP', payment_method_allowed = ['card'], description, statement_descriptor) {
		var payload = {
			data: {
				attributes: {
					amount: amount,
					payment_method_allowed: payment_method_allowed,
					payment_method_options: {card: {request_three_d_secure: 'any'}},
					currency: currency,
				}
			}
		};
		if(description !== null) {
			payload.data.attributes.description = description;
		}
		if(statement_descriptor !== null) {
			payload.data.attributes.statement_descriptor = statement_descriptor;
		}
		result = await utility.callpost(func, this.secret, payload);
		return result.data;
	},
	attach: async function (id, payment_method, return_url) {
		var payload = {
			data: {
				attributes: {
					payment_method: payment_method,
				}
			}
		}
		if(return_url !== null) {
			payload.data.attributes.return_url = return_url;
		}
		result = await utility.callpost(func+'/'+id, this.secret, payload);
		return result.data;
	},
	get: async function (id) {
		result = await utility.callget(func, this.secret, id);
		return result.data;
	}
}