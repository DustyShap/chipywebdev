$('#bttn').click(function(){


    var whut = $('#url_name').val();
    console.log(whut);

    $.ajax({
            data : {
                url_name: whut
            },
            type: 'POST',
            url: '/process'
        })
        .done(function(data){

            console.log(data)
            var photo = data.test.photo
            var url = data.test.url
            var description = data.test.description
            $("#thumb").attr("src",photo);
            $("#groupid").text("Group ID: " + url)
            $("#desc").text("Group Description: " + description)





        });








    });


































