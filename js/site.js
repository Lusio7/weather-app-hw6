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

function getBeaufort(windSpeed, system) {
  if (system === 'metric') {
    if (windSpeed < 1) {
      return '0';
    }
    else if (windSpeed <= 5) {
      return '1';
    }
    else if (windSpeed <= 11) {
      return '2';
    }
    else if (windSpeed <= 19) {
      return '3';
    }
    else if (windSpeed <= 28) {
      return '4';
    }
    else if (windSpeed <= 38) {
      return '5';
    }
    else if (windSpeed <= 49) {
      return '6';
    }
    else if (windSpeed <= 61) {
      return '7';
    }
    else if (windSpeed <= 74) {
      return '8';
    }
    else if (windSpeed <= 88) {
      return '9';
    }
    else if (windSpeed <= 102) {
      return '10';
    }
    else if (windSpeed <= 117) {
      return '11';
    }
    else {
      return '12';
    }
  }
  else {
    if (windSpeed < 1) {
      return '0';
    }
    else if (windSpeed <= 3) {
      return '1';
    }
    else if (windSpeed <= 7) {
      return '2';
    }
    else if (windSpeed <= 12) {
      return '3';
    }
    else if (windSpeed <= 18) {
      return '4';
    }
    else if (windSpeed <= 24) {
      return '5';
    }
    else if (windSpeed <= 31) {
      return '6';
    }
    else if (windSpeed <= 38) {
      return '7';
    }
    else if (windSpeed <= 46) {
      return '8';
    }
    else if (windSpeed <= 54) {
      return '9';
    }
    else if (windSpeed <= 63) {
      return '10';
    }
    else if (windSpeed <= 72) {
      return '11';
    }
    else {
      return '12';
    }
  }
}

function loadData(system) {

  // CURRENT CONDITIONS
  var $location = $('#location');
  var $date = $('#date');
  var $text = $('#text');
  var $temp = $('#temp');
  var $tempScale = $('#tempScale');
  var $icon = $('#icon');
  var $realFeel = $('#realFeel');
  var $uvIndex = $('#uvIndex');
  var $airQuality = $('#airQuality');

   // DETAILS
   var $humidity = $('#humidity');
   var $pressure = $('#pressure');
   var $windSpeed = $('#windSpeed');
   var $windDirection = $('#windDirection');
   var $visibility = $('#visibility');
   var $cloudCover = $('#cloudCover');
   var $sunrise = $('#sunrise');
   var $sunset = $('#sunset');
   var $moonrise = $('#moonrise');
   var $moonset = $('#moonset');
   var $moonPhase = $('#moonPhase');
   var $beaufort = $('#beaufort');
   var $background = $('#background');

   var inputCity = $('#inputCity').val();
   //var accuweatherApiKey = "eOYiiAjNR0EuRaIGNoxAlXQQLn56cQMb"; // Accuweather api key
   var accuweatherApiKey = "KrnJm3pGAtha40EFim82KLEqvaikzMeS"; // Accuweather api key
   var flickrApiKey = "8df7b25e698caeac3e6711c1c46140b1"; // Flickr api key

   var locationResourceURL = 'https://dataservice.accuweather.com/locations/v1/cities/search?apikey=' + accuweatherApiKey + '&q=' + inputCity;

    // Get location key (Accuweather Location API)
    $.ajax({
      url: locationResourceURL,
      method: 'GET'
    }).done(function(result) { // Success
      
      var locationKey = result[0].Key; // Location key
      var location = result[0].EnglishName; // City name

      var placeIDsResourceURL = 'https://api.flickr.com/services/rest/?method=flickr.places.find&api_key=' + flickrApiKey + '&query=' + location + '&format=json&nojsoncallback=1';

      // Get a list of place IDs (Flickr API: flickr.places.find)
      $.ajax({
        url: placeIDsResourceURL,
        method: 'GET'
      }).done(function(result) { // Success
        
        var placeId = result.places.place[0].place_id; // Place id

        var photosResourceURL = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + flickrApiKey + '&tags=city&content_type=1&place_id=' + placeId + '&format=json&nojsoncallback=1';

        // Get a list of photos (Flickr API: flickr.photos.search)
        $.ajax({
          url: photosResourceURL,
          method: 'GET'
        }).done(function(result) { // Success
          
          var photoId = result.photos.photo[0].id;

          var photoSizesResourceURL = 'https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=' + flickrApiKey + '&photo_id=' + photoId + '&format=json&nojsoncallback=1';

