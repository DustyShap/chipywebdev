function dragStart(e){
    var target = e.target;
    var audio_container = target.firstElementChild;
    var audio = audio_container.firstElementChild;
    var audio_source = audio.firstElementChild;
    var source = audio_source.getAttribute('src');
    var meta = target.lastElementChild;
    var speaker = meta.firstElementChild.innerHTML;
    var trans = meta.lastElementChild.innerHTML;
    e.dataTransfer.setData('Text', source);
    e.dataTransfer.setData('Text_speaker', speaker);
    e.dataTransfer.setData('Text_trans', trans);

}


function dropped(e){

    e.preventDefault();
    var target = e.target;
    if (target.getAttribute("class") === 'cell'){

        if (target.firstChild) {
            target.removeChild(target.firstChild);
            target.innerHTML = '';
           }

        var data = e.dataTransfer.getData('Text');
        var speaker = e.dataTransfer.getData('Text_speaker');
        var trans = e.dataTransfer.getData('Text_trans');
        var x = document.createElement("AUDIO");
        var y = document.createElement('p');
        var z = document.createElement('p');
        x.setAttribute("src", data);
        x.setAttribute('id','audio');
        x.setAttribute('class', 'audio_drop');
        y.setAttribute('class','speaker_text');
        y.innerHTML = speaker.slice(8);
        z.innerHTML = trans.slice(15,100);
        z.setAttribute('class','transcripted_text');
        target.appendChild(x);
        target.appendChild(y);
        target.appendChild(z);
    }
}


function clickme(e){

    var results = document.getElementsByClassName('search_result');
}


function doFirst(){

    var button = document.getElementById('bttn');
    var theGrid = document.getElementById('main_grid');
    var theParent = document.getElementById("results_container");
    button.addEventListener("click", clickme, false);
    theParent.addEventListener("dragstart", dragStart, false);
    theGrid.addEventListener("dragenter", function(e){e.preventDefault();}, false);
    theGrid.addEventListener("dragover", function(e){e.preventDefault();}, false);
    theGrid.addEventListener("drop", dropped, false);

}



window.addEventListener("load", doFirst, false);