/* urlClass.js
Using node.js url library write own Url class that contains:
--- constructor that takes http-string;
--- getScheme() method - returns protocol without ':'
--- getHostName() method - returns host name
--- getQueryParams() method - returns query params as an object {key: value, key1: value1 ...}
--- getQueryParam(key) method - returns a value of the argumented key of the query parameters;
--- equals(url) - takes another Url class object and returns if they are equal with the current Url.
 */

class Url {
  constructor(http) {
    this.data = new URL(http)
  }
  getScheme() {
    return this.data.protocol.slice(0, -1)
  }
  getHostName() {
    return this.data.hostname
  }
  getQueryParams() {
    const queries = this.data.searchParams;
    console.log(queries)
    let res = {};
    queries.forEach((value, key) => res[key] = value)
    return res;
  }
  getQueryParam(key, value = null) {
    let queries = this.getQueryParams()
    return queries[key] || value;
  }
  equals(otherUrl) {
    return otherUrl.data.href === this.data.href;
  }
}

const myurl = new Url("http://google.com:30?key=value&key2=value2");
console.log(myurl.getScheme())
console.log(myurl.getHostName())
console.log(myurl.getQueryParams())
console.log(myurl.getQueryParam('key'))
console.log(myurl.equals(new Url("http://google.com:30?key=value&key2=value2")))
console.log(myurl.equals(new Url("http://google.com:40?key=value&key3=value3")))

