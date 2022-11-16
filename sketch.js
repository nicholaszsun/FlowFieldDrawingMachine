
var inc = 0.01;


function setup() {
  createCanvas(200, 200);
  pixelDensity(1);
  // button = createButton('stop');
  // button.mousePressed(pause);
  // button =createButton('save');
  // button.mousePressed(saved);

}

function draw() {
  loadPixels();
  for (var x = 0; x < width; x++){
    for (var y = 0; x < height; y++){
      var index = (x + y * width) * 4;
      var r = random(255);
      pixels[index+0] = r;
      pixels[index+1] = r;
      pixels[index+2] = r;
      pixels[index+3] = 255;
    }
  }
  updatePixels();
}

// function pause(){
//   noLoop();
// }
// function saved(){
//   saveCanvas('Drawing Machine Image', 'png');
// }

// function perlnoiseinitial(){
//   var x = map(noise(xoff1), 0, 1, 0, width);
//   var y = map(noise(xoff2), 0, 1, 0, height);
//   xoff1 += 0.01;
//   xoff2 += 0.01;
//   ellipse(x,y,30);
// }

// function perlnoisegraph(){
//   var xoff = start;
//   for (var x = 0; x < width; x++){
//     stroke(255);
//     var y = noise(xoff)*height;
//     vertex(x,y);
//     xoff += inc;
//
//   }
// }
