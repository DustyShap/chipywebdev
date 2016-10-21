$(document).ready(function(){

    var $results = $("#results_container")
    var url = "<source src=http://insidestlaudio.com/drops/drops%201/"

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
                $('#errorAlert').text('No Results!').show();
            }

            for (var i=0; i < data.filename.length; i++){

                $('#errorAlert').hide();
                $results.show();
               var filename = data.filename[i].filename
               $results.append("<div class='result_object'></div>");
               $(".result_object").append("<p>Test</p>");
            }
        });

        event.preventDefault();

    });
});