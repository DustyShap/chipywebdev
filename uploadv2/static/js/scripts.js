$(document).ready(function() {

    $("#upload").click(function(event){
        var form_data = new FormData($("#upload_form")[0]);


        $.ajax({
            type: "POST",
            url: "/upload",
            data: form_data,
            contentType: false,
            cache: false,
            processData: false,
            async: false

        }).done(function(data){

            console.log(data);

        });

        event.preventDefault();



    });



});