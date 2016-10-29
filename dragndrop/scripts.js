function startDrag(e){

    var target = e.target;
    var x = target.getAttribute("src");
    e.dataTransfer.setData('Text', x);


}


function dropped(e){


    var target = e.target;
    var data = e.dataTransfer.getData('Text');
    var img = document.getElementById('img');
    img.setAttribute('src', data);
    img.style.display = 'block';

}

function doFirst(){

    var mypic = document.getElementById("pic");
    mypic.addEventListener("dragstart", startDrag, false);
    leftbox = document.getElementById("play_box_1");
    leftbox.addEventListener("dragenter", function(e){e.preventDefault();}, false);
    leftbox.addEventListener("dragover", function(e){e.preventDefault();}, false);
    leftbox.addEventListener("drop", dropped, false);


    }




window.addEventListener("load", doFirst, false);

