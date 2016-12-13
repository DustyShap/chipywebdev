$(document).ready(function(){


    var $results = $("#results_container")
    var $result_object = $("#result_object")


    //Process data on button click
    $('#bttn').on('click', function(event) {
        submitData(event)
    });


    //Process data if enter is pressed within search term input field
    $('#search_term').keypress(function(event) {
    // enter has keyCode = 13, change it if you want to use another button
    if (event.keyCode == 13) {
           submitData(event)
         }
     });

     //Function to submit Data to process endpoint
    function submitData(event){

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
               $("#search_term").val("");

            }
        }); //Data done end

        event.preventDefault();

    } //END SUBMIT DATA FUNCTION

});
