function setup() {
  createCanvas(windowWidth,windowHeight);
  noFill();
}

function draw() {
  background(0);

  var density = map(mouseX,0,width, 20,50);
  
  for(var x=50; x <= width-50;x+=density){
    for(var y = 50; y < height-50;y+=density){
    	stroke(255);
      ellipse(x,y,100,100);
    }
  }
  
  
  
}