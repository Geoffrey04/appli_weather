function ajaxRequest()
{
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {

           // document.getElementById('dataUpdate').innerHTML = this.responseText;
            console.log(this.responseText);
            var objMeteo = this.responseText;
        }

        var weather = JSON.parse(objMeteo);
      //  var date1 = new Date();
       let d = new Date();

        //     document.getElementById('date').innerHTML = (date1.getDay()) + (date1.getMonth()) + (date1.getFullYear());
        document.getElementById('tempactu').innerHTML = weather.main.temp + '°' ;
        document.getElementById('name').innerHTML = weather.name ;
        document.getElementById('tempmin').innerHTML ="Temp min:"+' '+ weather.main.temp_min + '°' ;
        document.getElementById('tempmax').innerHTML ="Temp max:"+' '+ weather.main.temp_max + '°' ;
        document.getElementById('patm').innerHTML ="Atmo.pressure:"+' '+ weather.main.pressure  ;
        document.getElementById('wind').innerHTML ="Wind speed:"+' '+ weather.wind.speed  ;
        document.getElementById('humidity').innerHTML ="humidity :"+' '+ weather.main.humidity ;
        document.getElementById('latitude').innerHTML ="lat :"+' '+ weather.coord.lat ;
        document.getElementById('longitude').innerHTML ="long :"+' '+ weather.coord.lon ;



        var macarte = null;





            macarte = L.map('map').setView([weather.coord.lat, weather.coord.lon], 11);

            L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {

                attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
                minZoom: 1,
                maxZoom: 20
            }).addTo(macarte);
        };




    xhttp.open("GET", "doc.php?city=" +  document.getElementById('city').value , true);

    xhttp.send();



}


document.getElementById('sub').addEventListener("click", ajaxRequest);

















