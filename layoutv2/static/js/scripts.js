$(document).ready(function(){

    var $results = $("#results_container")
    var url = "<source src=http://insidestlaudio.com/drops/drops%201/"
    var $result_object = $("#result_object")


    $('form').on('submit', function(event) {



        $("#results_container").empty();

        $.ajax({
            data : {
                tags: $('#search_term').val()
            },
            type: 'POST',
            url: '/process'
        })

        .done(function(data){

            if (data.filename.length < 1){
                console.log('NONE');


                $("#results_container").empty();

            }

            for (var i=0; i < data.filename.length; i++){


                $results.show();


               var filename = data.filename[i].filename;
               var speaker = data.filename[i].speaker;
               var transcription = data.filename[i].transcription;
               var search_term = $('#search_term').val()
               var full_url = "http://insidestlaudio.com/drops/drops%201/" + filename;
               $result_object.clone().appendTo($("#results_container")).attr('id', 'result'+i).addClass("search_result");
               $("#result"+i).attr('draggable','True');
               $("#result"+i + " #speaker").text("Speaker: " + speaker).css('color','red');
               $("#result"+i + " #transcription").text("Transcription: " + transcription).css('color','blue');
               $("#result"+i + " #src").attr('src', full_url);
               $("p").highlight(search_term);


            }
        });

        event.preventDefault();

    });


});

function dropped(e){

    var target = e.target;
    target.removeChild(target.firstChild);
    var data = e.dataTransfer.getData('Text');
    var x = document.createElement("AUDIO");
    x.setAttribute("src", data);
    x.setAttribute('class', 'audio_drop');
    x.controls=true
    target.appendChild(x);


}


function dragStart(e){
    var target = e.target;
    var audio_container = target.firstElementChild;
    var audio = audio_container.firstElementChild;
    var audio_source = audio.firstElementChild;
    var source = audio_source.getAttribute('src');
    e.dataTransfer.setData('Text', source);

}



function clickme(e){

    var results = document.getElementsByClassName('search_result');
}


function doFirst(){

    var button = document.getElementById('bttn');
    var theGrid = document.getElementById('main_wrap');
    var theParent = document.getElementById("results_container");
    button.addEventListener("click", clickme, false);
    theParent.addEventListener("dragstart", dragStart, false);
    theGrid.addEventListener("dragenter", function(e){e.preventDefault();}, false);
    theGrid.addEventListener("dragover", function(e){e.preventDefault();}, false);
    theGrid.addEventListener("drop", dropped, false);



}


window.addEventListener("load", doFirst, false);










jQuery.extend({
    highlight: function (node, re, nodeName, className) {
        if (node.nodeType === 3) {
            var match = node.data.match(re);
            if (match) {
                var highlight = document.createElement(nodeName || 'span');
                highlight.className = className || 'highlight';
                var wordNode = node.splitText(match.index);
                wordNode.splitText(match[0].length);
                var wordClone = wordNode.cloneNode(true);
                highlight.appendChild(wordClone);
                wordNode.parentNode.replaceChild(highlight, wordNode);
                return 1; //skip added node in parent
            }
        } else if ((node.nodeType === 1 && node.childNodes) && // only element nodes that have children
                !/(script|style)/i.test(node.tagName) && // ignore script and style nodes
                !(node.tagName === nodeName.toUpperCase() && node.className === className)) { // skip if already highlighted
            for (var i = 0; i < node.childNodes.length; i++) {
                i += jQuery.highlight(node.childNodes[i], re, nodeName, className);
            }
        }
        return 0;
    }
});

jQuery.fn.unhighlight = function (options) {
    var settings = { className: 'highlight', element: 'span' };
    jQuery.extend(settings, options);

    return this.find(settings.element + "." + settings.className).each(function () {
        var parent = this.parentNode;
        parent.replaceChild(this.firstChild, this);
        parent.normalize();
    }).end();
};

jQuery.fn.highlight = function (words, options) {
    var settings = { className: 'highlight', element: 'span', caseSensitive: false, wordsOnly: false };
    jQuery.extend(settings, options);

    if (words.constructor === String) {
        words = [words];
    }
    words = jQuery.grep(words, function(word, i){
      return word != '';
    });
    words = jQuery.map(words, function(word, i) {
      return word.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    });
    if (words.length == 0) { return this; };

    var flag = settings.caseSensitive ? "" : "i";
    var pattern = "(" + words.join("|") + ")";
    if (settings.wordsOnly) {
        pattern = "\\b" + pattern + "\\b";
    }
    var re = new RegExp(pattern, flag);

    return this.each(function () {
        jQuery.highlight(this, re, settings.element, settings.className);
    });
};

