const utility = require('./utility');
const func = 'payments';

module.exports = {
	create: async function (amount, id, currency='PHP', type = 'source') {
		var payload = {
		  data: {
		    attributes: {
		      amount: amount,
		      currency: currency,
		      source: {
		        id: id, // Id of the Source resource.
		        type: type, // 
		      }
		    }
		  }
		};
		result = await utility.callpost(func, this.secret, payload);
		if(result.errors) {
			return result; 
		} else {
			return result.data;
		}
	},
	get: async function (id) {
		result = await utility.callget(func, this.secret, id);
		if(result.errors) {
			return result; 
		} else {
			return result.data;
		}
	},
	listall: async function(limit = 10, before, after) {
		query = '?limit='+limit;
		if(before) {
			query = query+'&before='+before;
		}
		if(after) {
			query = query+'&after='+after;
		}
		result = await utility.callget(func, this.secret, id, query);
		if(result.errors) {
			return result; 
		} else {
			return result.data;
		}
	}
}