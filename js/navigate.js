//console.log("navigate.js");

var portLinks = ['orange-elections.html', 'j586-semifinal.html', 'reese.html'];
var i;
var fullLoc = document.location.href;
var fileName = document.location.href.match(/[^\/]+$/)[0];
var newLoc;

if(fileName == 'orange-elections.html'){
  console.log("orange elections");
  i = 0;
}else if(fileName == 'j586-semifinal.html'){
  console.log("j586-semifinal");
  i = 1;
}else if(fileName == 'reese.html'){
  console.log("reese.html");
  i = 2;
}

console.log("i = " + i);

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

$('.l-arrow').click(function(){
  console.log("current location: " + fullLoc);
  console.log("l arrow click!");
  if(i != 0){
    i--;
    console.log("current array: " + portLinks[i]);
  }else{
    i = 2;
    console.log("current array: " + portLinks[i]);
  }

  newLoc = fullLoc.replace(fileName, portLinks[i]);
  console.log(newLoc);

  //window.location.href = 'file:///Users/lindsaycarbonell/Documents/REPOS/portfolio-site/portfolio/' + portLinks[i];
  window.location.href = newLoc;

});
