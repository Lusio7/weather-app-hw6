unction formatDate(string) {
  var date = new Date(string);
  var formattedDay = date.toString();
  return formattedDay;
}

function getDay(string) {
  var weekday = new Array(7);
  weekday[0] = "Sun";
  weekday[1] = "Mon";
  weekday[2] = "Tue";
  weekday[3] = "Wed";
  weekday[4] = "Thu";
  weekday[5] = "Fri";
  weekday[6] = "Sat";
  var date = new Date(string);
  var day = date.getDay();
  return weekday[day];
}