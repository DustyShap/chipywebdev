$(document).ready(function() {

    $("#upload").click(function(event){
        var form_data = new FormData($("#upload_form")[0]);
        $.ajax({
            type: "POST",
            url: "/upload",
            data: form_data,
            async: false
        })

        .done(function(data){

            alert('uploaded');


        });

    });

    event.preventDefault();

});