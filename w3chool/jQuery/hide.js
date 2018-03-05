$(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
    });

    $("button").click(function() {
      $(".test").hide();
    })

    $("p").dblclick(function() {
      $(this).hide();
    })

    //mouseleave
    //mouseenter
    $("#p1").mousedown(function(){
    alert("You entered p1!");
});
});
