$(window).load(function() {
var EnemyShipsSpeed= 5
var GameOver= false
var EnemyShips=[]
var Iteration=0
var spaceship = $("#spaceship");
var enemy = $("#enemy");
var lives = 3 ;
var stars = 0;

var spaceshipJs = document.getElementById("spaceship");
var enemyJs = document.getElementById("enemy");
setInterval(function(){
    UpdateEnemyShips()
    DeletingEnemyShips()
    collisionofShip()
  
    if (Iteration%10==0){
        EnemyShips.push(GenerateEnemyShip())
        
    }
    Iteration++
},50) 


function GenerateEnemyShip(){
    var div = document.createElement("img");
    document.body.appendChild(div)
    div.style.position="absolute"
    var BadGuy= Math.random() < 0.80
    var x=Math.random()*window.innerWidth;
    div.style.left=x+"px"
    div.style.top="0px"
    div.style.width="50px"
    div.style.height="50px"
    if (BadGuy){
        div.src=background="Images/darth-vader.png";
        
    }else{
        div.src=background="Images/Star.png";
    }
    
    
    return {
        posx:x,
        posy:0,
        element:div,
        isBadguy:BadGuy
    }
    
}
function UpdateEnemyShips(){
    for(var i= 0;i<EnemyShips.length;i++){
        EnemyShips[i].posy += EnemyShipsSpeed
        EnemyShips[i].element.style.top=EnemyShips[i].posy+"px"
    }
    
}
function DeletingEnemyShips(){
    for(var i= 0;i<EnemyShips.length;i++){
        var OutofScreen = EnemyShips[i].posy>window.innerHeight
        if (OutofScreen){
        document.body.removeChild(EnemyShips[i].element);
         EnemyShips.splice(i,1)
         i--
        }
    }
}
function collisionofShip(){
    for(var i= 0;i<EnemyShips.length;i++){
        
        var collide2 = isCollide(spaceshipJs, EnemyShips[i].element.getBoundingClientRect())
        if (collide2){
            document.body.removeChild(EnemyShips[i].element);
             if(EnemyShips[i].isBadguy){
                 lives--
         endGame();
            $("#lives").html(lives);
             }else{
                 stars++
                 $("#stars").html(stars);
             }
             EnemyShips.splice(i,1);
             i--;
        }
    }
}

function endGame(){
    if(lives < 1){
      window.location.href = "Game_over.html";
    }
    
    
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


function isCollide(a, b) {
    var collide = false;
    
  
      b.x = b.left;
      b.y = b.top;
    if(!
        (((a.y + a.height) < (b.y)) ||
        (a.y > (b.y + b.height)) ||
        ((a.x + a.width) < b.x) ||
        (a.x > (b.x + b.width)))
    ){
        console.log(a.x);
        console.log(a.y);
        console.log(b.x);
        console.log(b.y);
        console.log(b);
    collide = true;
    }
    

return collide;
}


  function moveleft(){
      
        $('#spaceship').animate({
          
        'left' : "-=6px" //moves left
        },
        0
         );
  }
  function moveright(){
        $('#spaceship').animate({
        'left' : "+=6px" //moves left
        },
        0
        );    
  }
  function movedown(){
    $('#spaceship').animate({
        'top' : "+=6px" //moves down
        },
        0
        );  
    
  }
   function moveup(){
    $('#spaceship').animate({
        'top' : "-=6px" //moves up
        },
        0
        );  
    
  }



});