const utility = require('./utility');
const func = 'payment_methods';

module.exports = {
	create: async function (cardnumber, expiry_month, expiry_year, cvc, billing, type = 'card') {
		var payload = {
			data: {
				attributes: {
					type: type,
					details: {
						card_number: cardnumber,
						exp_month: expiry_month,
						exp_year: expiry_year,
						cvc: cvc
					}
				}
			}
		};
		if(billing) {
			payload.data.attributes.billing = billing; // set billing attributes
		}
		result = await utility.callpost(func, this.secret, payload);
		return result.data;
	},
	get: async function (id) {
		result = await utility.callget(func, this.secret, id);
		return result.data;
	}
}