
jQuery(document).ready(function(){

    axios.get('https://api.openweathermap.api.openweathermap.org/data/2.5/weather?zip={zip code},{country code} /data/2.5/weather?{zip-code},us').then(function(response){
        console.log(response.data);
       
    }); 

   //hiding the display portion
    $('.weatherDisplay').hide();

    //onclick of the enter this loads up
    // $(move()).hide(); 


   $('.myBtn').on('click',function(){

        // $(move()).show();

       var zipInput=$('#zip').val();
       isValidZip(zipInput);
        var url= 'https://api.openweathermap.org/data/2.5/forecast?zip=' +zipInput +',us&appid=af6f696a2771e464e491bc5094e04d99';
        


        axios.get(url).then(function(response){

            console.log(response.data);
            var Weather= response.data;
            
            
            if(Weather.list[0].weather[0].main === "Clouds"){
                var theWeather = '<img src='+getBrokenClouds()+' alt="Cloudy">';
            }
            else if(Weather.list[0].weather[0].main === "Rain"){
                var theWeather = '<img src='+getLightRain()+' alt="Light-Rain">';
            }
            else if(Weather.list[0].weather[0].main=== "Clear"){
                var theWeather = '<img src='+getClearSkyLink()+' alt="Moderate-Rain">';
            }
            else if( Weather.list[0].weather[0].main === "Drizzle"){
                var theWeather = '<img src='+getDrizzle()+' alt="ClearSky">';
            }
            else if(Weather.list[0].weather[0].main === "Snow"){
                var theWeather = '<img src='+getSnowLink()+' alt="SnowFall">';
            }
            theWeather +='<p class="descp">' +Weather.list[0].weather[0].description + '</p>'; 
            theWeather +='<div class="temp">';           
            theWeather +='<p title="Min-Temp">'+convertFromKevToCel( Weather.list[0].main.temp_min) + '°C </p> ';
            theWeather +=' <p title="Max-Temp">'+convertFromKevToCel(Weather.list[0].main.temp_max) + '°C </p>';
            theWeather +='</div>';

            theWeather += '<p class="city">'+Weather.city.name+', '+ Weather.city.country +'</p>';
            theWeather += '<p class="time">'+convertTime(Weather.list[0].dt) +'</p>';
            
            theWeather += '<div class="otherList">';
            theWeather +='<p>TimeZone: '+Weather.city.timezone+' GMT</p>'; 
            theWeather+='<p>Pressure: ' +Weather.list[0].main.pressure + 'p</p>';
            theWeather+='<p>Humidity: ' +Weather.list[0].main.humidity + '% </p>';
            theWeather+='<p>Wind Speed: ' +Weather.list[0].wind.speed + '  km/h</p>';
            theWeather+='<p>Wind Degree: ' +Weather.list[0].wind.deg + '° </p>';
            theWeather += '<p>Main-Descp: '+Weather.list[0].weather[0].main+'</p>';
            theWeather += '</div>';

            // Displaying the second weather

            if(Weather.list[4].weather[0].main === "Clouds"){
                var theWeather2 = '<img src='+getBrokenClouds()+' alt="Cloudy">';
            }
            else if(Weather.list[4].weather[0].main === "Rain"){
                var theWeather2 = '<img src='+getLightRain()+' alt="Light-Rain">';
            }
            else if(Weather.list[4].weather[0].main=== "Clear"){
                var theWeather2 = '<img src='+getClearSkyLink()+' alt="Moderate-Rain">';
            }
            else if( Weather.list[4].weather[0].main === "Drizzle"){
                var theWeather2 = '<img src='+getDrizzle()+' alt="ClearSky">';
            }
            else if(Weather.list[4].weather[0].main === "Snow"){
                var theWeather2 = '<img src='+getSnowLink()+' alt="SnowFall">';
            }

            theWeather2 +='<p class="descp">' +Weather.list[4].weather[0].description + '</p>';
            theWeather2 +='<div class="temp">';
            theWeather2 +='<p title="Min-Temp">' +convertFromKevToCel( Weather.list[4].main.temp_min) + '°C </p>';
            theWeather2 +='<p title="Max-Temp">' +convertFromKevToCel(Weather.list[4].main.temp_max) + '°C </p>';
            theWeather2 += '</div>';

            theWeather2 += '<p class="city">'+Weather.city.name+', '+ Weather.city.country +'</p>';
            theWeather2 += '<p>'+convertTime(Weather.list[8].dt) +'</p>';

            theWeather2 += '<div class="otherList">';
            theWeather2 +='<p>TimeZone: '+Weather.city.timezone+' GMT</p>';             
            theWeather2 +='<p>Pressure: ' +Weather.list[4].main.pressure + 'p</p>';
            theWeather2 +='<p>Humidity: ' +Weather.list[4].main.humidity + '% </p>';
            theWeather2 +='<p>Wind Speed: ' +Weather.list[4].wind.speed + '  km/h</p>';
            theWeather2 +='<p>Wind Degree: ' +Weather.list[4].wind.deg + '° </p>';
            theWeather2 += '<p>Main-Descp: '+Weather.list[4].weather[0].main+'</p>';
            theWeather2 += '</div>';

            // Displaying the Third weather info

            if(Weather.list[16].weather[0].main === "Clouds"){
                var theWeather3 = '<img src='+getBrokenClouds()+' alt="Cloudy">';
            }
            else if(Weather.list[16].weather[0].main === "Rain"){
                var theWeather3 = '<img src='+getLightRain()+' alt="Light-Rain">';
            }
            else if(Weather.list[16].weather[0].main=== "Clear"){
                var theWeather3 = '<img src='+getClearSkyLink()+' alt="Moderate-Rain">';
            }
            else if( Weather.list[16].weather[0].main === "Drizzle"){
                var theWeather3 = '<img src='+getDrizzle()+' alt="ClearSky">';
            }
            else if(Weather.list[16].weather[0].main === "Snow"){
                var theWeather3 = '<img src='+getSnowLink()+' alt="SnowFall">';
            }

            theWeather3 +='<p class="descp">' +Weather.list[9].weather[0].description + '</p>';
            theWeather3 +='<div class="temp">';
            theWeather3 +='<p title="Min-Temp">' +convertFromKevToCel( Weather.list[16].main.temp_min) + '°C </p>';
            theWeather3 +='<p title="Max-Temp">' +convertFromKevToCel(Weather.list[16].main.temp_max) + '°C </p>';
            theWeather3 += '</div>';

            theWeather3 += '<p class="city">'+Weather.city.name+', '+ Weather.city.country +'</p>';
            theWeather3 += '<p>'+convertTime(Weather.list[16].dt) +'</p>';

            theWeather3 += '<div class="otherList">';
            theWeather3 +='<p>TimeZone: '+Weather.city.timezone+' GMT</p>';             
            theWeather3 +='<p>Pressure: ' +Weather.list[16].main.pressure + 'p</p>';
            theWeather3 +='<p>Humidity: ' +Weather.list[16].main.humidity + '% </p>';
            theWeather3 +='<p>Wind Speed: ' +Weather.list[16].wind.speed + '  km/h</p>';
            theWeather3 +='<p>Wind Degree: ' +Weather.list[16].wind.deg + '° </p>';
            theWeather3 += '<p>Main-Descp: '+Weather.list[16].weather[0].main+'</p>';
            theWeather3 += '</div>';

            // Displaying the fourth wether info
            if(Weather.list[24].weather[0].main === "Clouds"){
                var theWeather4 = '<img src='+getBrokenClouds()+' alt="Cloudy">';
            }
            else if(Weather.list[24].weather[0].main === "Rain"){
                var theWeather4 = '<img src='+getLightRain()+' alt="Light-Rain">';
            }
            else if(Weather.list[24].weather[0].main=== "Clear"){
                var theWeather4 = '<img src='+getClearSkyLink()+' alt="Moderate-Rain">';
            }
            else if( Weather.list[24].weather[0].main === "Drizzle"){
                var theWeather4 = '<img src='+getDrizzle()+' alt="ClearSky">';
            }
            else if(Weather.list[24].weather[0].main === "Snow"){
                var theWeather4 = '<img src='+getSnowLink()+' alt="SnowFall">';
            }

            theWeather4 +='<p class="descp">' +Weather.list[24].weather[0].description + '</p>';
            theWeather4 +='<div class="temp">';
            theWeather4 +='<p title="Min-Temp">' +convertFromKevToCel( Weather.list[24].main.temp_min) + '°C </p>';
            theWeather4 +='<p title="Max-Temp">' +convertFromKevToCel(Weather.list[24].main.temp_max) + '°C </p>';
            theWeather4 += '</div>';

            theWeather4 += '<p class="city">'+Weather.city.name+', '+ Weather.city.country +'</p>';
            theWeather4 += '<p>'+convertTime(Weather.list[24].dt) +'</p>';

            theWeather4 += '<div class="otherList">';
            theWeather4 +='<p>TimeZone: '+Weather.city.timezone+' GMT</p>';             
            theWeather4 +='<p>Pressure: ' +Weather.list[24].main.pressure + 'p</p>';
            theWeather4 +='<p>Humidity: ' +Weather.list[24].main.humidity + '% </p>';
            theWeather4 +='<p>Wind Speed: ' +Weather.list[24].wind.speed + '  km/h</p>';
            theWeather4 +='<p>Wind Degree: ' +Weather.list[24].wind.deg + '° </p>';
            theWeather4 += '<p>Main-Descp: '+Weather.list[24].weather[0].main+'</p>';
            theWeather4 += '</div>';

            // Displaying the Fifth weather info
            if(Weather.list[32].weather[0].main === "Clouds"){
                var theWeather5 = '<img src='+getBrokenClouds()+' alt="Cloudy">';
            }
            else if(Weather.list[32].weather[0].main === "Rain"){
                var theWeather5 = '<img src='+getLightRain()+' alt="Light-Rain">';
            }
            else if(Weather.list[32].weather[0].main=== "Clear"){
                var theWeather5 = '<img src='+getClearSkyLink()+' alt="Moderate-Rain">';
            }
            else if( Weather.list[32].weather[0].main === "Drizzle"){
                var theWeather5 = '<img src='+getDrizzle()+' alt="ClearSky">';
            }
            else if(Weather.list[32].weather[0].main === "Snow"){
                var theWeather5 = '<img src='+getSnowLink()+' alt="SnowFall">';
            }

            theWeather5 +='<p class="descp">' +Weather.list[32].weather[0].description + '</p>';
            theWeather5 +='<div class="temp">';
            theWeather5 +='<p title="Min-Temp">' +convertFromKevToCel( Weather.list[32].main.temp_min) + '°C </p>';
            theWeather5 +='<p title="Max-Temp">' +convertFromKevToCel(Weather.list[32].main.temp_max) + '°C </p>';
            theWeather5 += '</div>';

            theWeather5 += '<p class="city">'+Weather.city.name+', '+ Weather.city.country +'</p>';
            theWeather5 += '<p>'+convertTime(Weather.list[32].dt) +'</p>';

            theWeather5 += '<div class="otherList">';
            theWeather5 +='<p>TimeZone: '+Weather.city.timezone+' GMT</p>';             
            theWeather5 +='<p>Pressure: ' +Weather.list[32].main.pressure + 'p</p>';
            theWeather5 +='<p>Humidity: ' +Weather.list[32].main.humidity + '% </p>';
            theWeather5 +='<p>Wind Speed: ' +Weather.list[32].wind.speed + '  km/h</p>';
            theWeather5 +='<p>Wind Degree: ' +Weather.list[32].wind.deg + '° </p>';
            theWeather5 += '<p>Main-Descp: '+Weather.list[32].weather[0].main+'</p>';
            theWeather5 += '</div>';

            // Displaying the sixth weather info
            if(Weather.list[39].weather[0].main === "Clouds"){
                var theWeather6 = '<img src='+getBrokenClouds()+' alt="Cloudy">';
            }
            else if(Weather.list[39].weather[0].main === "Rain"){
                var theWeather6 = '<img src='+getLightRain()+' alt="Light-Rain">';
            }
            else if(Weather.list[39].weather[0].main=== "Clear"){
                var theWeather6 = '<img src='+getClearSkyLink()+' alt="Moderate-Rain">';
            }
            else if( Weather.list[39].weather[0].main === "Drizzle"){
                var theWeather6 = '<img src='+getDrizzle()+' alt="ClearSky">';
            }
            else if(Weather.list[39].weather[0].main === "Snow"){
                var theWeather6 = '<img src='+getSnowLink()+' alt="SnowFall">';
            }

            theWeather6 +='<p class="descp">' +Weather.list[39].weather[0].description + '</p>';
            theWeather6 +='<div class="temp">';
            theWeather6 +='<p title="Min-Temp">' +convertFromKevToCel( Weather.list[39].main.temp_min) + '°C </p>';
            theWeather6 +='<p title="Max-Temp">' +convertFromKevToCel(Weather.list[39].main.temp_max) + '°C </p>';
            theWeather6 += '</div>';

            theWeather6 += '<p class="city">'+Weather.city.name+', '+ Weather.city.country +'</p>';
            theWeather6 += '<p>'+convertTime(Weather.list[39].dt) +'</p>';

            theWeather6 += '<div class="otherList">';
            theWeather6 +='<p>TimeZone: '+Weather.city.timezone+' GMT</p>';             
            theWeather6 +='<p>Pressure: ' +Weather.list[39].main.pressure + 'p</p>';
            theWeather6 +='<p>Humidity: ' +Weather.list[39].main.humidity + '% </p>';
            theWeather6 +='<p>Wind Speed: ' +Weather.list[39].wind.speed + '  km/h</p>';
            theWeather6 +='<p>Wind Degree: ' +Weather.list[39].wind.deg + '° </p>';
            theWeather6 += '<p>Main-Descp: '+Weather.list[39].weather[0].main+'</p>';
            theWeather6 += '</div>';

            //Displaying to the document
            $('.weatherDisplay').show();
            $('#cur-weather1').html(theWeather);
            $('#cur-weather2').html(theWeather2);
            $('#cur-weather3').html(theWeather3);
            $('#cur-weather4').html(theWeather4);
            $('#cur-weather5').html(theWeather5);
            $('#cur-weather6').html(theWeather6);

            $(move()).hide();

            // 15698
        });
   });

   function convertTime(value){
        // Unixtimestamp
        var unixtimestamp = value;

        // Months array
        var months_arr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

        // Convert timestamp to milliseconds
        var date = new Date(unixtimestamp*1000);

        // Year
        var year = date.getFullYear();

        // Month
        var month = months_arr[date.getMonth()];

        // Day
        var day = date.getDate();

        // Hours
        var hours = date.getHours();

        // Minutes
        var minutes = "0" + date.getMinutes();

        // Seconds
        var seconds = "0" + date.getSeconds();

        // Display date time in MM-dd-yyyy h:m:s format
        var convdataTime = month+' '+day+'th '+year+' '+hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
        
        // Time below
        // +' '+hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

        return convdataTime;
   }

   /**
    * Function to check the validity of the zipcode
    * Error handling
    * @param {ZipCpde} zip 
    */
    function isValidZip(zip){
        if(zip.length < 5){
            document.getElementById('errMsg').innerHTML = "Zip code Length shorter than 5*.";
            $('.weatherDisplay').hide();
            return false;
        }
        else if(zip.length > 5){
            document.getElementById('errMsg').innerHTML = "Zip code Length Longer than 5*.";
            $('.weatherDisplay').hide();
            return false;
        }
        else if(isNaN(zip)){
            document.getElementById('errMsg').innerHTML = "Input was not a number*.";
            $('.weatherDisplay').hide();
            return true;
        }
        document.getElementById('errMsg').innerHTML = "";
        return true;
    }

    /**
     * converts temperature from fahrenheit to celsius
     * @param {*} temp 
     */
    function convertFromFahToCel(temp){
        temp=parseFloat(temp);
        temp = (temp-32) / (1.8);
        return Math.round(temp)
    } 

    /**
     * Converts from kelvin to celsuius
     * @param {temperature} temp 
     */
    function convertFromKevToCel(temp){
        temp = parseFloat(temp);
        temp = temp - 273.15;
        return Math.round(temp);
    }

    function getRainPicture(){
        var x = document.createElement("IMG");
        // var x;
        x.setAttribute("src","rain.jpg");
        x.setAttribute("width", "180");
        x.setAttribute("height", "80");
        x.setAttribute("alt", "rain/thunderstorm");
        x.setAttribute("border-radius", "50%");
        // document.body.appendChild(x);
        // document.getElementById('pic').innerHTML(x);
    }
    
    function getLightRain(){
        var x = "../images/rain.png";
        return x;
    }
    
    function getClearSkyLink(){
        var x = "../images/sunny.png";
        return x;
    }

    function getBrokenClouds(){
        var x = "../images/brokenClouds.png";
        return x;
    }

    function getDrizzle(){
        var x ="../images/cloudy.png";
        return x;
    }
    
    function getDrizzle(){
        var x="../images/cloudySun.png";
        return x;
    }

    function getSnowLink(){
        var x = "../images/snowFall.png";
        return x;
    }

});

    // if i ever need to iterate over the returned obejcts use this

            // for(let key in Weather.list){
            //     console.log(Weather.list[key].dt);
            //     theWeather += '<p>Date: '+convertTime(Weather.list[key].dt)+'</p>';
            //     theWeather+='<p>Wind Speed: '+Weather.list[key].wind["speed"]+'</p>';
            // }   
            // for(let i=0;i< 7;i++){
            //     theWeather += '<p>Date: '+convertTime(Weather.list[i].dt) +'</p>';
            // }  