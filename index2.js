
var spaceship = $("#spaceship");
var lives = 3 ;
var stars = 0;



$(window).load(function() {
  function moveleft(){
        $('#spaceship').animate({
          
        'marginLeft' : "-=3px" //moves left
        },
        0
         );
  }
  function moveright(){
        $('#spaceship').animate({
        'marginLeft' : "+=3px" //moves left
        },
        0
        );    
  }
  function movedown(){
    $('#spaceship').animate({
        'marginTop' : "+=3px" //moves down
        },
        0
        );  
    
  }
   function moveup(){
    $('#spaceship').animate({
        'marginTop' : "-=3px" //moves up
        },
        0
        );  
    
  }
  $(document).on('keydown', function(e) {
    
        if (e.keyCode == 37){ //moves the image right by changing margins on keydown
          moveleft();
        } 
        if (e.keyCode == 39){ //moves the image right by changing margins on keydown
          moveright();
        } 
        if (e.keyCode == 40){
        movedown();
        }
        if (e.keyCode == 38){
        moveup();
        }
  });
});





$("#lives").click( function(){
  
var lives = parseInt($("#lives").html());
  if(lives > 0){
    lives --;
  }
  $("#lives").html(lives);
} 
);

$("#stars").click( function(){
  
var stars = parseInt($("#stars").html());
  if(stars >= 0){
    stars ++;
  }
  $("#stars").html(stars);
} 
);

