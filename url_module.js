// Nodejs has built-in url module

var url = require('url');

//splitting web address into readable parts

var address = 'http://localhost:8888/default.html?year=2019&month=august';
var query = url.parse(address, true);

console.log(query.host);
console.log(query.pathname);
console.log(query.search);

var queryData = query.query; //return an object
console.log(queryData.year);
console.log(queryData.month);
