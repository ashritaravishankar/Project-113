function preload(){

}

function setup(){
    canvas = createCanvas(640,495);
    canvas.position(310,250);
    
    video = createCapture(VIDEO);
    video.hide();
    

}

function draw(){
    image(video,45,30,550,430);

    //green

    stroke(0,0,0);
    fill(0, 255, 0);

    rect(40, 30, 5, 430);
    rect(595, 30, 5, 430);

    rect(40, 30, 560, 5);
    

    rect(40, 460, 560, 5);



    
   

    //orange
    stroke(0,0,0);
    fill(255,165,0);

    rect(30, 30, 8, 430);
    rect(602, 30, 8, 430);


    rect(40, 20, 560, 5);
    


    rect(40, 470, 560, 5);


    


//circle diagonal
    stroke(0,0,0);
    fill(255, 230, 0);

    ellipse(40, 30, 45, 55);
    ellipse(595, 30, 45, 55);
    ellipse(40, 460, 45, 55);
    ellipse(595, 460, 45, 55);

//side squares
    fill(0,100,200);
    stroke(255, 255, 255);

    rect(10, 62, 20, 20,0,100,100,0);
    rect(10, 400, 20, 20,100,0,0,100);
    
    rect(611, 62, 20, 20,0,100,100,0);
    rect(611, 400, 20, 20,100,0,0,100);
    
   


//sq_pink
fill( 255, 16, 240);
    stroke(25, 5, 55);

    rect(50, 40, 10, 12);
    rect(400, 240, 10, 12);
    rect(100, 210, 10, 12);



//sq_violet
fill( 127, 0, 255);
    stroke(25, 5, 55);

    rect(170, 251, 10, 12);
    rect(111, 226, 10, 12);
    rect(560, 150, 10, 12);
   

//sq_blue
fill(135,206,250);
    stroke(25, 5, 55);

    rect(90, 460, 10, 12);
    rect(519, 158, 10, 12);
    rect(390, 500, 10, 12);
    rect(290, 239, 10, 12);


    //sq_green
fill( 0, 255, 0);
stroke(25, 5, 55);

rect(199, 230, 10, 12);
rect(299, 299, 10, 12);
rect(357, 400, 10, 12);


//sq_yellow
fill( 255, 0, 0);
    stroke(25, 5, 55);

    rect(70, 430, 10, 12);
    rect(500, 200, 10, 12);
    rect(300, 400, 10, 12);



    //sq_orange
fill( 255, 0, 0);
stroke(25, 5, 55);

rect(70, 430, 10, 12);
rect(500, 200, 10, 12);
rect(300, 400, 10, 12);



//sq_red
fill( 255, 0, 0);
    stroke(25, 5, 55);

    rect(70, 430, 10, 12);
    rect(500, 200, 10, 12);
    rect(300, 400, 10, 12);
   
}






   



function take_photo(){
    save('photo_with_frame.png');

}

