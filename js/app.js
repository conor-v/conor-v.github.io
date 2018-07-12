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
                containera.append('<img class="nasaFoto" src=' + data.hdurl + ' />');
            } else {
                containera.append('<iframe class="nasaVideo" src=' + data.url + ' />');
            }
            containera.append('<p id="hover">HOVER MIJ</p>');


            //side-b
            containerb.append('<h2>' + data.title + '</h2>');
            containerb.append('<p>' + data.date + '</p>');
            containerb.append('<p>' + data.explanation  + '</p>');

        }
    });
