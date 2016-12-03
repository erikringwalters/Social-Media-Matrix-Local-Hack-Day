//bunch of arrays specifying where the drops start
var xPositions = [];
var yPositions = [];
var colors = [];
var rainDropPositionsX = [];
var color5 = ({r:100,g:93, b:187});
for (var i = 0; i < 5; i++) {
    xPositions[i] = random(0,400);
    yPositions[i] = random(-1000, 0);
    var randomColor = ({r: random(0,255),g: random(0,255), b: random(0,255)});
    colors[i] = randomColor;
    rainDropPositionsX[i] = random(0, 400);
}
/*var xPositions = [random(0,400),random(0,400),random(0,400),random(0,400),random(0,400)];
var yPositions = [random(-1000, 0),random(-1000, 0),random(-1000, 0),random(-1000, 0),random(-1000, 0)];
var rainDropPositionsX = [random(0,400),random(0,400),random(0,400),random(0,400),random(0,400)];
var rainDropPositionsY = [random(-1000, 0),random(-1000, 0),random(-1000, 0),random(-1000, 0),random(-1000, 0)];

//makes the color variances
var color1 = ({r:100,g:200, b:255});
var color2 = ({r:100,g:88, b:211});
var color3 = ({r:100,g:92, b:144});
var color4 = ({r:100,g:76, b:248});
var color5 = ({r:100,g:93, b:187});
var colors = [color1, color2, color3, color4, color5];
*/
draw = function() {
    background(204, 247, 255);
  imageMode(CENTER);
  
  //aiming to draw a raindrop as the mouse is clicked
  
//draws the blue gems
    for (var i = 0; i < xPositions.length; i++) {
 var rainDropx = rainDropPositionsX[i] + random(-10, 10);
               image(getImage("cute/GemBlue"),rainDropPositionsX[i], yPositions[i], 50, 50);
}

    for (var i = 0; i < xPositions.length; i++) {
        noStroke();
        fill(colors[i].r, colors[i].b, colors[i].g);
        ellipse(xPositions[i], yPositions[i], 10, 10);
        yPositions[i] += 5;
       
    
        if(yPositions[i] >= 400){
            yPositions[i] = 0;
        }
    }
    
};
//funtion to add raindrops when mouse is clicked
var mouseClicked = function() {
    //xPositions.push(mouseX);
   //yPositions.push(mouseY);
    xPositions[xPositions.length] = random(0,400);
    yPositions[yPositions.length] = 0;
    var randomColor = ({r: random(0,255),g: random(0,255), b: random(0,255)});
    colors[colors.length] = randomColor;
    rainDropPositionsX[rainDropPositionsX.length] = random(0, 400);
};
