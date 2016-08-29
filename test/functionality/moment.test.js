var moment = require('moment');
var dateString = "Wed Aug 22 2016 18:22:09 GMT-0700 (PDT)";
var jsDate = new Date(dateString);

var date = moment(jsDate);

var nextWeek = date.add(7, 'days');
console.log(nextWeek.format());

var diff = nextWeek.fromNow();
console.log(diff);
