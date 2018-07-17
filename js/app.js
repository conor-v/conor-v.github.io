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
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
        datasets: [{
            label: "Nasa api data",

            borderColor: '#5B007A',
            data: [0, 10, 5, 2, 20, 30, 45, 22, 55, 40, 43, 32]
        }]
    },

    // Configuration options go here
    options: {
       
    }
});