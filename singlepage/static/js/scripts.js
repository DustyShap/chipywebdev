$(document).ready(function(){

    var $results = $("#results_container")
    var url = "<source src=http://insidestlaudio.com/drops/drops%201/"

    $('form').on('submit', function(event) {


        $("#results_container").empty()

        $.ajax({
            data : {
                tags: $('#tags').val()
            },
            type: 'POST',
            url: '/process'
        })

        .done(function(data){


            for (var i=0; i < data.filename.length; i++){

               var filename = data.filename[i].filename
               console.log(url + filename + " type='audio/mp3'>");
               $("#results_container").append("<audio id='play' controls>" + url + filename + " type='audio/mp3'>");
               $("results_container").append("</audio>");
               $results.append("<br>");


               //$("#success").text(data.filename[0].filename).show();

            }

        });

        event.preventDefault();


    });



});