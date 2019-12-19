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

function getTime(string) {
  var date = new Date(string);
  var hours = date.getHours();
  if (hours < 10) {
    hours = '0' + hours;
  }
  var minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  var time = hours + ':' + minutes;
  return time;
}

function getMoonPhaseClass(age) {
  var phase = new Array(28);
  phase[0] = "wi-moon-new";
  phase[1] = "wi-moon-waxing-crescent-1";
  phase[2] = "wi-moon-waxing-crescent-2";
  phase[3] = "wi-moon-waxing-crescent-3";
  phase[4] = "wi-moon-waxing-crescent-4";
  phase[5] = "wi-moon-waxing-crescent-5";
  phase[6] = "wi-moon-waxing-crescent-6";
  phase[7] = "wi-moon-first-quarter";
  phase[8] = "wi-moon-waxing-gibbous-1";
  phase[9] = "wi-moon-waxing-gibbous-2";
  phase[10] = "wi-moon-waxing-gibbous-3";
  phase[11] = "wi-moon-waxing-gibbous-4";
  phase[12] = "wi-moon-waxing-gibbous-5";
  phase[13] = "wi-moon-waxing-gibbous-6";
  phase[14] = "wi-moon-full";
  phase[15] = "wi-moon-waning-gibbous-1";
  phase[16] = "wi-moon-waning-gibbous-2";
  phase[17] = "wi-moon-waning-gibbous-3";
  phase[18] = "wi-moon-waning-gibbous-4";
  phase[19] = "wi-moon-waning-gibbous-5";
  phase[20] = "wi-moon-waning-gibbous-6";
  phase[21] = "wi-moon-third-quarter";
  phase[22] = "wi-moon-waning-crescent-1";
  phase[23] = "wi-moon-waning-crescent-2";
  phase[24] = "wi-moon-waning-crescent-3";
  phase[25] = "wi-moon-waning-crescent-4";
  phase[26] = "wi-moon-waning-crescent-5";
  phase[27] = "wi-moon-waning-crescent-6";
  return phase[age-1];
}