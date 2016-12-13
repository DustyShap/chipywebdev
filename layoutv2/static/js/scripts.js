$(document).ready(function(){


    //Create function for submission and bind it to both enter as well as button click
    //Autofocus input upon pageload
    //JSON file with predetermined layout
    //$.get to get info from that file and return as json object
    //Bootstrap dropdown components
    //Reformat JS
    //JS Arrow function



    //Search term input validation
    $("#search_term").keyup(function(){

        if ($(this).val().length >= 3){
            $("#bttn").prop('disabled', false).css('color','green');
        }

        if ($(this).val().length < 3){
            $("#bttn").prop('disabled', true).css('color','red');
        }
    });




    //Play audio contained within individual cell
    $(".cell").click(function(){
      if ($(this).find('audio').length) {
        var audio = $(this).find('audio');
        audio[0].play();
        }

    });


    //Play CLIP THAT OFF when the title logo is clicked (may remove?)
    $("#title").click(function(){
        var clip = new Audio('http://insidestlaudio.com/drops/drops%201/CLIP%20THAT%20OFF.mp3');
        clip.play();

    })



});  //End of document ready wrap


