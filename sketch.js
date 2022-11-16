var points = [];                                                                //array for the starting points
var flowspd = 0.005;                                                            //var to control the speed of iteration
var r1;
var r2;
var r3;
var newBtn;
var saveBtn;

function svBtnAction(){
  saveCanvas('Flow Field Background','png');
}

function nwBtnAction(){
  clear();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  angleMode(DEGREES);
  noiseDetail(1);

  saveBtn = createButton("Save Image");
  saveBtn.mousePressed(svBtnAction);

  newBtn = createButton("New Image");
  newBtn.mousePressed();



  var density = 50;                                                             //numberof points in each row
  var space = width / density;                                                  //distance between each point

  for (var x = 0; x < width; x += space){                                       //loop to create x axis
    for (var y = 0; y < height; y += space){                                    //loop to create y axis
      var p = createVector(x + random(-10,10),y + random(-10,10))               //create vector for each x and y coordiate
      points.push(p);                                                           //adds var p to the points array
    }
  }

  shuffle(points, true);

  r1 = random(255);
  r2 = random(255);
  g1 = random(255);
  g2 = random(255);
  b1 = random(255);
  b2 = random(255);

  flowspd = random(0.002, 0.01);

}

function draw() {
  noStroke();

  if(frameCount * 2<= points.length) {
    var max = frameCount *2;
  } else {
    var max = points.length;
  }


  for (var i = 0; i < max; i++){                                                //loop for i to iterate through the points

    var r = map(points[i].x, 0, width, r1, r2);                                 //r,g,b values to imput color in the points
    var g = map(points[i].y, 0, height, g1, g2);
    var b = map(points[i].x, 0, width, b1, b2);
    var alpha = map(dist(width / 2, height / 2, points[i].x,
                       points[i].y), 0, 350, 500, 0);

    fill(r,g,b,alpha);

    var angle = map(noise(points[i].x * flowspd, points[i].y * flowspd),        //angle at which each point will move, determined by the noise function
                       0, 1, 0, 720);

    points[i].add(createVector(cos(angle), sin(angle)));                        //adds vector to each point based on the angle

    ellipse(points[i].x, points[i].y, 1);                                       //creates circle at the x and y coordinate of each point
  }
}
