/**
 * Created by cjv52 on 10/07/2018.
 */
// api key = XhB5GKyMvDUDplRAwBJMLz4ST1fVhVYXkcNLSROr
const containera = $('.side-a');
const containerb = $('.side-b');

    $.ajax({
        type: 'GET',
        url:'https://api.nasa.gov/planetary/apod?api_key=XhB5GKyMvDUDplRAwBJMLz4ST1fVhVYXkcNLSROr',
        dataType: 'json',
        success: function(data) {
            //Voor te zien of de data te pakken is (debugging)
            console.log('success',data);
            containera.append('<h2>' + data.title + '</h2>');
            containera.append('<p>' + data.date + '</p>');
            if (data.hdurl) {
                containera.append('<img class="nasadata" src=' + data.hdurl + ' />');
            } else {
                containera.append('<iframe class="nasadata" src=' + data.url + ' />');
            }
            containera.append('<p id="hover">HOVER MIJ</p>');

            //side-b
            containerb.append('<h2>' + data.title + '</h2>');
            containerb.append('<p>' + data.date + '</p>');
            containerb.append('<p id="explanation">' + data.explanation  + '</p>');

        }
    });
/*
CHART
*/
$.ajax({
    type: 'GET',
    url: 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=XhB5GKyMvDUDplRAwBJMLz4ST1fVhVYXkcNLSROr',
    dataType: 'json',
    success: function (data) {
        console.log('success',data);
        $.each(data, function (i, item) {
            // console.log(item.estimated_diameter, "test");


        const ctx = document.getElementById('myChart').getContext('2d');
        const chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',

            // The data for our dataset
            data: {
                labels: ["RG2", "RL35", "RX83", "RY83", "LE27", "FC35", "RH36", "RU33", "RN41"],
                datasets: [{
                    label: "Astro min",
                    borderColor: '#5B007A',
                    data: [1, 5, 8, 9, 5, 10, 8, 2, 5]
                    },
                    {
                        label: "Astro max",
                    borderColor: '#7158FA',
                    data: [5, 8, 12, 15, 8, 12, 10, 9, 8]
                }]
            }
        });
         // console.log(item);
        });
    }
});

/*
nasa logo knop
 */
$(document).ready(function(){
   $("nav").show();
   $("#btn").click(function(){
      if ($("nav").is(":hidden") == false){
          $("nav").hide();
          $("#btn").val('SHOW');
      } else {
          $("nav").show();
          $("#btn").val('HIDE');
      }
   });
});