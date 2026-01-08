const stackBtn = document.getElementById("stack");
const spreadBtn = document.getElementById("spread");

stackBtn.click(function() {
  console.log('stacking');
  $(".card").each(function(e) {

    setTimeout(function() {
      $(".card").eq(e).attr("class", "card");
    }, e * 150)
    
  });
  
});

spreadBtn.click(function() {
  console.log('spreading');
  $(".card").each(function(e) {

    setTimeout(function() {
      $(".card").eq(e).attr("class", "card ani" + e);
    }, e * 150)
    
  });
  
});
