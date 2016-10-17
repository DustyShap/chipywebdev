$(document).ready(function(){


    $('form').on('submit', function(event) {

        console.log('Testing');

        $.ajax({
            data : {
                tags: $('#tags').val()
            },
            type: 'POST',
            url: '/process'
        })

        .done(function(data){

            $("#success").text(data.filename).show();

        });

        event.preventDefault();


    });



});