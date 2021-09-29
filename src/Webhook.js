const utility = require('./utility');
const func = 'webhooks';

module.exports = {
	create: async function (url, events=['payment.paid','source.chargeable','payment.failed']) {
		var payload = {
			data: {
				attributes: {
					url: url,
					events: events
				}
			}
		};
		result = await utility.callpost(func, this.secret, payload);
		return result.data;
	},
	update: async function (id, url, events=['payment.paid','source.chargeable','payment.failed']) {
		var payload = {
			data: {
				attributes: {
					url: url,
					events: events
				}
			}
		};
		result = await utility.callput(func+'/'+id, this.secret, payload);
		return result.data;
	},
	listall: async function () {
		result = await utility.callget(func, this.secret);
		return result.data;
	},
	disable: async function (id) {
		result = await utility.callpost(func+'/'+id+'/disable', this.secret, payload);
		return result.data;
	},
	enable: async function (id) {
		result = await utility.callpost(func+'/'+id+'/enable', this.secret, payload);
		return result.data;
	},
	get: async function (id) {
		result = await utility.callget(func, this.secret, id);
		return result.data;
	}
}