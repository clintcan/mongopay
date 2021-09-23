const utility = require('./utility');
const func = 'sources';

module.exports = {
	create: async function (type = 'gcash', amount, currency = 'PHP', redirect_success, redirect_failure, billing) {
		var payload = {
			data: {
				attributes: {
					type: type,
					amount: amount,
					currency: currency,
					redirect: {
						success: redirect_success,
						failed: redirect_failure
					}
				}
			}
		};
		if(billing) {
			payload.data.attributes.billing = billing;
		}
		result = await utility.callpost(func, this.secret, payload);
		return result.data;
	},
	get: async function (id) {
		result = await utility.callget(func+'/'+id, this.secret, id);
		return result.data;
	}
}