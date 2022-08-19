$(document).ready(function(){
    
    $(".btn2").on("mouseover", function(){
       var theBox = $(".box")[0];
       $(theBox).css("background-color","blue");
       console.log("HI")
    })

    $(".btn2").on("mouseout", function(){
        var theBox = $(".box")[0];
        $(theBox).css("background-color","purple");
        console.log("HI")
     })
    
  });

  const pushBtn = function (){
    const theBox = window.document.getElementsByClassName("box")[0];
    theBox.classList.remove("position");
    theBox.classList.add("position2");
    console.log("check")
    console.log(theBox.classList)
}


