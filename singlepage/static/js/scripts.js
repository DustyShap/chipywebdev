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

            if (data.filename.length < 1){

                $results.hide();
                $('#errorAlert').text('No Results!').show();
            }

            for (var i=0; i < data.filename.length; i++){

                $('#errorAlert').hide();
                $results.show();
               var filename = data.filename[i].filename
               console.log(url + filename + " type='audio/mp3'>");
               $results.append("<audio id='play' controls>" + url + filename + " type='audio/mp3'>");
               $results.append("</audio>");
               $results.append("<p>"+data.filename[i].speaker+"</p>")
               $results.append("<p>"+data.filename[i].transcription+"</p>")
               $results.append("<br>");
            }
        });
        event.preventDefault();
    });
});