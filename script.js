const stackBtn = document.getElementById("stack");
const spreadBtn = document.getElementById("spread");

function stack() {
  console.log('stacking');
  $(".card").each(function(e) {

    setTimeout(function() {
      $(".card").eq(e).attr("class", "card");
    }, e * 150)
    
  }
  
});

function spread() {
  console.log('spreading');
  $(".card").each(function(e) {

    setTimeout(function() {
      $(".card").eq(e).attr("class", "card ani" + e);
    }, e * 150)
    
  });
  
}

stackBtn.addEventListener("click", stack);
spreadBtn.addEventListener("click", spread);
