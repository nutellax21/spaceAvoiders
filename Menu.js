
var n, g, c, d;

var character = ["Leo", "Annie", "June", "Quincy"];

var pic = ["http://2.bp.blogspot.com/-nsaFdeB27nA/VEq8tWss2pI/AAAAAAAAnLM/JouGrbl0KsI/s1600/leo2_by_kaylor2013-d83jdml.png", 
           "http://vignette1.wikia.nocookie.net/disneyjuniorpedia/images/e/e3/Ein15.gif/revision/latest?cb=20111002115426",
          "http://4.bp.blogspot.com/-oXWIQVwhxvY/VEq8qjOuJ6I/AAAAAAAAnJA/DbSsj0a5quk/s1600/fotoflexer_photo_june_by_kaylor2013-d83jdnr.png",
           "http://vignette4.wikia.nocookie.net/disneyjuniorpedia/images/9/9a/Quincy.gif/revision/latest?cb=20111120170628" ];


$("button").click(function(){ 

  n = $("[name=hname]").val();
  g = $("[name=character]:checked").val();


  if(!checkForEmptyName(n)) {
    alert( "Name is null" );
  }

  d = generateDescription();
  // checkForZeroIndex()

  showNhide();
});


function generateDescription() {
  var t = "";
  var idx = 0;
  var gn = $("[name=character]:checked")[0];
  
  $("img").attr("src", pic[idx]);
  
  t += character[idx] + " is a " + $(gn).next().text() + ", ";
  
  
function checkForEmptyName(str) {
  if(str === "" || str === null) {
    return false;
  }
  return true;
}