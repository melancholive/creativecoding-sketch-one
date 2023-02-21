void setup() {
  size(800, 800);
  background(183, 243, 247);
   
  // circle details -- using for loops to create multiple circles
  noFill();
  strokeWeight(5);
  int diameter = 310;
  int temp = 0;
  stroke(231, 204, 255); // lighter purple
  for ( int x = 0; x <= 12; x++ ){
    circle(700,900,diameter);
    diameter += 30;
    temp += 10*x;
  }
  diameter = 170;
  temp = 175;
  stroke(193, 207, 247); // light blue
  for ( int x = 0; x <= 10; x++){
    circle(400,1000,diameter+temp);
    diameter += 20;
    temp += 5*x;
  }
  
  // lower left circles
  strokeWeight(2);
  stroke(231, 204, 255); // lighter purple
  fill(207, 153, 255, 50); // purple
  circle(0, 800, 1600);
  circle(0, 800, 1000);
  circle(0, 800, 600);
  circle(0, 800, 400);
  circle(0, 800, 250);
  
  // lower right circles
  stroke(255, 176, 240); // lighter pink
  fill(255, 156, 236, 50); // pink
  circle(540, 400, 600);
  circle(540, 400, 400);
  circle(540, 400, 250);
  circle(540, 400, 100);
  
  // top left circles
  stroke(245, 204, 54); // lighter orange
  fill(245, 199, 32, 50); // orange
  circle(390, 200, 600);
  circle(390, 200, 400);
  circle(390, 200, 250);
  circle(390, 200, 100);
  
  // top right circles
  stroke(252, 228, 129); // light orange
  fill(255, 255, 196, 50); // yellow
  circle(670, 100, 600);
  circle(670, 100, 400);
  circle(670, 100, 250);
  circle(670, 100, 100);
  
  // lower lotus blub
  strokeWeight(2);
  stroke(224, 112, 159); // muted pink
  fill(255, 204, 225, 50); // bright pink
  ellipse(540, 400, 80, 25);
  ellipse(540, 400, 60, 20);
  ellipse(540, 400, 40, 15);
  ellipse(540, 400, 20, 10);
  ellipse(540, 400, 10, 5);
  stroke(222, 73, 135); // dark muted pink
  fill(224, 112, 159, 175); // muted pink
  triangle(500,410, 510,415, 530,440);
  triangle(520,417, 540,420, 535,440);
  triangle(545,420, 565,415, 540,443);
  triangle(570,415, 580,410, 550,440);
  
  // lower lotus flower
  fill(255, 245, 240, 120); // light orange
  stroke(252, 189, 189); // salmon
  beginShape();
  vertex(525,380);
  vertex(510,345);
  vertex(550,280);
  vertex(575,355);
  vertex(560,385);
  vertex(525,380);
  endShape();
  beginShape();
  vertex(515,385);
  vertex(500,350);
  vertex(450,320);
  vertex(470,400);
  vertex(490,405);
  vertex(495,395);
  vertex(515,385);
  endShape();
  beginShape();
  vertex(570,385);
  vertex(585,355);
  vertex(640,320);
  vertex(615,385);
  vertex(585,400);
  vertex(580,390);
  vertex(570,385);
  endShape();
  quad(585,410, 615,390, 650,355, 630,400);
  beginShape();
  vertex(580,420);
  vertex(625,415);
  vertex(665,400);
  vertex(610,440);
  vertex(570,430);
  vertex(580,420);
  endShape();
  quad(525,445, 495,415, 435,405, 470,440);
  beginShape();
  vertex(535,450);
  vertex(525,470);
  vertex(490,475);
  vertex(480,470);
  vertex(515,450);
  vertex(535,450);
  endShape();
  beginShape();
  vertex(540,450);
  vertex(560,470);
  vertex(585,470);
  vertex(600,460);
  vertex(563,440);
  vertex(555,448);
  vertex(540,450);
  endShape();
  fill(250, 164, 137, 120); // salmon
  stroke(250, 164, 137); // salmon
  beginShape();
  vertex(585,415);
  vertex(620,410);
  vertex(630,405);
  vertex(645,375);
  vertex(620,400);
  vertex(585,415);
  endShape();
  quad(490,410, 475,395, 453,355, 465,405);
  quad(570,435, 610,445, 650,415, 610,435);
  beginShape();
  vertex(425,405);
  vertex(475,435);
  vertex(525,445);
  vertex(470,450);
  vertex(445,435);
  vertex(425,405);
  endShape();
  beginShape();
  vertex(460,460);
  vertex(490,455);
  vertex(505,465);
  vertex(535,465);
  vertex(520,475);
  vertex(485,480);
  vertex(460,460);
  endShape();
  beginShape();
  vertex(545,465);
  vertex(570,460);
  vertex(585,445);
  vertex(610,455);
  vertex(585,475);
  vertex(545,465);
  endShape();
  
  // bottom flower stem
  noFill();
  stroke(222, 73, 135); // dark muted pink
  bezier(542,464,549,585,347,588,412,730);
  bezier(536,474,542,583,340,586,405,728);
  bezier(849,175,621,255,741,502,522,530);
  bezier(849,175,621,259,741,506,520,534);
  bezier(843,183,615,263,735,510,516,538);
  bezier(454,-85,446,219,706,146,683,359);

  // top flower stem
  stroke(110, 61, 138); // dark purple
  bezier(45,-5,210,55,285,175,350,335);
  bezier(60,-10,220,65,295,185,355,335);
  bezier(75,-15,230,75,305,195,360,335);
  bezier(387,291,320,550,677,614,532,811);
  bezier(381,293,314,552,671,616,526,813);
  bezier(381,293,310,556,667,620,522,817);
  bezier(862,458,686,418,587,600,563,686);
  bezier(862,465,686,425,587,607,563,693);
   
  // top leaf -- inside
  stroke(96, 119, 181); // blue
  fill(193, 207, 247, 150); // light blue
  quad(140,340, 90,310, 85,325, 95,340);
  triangle(95,305, 125,305, 140,335);
  triangle(130,305, 215,315, 145,335);
  triangle(150,340, 220,320, 175,345);
  quad(180,350, 230,320, 270,345, 220,370);
  quad(225,375, 275,350, 280,350, 245,385);
  quad(250,385, 285,350, 300,350, 310,375);
  triangle(315,375, 305,350, 335,360);
  triangle(340,355, 320,350, 375,340);
  
  // top leaf -- outside
  stroke(21, 34, 71); // dark blue
  fill(96, 119, 181, 175); // blue
  quad(145,345, 175,352, 240,390, 270,430);
  triangle(245,390, 275,387, 297,450);
  triangle(280,387, 310,380, 305,460);
  triangle(315,380, 340,365, 310,460);
  triangle(347,360, 380,345, 315,455);
  quad(390,340, 410,335, 420,355, 320,455);
  triangle(425,360, 460,362, 390,395);
  
  // top leaf stem
  noFill();
  bezier(303,465,235,672,404,720,409,804);
  bezier(307,469,239,676,408,724,413,808);
  bezier(312,466,244,673,413,721,418,805);
  bezier(277,575,231,503,135,466,-8,491);
  bezier(283,583,237,511,141,474,-2,499);
  bezier(283,587,237,515,141,478,-2,503);
  bezier(185,518,112,519,9,574,-26,672);
  bezier(193,520,120,521,17,576,-18,674);
  
  // top lotus
  fill(255, 252, 247, 120); // light yellow
  stroke(255, 235, 251); // light pink
  quad(455,80, 415,205, 375,255, 365,195);
  triangle(420,210, 460, 80, 450,200);
  triangle(460,145, 515,100, 455,200);
  beginShape();
  vertex(370,180);
  vertex(330,125);
  vertex(345,230);
  vertex(370,260);
  vertex(380,215);
  vertex(370,180);
  endShape();
  beginShape();
  vertex(435,228);
  vertex(460,210);  
  vertex(505,170);
  vertex(480,213);
  vertex(440,245);
  vertex(397,255);
  vertex(435,228);
  endShape();
  beginShape();
  vertex(385,240);
  vertex(390,200);
  vertex(425,165);
  vertex(435,200);
  vertex(420,225);
  vertex(375,265);
  vertex(385,240);
  endShape();
  fill(255, 204, 225, 170); //  pink
  stroke(255, 140, 187); // bright pink
  triangle(380,260, 415,220, 450,210);
  quad(380,265, 420,235, 475,220, 435,260);
  triangle(370,270, 345,240, 370,275);
  fill(117, 93, 176, 175); // purple
  stroke(110, 61, 138); // dark purple
  triangle(375,270, 415,270, 375,290);
  
  
  noStroke();
}

void draw(){
  frameRate(12);
  println(mouseX + " : " + mouseY);
}