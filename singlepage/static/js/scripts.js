$(document).ready(function(){


    $('form').on('submit', function(event) {

        $.ajax({
            data : {
                tags: $('#tags').val()
            },
            type: 'POST',
            url: '/process'
        })

        .done(function(data){

            $("#success").text(data.data[0].filename).show();
            $("#success1").text(data.data[1].filename).show();

        });

        event.preventDefault();


    });



});