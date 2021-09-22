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
		return result;
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
		return result;
	},
	listall: async function () {
		result = await utility.callget(func, this.secret);
		return result;
	},
	disable: async function (id) {
		result = await utility.callpost(func+'/'+id+'/disable', this.secret, payload);
		return result;
	},
	enable: async function (id) {
		result = await utility.callpost(func+'/'+id+'/enable', this.secret, payload);
		return result;
	},
	get: async function (id) {
		result = await utility.callget(func+'/'+id, this.secret, id);
		return result;
	}
}