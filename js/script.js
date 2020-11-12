$(document).ready(function() {
    $('#fullpage').fullpage({
        //options here
        autoScrolling: true,
        scrollHorizontally: true,
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9', 'page10', 'page11', 'page12'],
    });

    // move to each selected page
    $(document).on('click',  '#toAbout', function(){
      fullpage_api.moveTo('page2',1);
    });
    
    $(document).on('click',  '#toPoster', function(){
      fullpage_api.moveTo('page3',1);
    });

    $(document).on('click',  '#toProject', function(){
      fullpage_api.moveTo('page4',1);
    });

    $(document).on('click',  '#toReflection', function(){
      fullpage_api.moveTo('page11',1);
    });

    $(document).on('click',  '#toReferences', function(){
      fullpage_api.moveTo('page12',1);
    });

    $(document).on('click',  '#top-button', function(){
      fullpage_api.moveTo('page1',1);
    });

    //methods
    $.fn.fullpage.setAllowScrolling(true);
});

// change the back-to-top image src (hover)
$("#top").hover(function(){
    $(this).attr('src', $(this).attr('src').replace('images/top.png','images/top-after.png'));
}, function (){
    $(this).attr('src', $(this).attr('src').replace('images/top-after.png','images/top.png'));
});



// click the button to show the popup
var popup = document.getElementById("reflection-container");

var btn = document.getElementById("B-button");

var span = document.getElementsByClassName("close-button")[0];

btn.onclick = function() {
    popup.style.display = "block";
}

span.onclick = function() {
    popup.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
}

// click the button to show the popup (Part-C)
var popupC = document.getElementById("reflection-container-C");

var btnC = document.getElementById("C-button");

var spanC = document.getElementsByClassName("close-button-C")[0];

btnC.onclick = function() {
    popupC.style.display = "block";
}

spanC.onclick = function() {
    popupC.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == popupC) {
    popupC.style.display = "none";
  }
}
