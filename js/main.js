// Default location (area code or city, state – in quotes)
var lc = "South Bend, In";
// Really Simple Weather Plug-In Details
reallySimpleWeather.weather({
  wunderkey: '', // leave blank for Yahoo API
  location: lc, //your location here, also works in lat/lon
  woeid: '', // "Where on Earth ID" optional alternative to location
  unit: 'f', // 'c' also works
  success: function(weather) {
  	// sample data to display city and temperature
  	html='<main>';

    html+='<div class="picture">';


  	 html+= '<section class="head">';
    html+= '<h1 class="wdata-01">'+weather.city+','+weather.region+'</h1>';
    html += '<h3 class="wdata-10"><i class="icon icon-'+weather.code+'"></i></h3>';
    html+= '<h2 class="wdata-02">'+weather.temp+'</h2>';
  html+='</section>';

  


  html+= '<section class="top">';
  	html+= '<p class="wdata-03">' +weather.currently+' </p>'; 
    html+= ' <h3 class="wdata-04">'+weather.low+'</h3>';
    html+= ' <h3 class="wdata-05">'+weather.high+'</h3>';
  	

    html+='</section>';
  	
  	'</div>';


    html+='<section class="middle">';
    html+='<div class= "day1">';
    html+='<h2 class= "wdata-11">'+weather.forecast[1].date+'</h2>';
    html+='<h2 class= "wdata-11">'+weather.forecast[1].day+'</h2>';
    html+='<h2 class= "wdata-11">'+weather.forecast[1].text+'</h2>';
    html+='<h2 class= "wdata-11">'+weather.forecast[1].day+'</h2>';
    html+='</div>';

    html+='<div class= "day2">';
    html+='<h2 class= "wdata-12">'+weather.forecast[2].date+'</h2>';
    html+='<h2 class= "wdata-12">'+weather.forecast[2].day+'</h2>';
    html+='<h2 class= "wdata-12">'+weather.forecast[2].text+'</h2>';
    html+='<h2 class= "wdata-12">'+weather.forecast[2].day+'</h2>';
    html+='</div>';



    html+='<div class= "day3">';
    html+='<h2 class= "wdata-12">'+weather.forecast[3].date+'</h2>';
    html+='<h2 class= "wdata-12">'+weather.forecast[3].day+'</h2>';
    html+='<h2 class= "wdata-12">'+weather.forecast[3].text+'</h2>';
    html+='<h2 class= "wdata-12">'+weather.forecast[3].day+'</h2>';
    html+='</div>';

       html+='<div class= "day4">';
    html+='<h2 class= "wdata-12">'+weather.forecast[4].date+'</h2>';
    html+='<h2 class= "wdata-12">'+weather.forecast[4].day+'</h2>';
    html+='<h2 class= "wdata-12">'+weather.forecast[4].text+'</h2>';
    html+='<h2 class= "wdata-12">'+weather.forecast[4].day+'</h2>';
    html+='</div>';
    html+='</section>';






   

    html+='<section class="bottom"> ';
  
    html+='<p> "Play Like a Champion Today" </p>'; 


  	html+='</section>';
  	html += '</main>';


   
 







  	document.getElementById('weather').innerHTML = html;
  },
	error: function(error) {
	document.getElementById('weather').innerHTML = '<p>'+error+'</p>';
  }
});