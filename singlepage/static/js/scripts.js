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

            $("#successAlert").text(data.tags).show();

        });

        event.preventDefault();


    });



});