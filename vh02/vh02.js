let playing = false;
let fingers;
let button;

function setup() {
 // createCanvas(400,500);
 //background(0,200,200);
  // specify multiple formats for different browsers
  fingers = createVideo('data/vro.mp4');
    fingers.size(windowWidth*3/4,windowHeight*3/4);

  button = createButton('play');
  button.mousePressed(toggleVid); // attach button listener
}

// plays or pauses the video depending on current state
function toggleVid() {
  if (playing) {
    fingers.pause();
    button.html('play');
  } else {
    fingers.loop();
    button.html('pause');
  }
  playing = !playing;
}
