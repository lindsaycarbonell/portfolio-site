console.log("navigate.js");

var portLinks = ['orange-elections.html', 'j586-semifinal.html', 'care.html'];
var i = 0;
var fullLoc = document.location.href;
var fileName = document.location.href.match(/[^\/]+$/)[0];
var newLoc;

$('.r-arrow').click(function(){
  console.log("current location: " + fullLoc);
  console.log("r arrow click!");
  if(i != (portLinks.length-1)){
    i++;
    console.log("current array: " + portLinks[i]);
  }else{
    i=0;
    console.log("current array: " + portLinks[i]);
  }

  newLoc = fullLoc.replace(fileName, portLinks[i]);
  console.log(newLoc);

  //window.location.href = 'file:///Users/lindsaycarbonell/Documents/REPOS/portfolio-site/portfolio/' + portLinks[i];
  window.location.href = newLoc;

});
