function preload() {

}

function setup() {

    canvas = createCanvas(640,480);
    canvas.position(250,250);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {

    fill(230,00,00);
    stroke(00,230,90);
    circle(50,50,80);

    fill(230,00,00);
    stroke(00,230,90);
    circle(585,50,80);

    fill(00,40,213);
    stroke(00,230,90);
    rect(10,50,80,500)

    fill(00,40,213);
    stroke(00,230,90);
    rect(545,50,80,500)

    image(video,0,0,400,480);
}

function take_snapshot() {
    
    save('student_name.png');
}
