const axios = require('axios').default;

const url = 'https://api.paymongo.com/v1/';

function btoa(str) {
  return Buffer.from(str,'binary').toString('base64');
}

module.exports = {
  callpost: async function (func, secret, payload) {
    secret64 = btoa(secret);
    const options = {
      method: 'POST',
      url: url+func,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Basic '+secret64
      },
      data: payload
    };
    try {
      result = await axios(options);
      return result;
    } catch (e) {
      console.dir(e.response.data);
      return false;
    }
  },
  callput: async function (func, secret, payload) {
    secret64 = btoa(secret);
    const options = {
      method: 'PUT',
      url: url+func,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Basic '+secret64
      },
      data: payload
    };
    try {
      result = await axios(options);
      return result;
    } catch (e) {
      console.dir(e.response.data);
      return false;
    }
  },
  callget: async function (func, secret, id, querystring) {
    secret64 = btoa(secret);
    if(querystring) {
      wholeurl = url+func+'/'+id+querystring;
    } else {
      wholeurl = url+func+'/'+id;
    }
    const options = {
      method: 'GET',
      url: wholeurl,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Basic '+secret64
      }
    };
    try {
      result = await axios(options);
      return result;
    } catch (e) {
      console.dir(e.response.data);
      return false;
    }
  }
}