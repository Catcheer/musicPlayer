/*
 * @Description:
 * @Author: zhangchuangye
 * @Date: 2020-08-03 10:17:43
 */



export default {
  get(url, data, queryString, repaceData) {
    return this.request("GET", url, data, queryString, repaceData);
  },

  post(url, data, queryString, repaceData) {
    return this.request("POST", url, data, queryString, repaceData);
  },

  deletedFetch(url, data, queryString, repaceData) {
    return this.request("delete", url, data, queryString, repaceData);
  },

  request( method,url = "", data, queryString, repaceData) {
    return window.fetch(url, {
      method: method || "GET", // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
