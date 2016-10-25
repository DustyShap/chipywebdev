$(document).ready(function(){

    $.getScript('highlight.js');
    var $results = $("#results_container")
    var url = "<source src=http://insidestlaudio.com/drops/drops%201/"
    var $result_object = $("#result_object")

    $('form').on('submit', function(event) {


        $("#results_container").empty()

        $.ajax({
            data : {
                tags: $('#search_term').val()
            },
            type: 'POST',
            url: '/process'
        })

        .done(function(data){

            if (data.filename.length < 1){

                $results.hide();
                $('#errorAlert').text('No Results!').css('display','flex');
            }

            for (var i=0; i < data.filename.length; i++){

                $('#errorAlert').hide();
                $results.show();

               var filename = data.filename[i].filename;
               var speaker = data.filename[i].speaker;
               var transcription = data.filename[i].transcription;
               var full_url = "http://insidestlaudio.com/drops/drops%201/" + filename;
               $result_object.clone().appendTo($("#results_container")).attr('id', 'result'+i).addClass("search_result");
               $("#result"+i + " #speaker").text("Speaker: " + speaker);
               $("#result"+i + " #transcription").text("Transcription: " + transcription);
               $("#result"+i + " #src").attr('src', full_url);


            }
        });

        event.preventDefault();

    });
});


