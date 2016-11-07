$(document).ready(function(){


    var $results = $("#results_container")
    var url = "<source src=http://insidestlaudio.com/drops/drops%201/"
    var $result_object = $("#result_object")



    $('#form').on('submit', function(event) {


        $("#results_container").empty();
        $("#instructions").hide();

        $.ajax({
            data : {
                tags: $('#search_term').val()
            },
            type: 'POST',
            url: '/process'
        })

        .done(function(data){

            if (data.filename.length < 1){
                console.log('NONE');

                $("#results_container").empty();

            }

            for (var i=0; i < data.filename.length; i++){


                $results.show();


               var filename = data.filename[i].filename;
               var speaker = data.filename[i].speaker;
               var transcription = data.filename[i].transcription;
               var search_term = $('#search_term').val()
               var full_url = "http://insidestlaudio.com/drops/drops%201/" + filename;
               $result_object.clone().appendTo($("#results_container")).attr('id', 'result'+i).addClass("search_result");
               $("#result"+i).attr('draggable','True');
               $("#result"+i + " #speaker").text("Speaker: " + speaker).css('color','red');
               $("#result"+i + " #transcription").text("Transcription: " + transcription).css('color','blue');
               $("#result"+i + " #src").attr('src', full_url);
               $("p").highlight(search_term);

            }
        });

        event.preventDefault();

    });

    $(".cell").click(function(){
      if ($(this).find('audio').length) {
        var audio = $(this).find('audio');
        audio[0].play();
        }

    });

});


