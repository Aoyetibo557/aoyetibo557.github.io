
jQuery(document).ready(function(){

    axios.get('https://api.openweathermap.api.openweathermap.org/data/2.5/weather?zip={zip code},{country code} /data/2.5/weather?{zip-code},us').then(function(response){
        console.log(response.data);
       
    }); 

   //hiding the display portion
    $('.weatherDisplay').hide();

    //onclick of the enter this loads up
    $(move()).hide(); 
   $('.myBtn').on('click',function(){

        $(move()).show();

       var zipInput=$('#zip').val();
        var url= 'https://api.openweathermap.org/data/2.5/weather?zip=' +zipInput +',us&appid=af6f696a2771e464e491bc5094e04d99';
        


        axios.get(url).then(function(response){


            console.log(response.data);
            var Weather= response.data;
            var theWeather= '<p>CIty: ' +Weather.name+ ' </p>';
            theWeather+='<p>Country: ' +Weather.sys.country + '</p>';
            theWeather+='<p>TimeZone: ' +Weather.timezone+ 'MT</p>';
            theWeather+='<p>Co-ordinate: ' +Weather.cod+ '</p>';
            theWeather+='<p>Min-Temp: ' +Weather.main.temp_min + ' °F </p>';
            theWeather+='<p>Max-Temp: ' +Weather.main.temp_max + ' °F </p>';
            theWeather+='<p>Humidity: ' +Weather.main.humidity + '% </p>';
            theWeather+='<p>Pressure: ' +Weather.main.pressure + 'p</p>';
            theWeather+='<p>Description: ' +Weather.weather[0].description + '</p>';
            theWeather+='<p>Wind Speed: ' +Weather.wind.speed + ' mph</p>';
            theWeather+='<p>Wind Degree: ' +Weather.wind.deg + '° </p>';

            //Displaying to the document
            $('.weatherDisplay').show();
            $('#cur-weather').html(theWeather);
            $('#cur-weather').css('background','whitesmoke');
            $('#cur-weather').css('font-size','20px');
           // $('#cur-weather').css('font-style','italic');
            $('#cur-weather').css('border-radius','15px');
            $(move()).hide();


        });
   });
   

        var i = 0;
        function move() {
            if (i == 0) {
                i = 1;
                var elem = document.getElementById("myBar");
                var width = 1;
                var id = setInterval(frame, 10);
                function frame() {
                    if (width >= 100) {
                        clearInterval(id);
                        i = 0;
                    } else {
                        width++;
                        elem.style.width = width + "%";
                    }
                }
            }
        }
   
    
});
