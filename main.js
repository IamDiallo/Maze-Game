// canvas variable
var canvas;
var ctx;
var WIDTH = 1200;
var HEIGHT = 800;

// Variable Initiallization
tileW = 50;
tileH = 50;

tileRowCount = 10; //the row here 10
tileColumnCount = 10; //the column here 10

//to create a double array tile to be an array
var tiles = [];

for (c=0; c < tileColumnCount; c++){
    tiles[c] = [];
    for (r=0; r < tileRowCount; r++)
    {
        tiles[c][r] = {x: c*(tileW+3), y: r*(tileH+3), state: 'e'}; //state ise for empty
    }

}

let i = 5;
let j = 5;

tiles[i][j].state = 's';
// s for start;

var ArrPtr = [];
var Doortiles = [];
var DoorArr = [];
var Rdoor = [];     // Array Request door
var LimitDoor = 2;  // Variable to limit door request
for (r=0; r < LimitDoor; r++)
{
    Rdoor[r] = ""; //Request Door to initialize
}
RDCtr = 0;  // First pointer collom 0
//Random doors
// Left Door  ---+
//               |
//Bottom Door  ------+
//               |   |
//Up Door  --------------+
//               |   |   |
//Right Door  ---------------+
//               |   |   |   |
Doortiles[0] = "9,5|7,9|5,0|0,6";
Doortiles[1] = "9,8|6,9|8,0|0,7";
Doortiles[2] = "9,1|3,9|6,0|0,4";
Doortiles[3] = "9,2|5,9|1,0|0,5";
Doortiles[4] = "9,6|7,9|2,0|0,4";
Doortiles[5] = "9,7|8,9|5,0|0,6";
Doortiles[6] = "9,4|5,9|8,0|0,4";
Doortiles[7] = "9,2|3,9|7,0|0,7";
Doortiles[8] = "9,2|7,9|6,0|0,4";
Doortiles[9] = "9,7|4,9|7,0|0,8";

//alert(Doortiles[1]);
// random generator
var x = Math.floor((Math.random() * 10));


// Locate random door

DoorArr = Doortiles[x].split('|');
for (d=0; d < 4; d++)
    {
        // Setting the doors from DoorArr using ArrPtr
        ArrPtr = DoorArr[d].split(',');
        tiles[ArrPtr[0]][ArrPtr[1]].state = 'D';
    }

//BOOBS
// tiles[8][1].state = 'B';
// tiles[6][8].state = 'B';
// tiles[2][3].state = 'B';
// tiles[1][8].state = 'B';
var bombCounter = 5;
var Boombtiles = [];
var Rboomb = [];       // Array Request boomb
var LimitBoomb = 19;   // Variable to limit boomb request
var RBoomb_Ptr = 0;    // Variable random boom pointer limit up 20.
for (r=0; r < LimitBoomb; r++)
{
    Rboomb[r] = ""; //Request Boomb to initialize
}
RBCtr = 0;  // First pointer collom 0
//console.log(Rboomb);

Boombtiles[0] = "2,2|6,8|3,3|1,8|2,1|7,8|6,3|8,8|1,5|7,5|7,7|1,6|7,5|2,8|6,3|1,7|3,6|2,8|4,4|7,6";
Boombtiles[1] = "4,5|7,9|5,1|2,2|2,5|2,8|6,3|1,7|7,7|3,4|8,8|3,3|1,1|6,8|2,3|1,8|2,2|3,3|7,2|6,6";
Boombtiles[2] = "7,5|3,5|8,5|5,6|8,1|7,4|2,3|1,6|6,6|2,1|4,8|7,6|3,5|4,3|2,2|1,1|4,4|7,7|5,4|2,6";
Boombtiles[3] = "4,4|7,7|5,4|2,6|8,1|6,2|4,3|7,8|8,1|6,8|3,3|6,6|2,1|6,5|2,3|1,6|5,1|8,8|2,3|5,8";
Boombtiles[4] = "3,6|2,8|4,1|7,6|7,5|4,3|2,2|1,1|2,5|2,2|3,3|6,6|8,1|6,5|2,3|1,6|5,1|6,8|2,3|1,8";
Boombtiles[5] = "4,4|3,7|5,4|2,6|8,1|4,8|4,3|1,5|7,1|6,8|2,3|1,8|7,7|5,2|1,6|8,3|6,8|4,2|8,8|3,3";
Boombtiles[6] = "5,8|7,3|3,5|6,6|8,1|3,7|5,3|1,4|4,5|2,8|6,3|1,7|7,7|3,3|2,2|1,3|1,1|6,8|1,1|8,3";
Boombtiles[7] = "3,5|7,7|6,5|8,6|8,1|4,4|1,3|6,6|1,1|6,5|2,3|4,8|8,5|6,8|3,3|1,8|7,2|5,4|1,6|8,8";
Boombtiles[8] = "4,4|3,3|7,2|8,6|8,8|3,8|2,3|2,2|5,4|7,6|2,5|4,3|2,1|1,1|7,5|3,5|6,3|2,6|8,1|7,4";
Boombtiles[9] = "5,7|3,4|6,7|8,3|6,1|1,8|2,2|1,8|3,3|7,2|1,6|8,8|2,6|2,5|1,2|6,8|4,4|1,8|7,7|5,4";

//var BoombPtr = [];
var BoombArr = [];
BoombArr = Boombtiles[x].split('|');
for (b=0; b <20; b++){

    // Setting the boobs from BombArr  using BoomPtr
    ArrPtr = BoombArr[b].split(',');
   
    tiles[ArrPtr[0]][ArrPtr[1]].state = 'B';
}
// modal
// Get the modals for the game
var modal = document.getElementById('myModal');
var modalLost12 = document.getElementById('myModalLost');
var modal2 = document.getElementById('myModal2');

var modal3 = document.getElementById('myModal3');
var modal4 = document.getElementById('myModal4');
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

// When the user clicks the button, open the modal
modelfungo = function() {
    modalLost12.style.display = "block";
    var head1 = document.querySelector(".gameheadLost");
    head1.textContent = "You Lost"

}

modelHelp = function() {
    console.log("func called")
    modal3.style.display = "block";
    var head1 = document.querySelector(".gamehead3");
    head1.textContent = "Giving Up"

}

lostPoint = function() {
    console.log("func called")
    modal2.style.display = "block";
    y = document.querySelector(".gamehead2");
    y.textContent = "You Lost One Point";
}
OutOfBound = function() {
    console.log("func called")
    modal2.style.display = "block";
    y = document.querySelector(".gamehead2");
    y.textContent = "Wrong Move, Please Try Again";

}

modelfunwin = function() {
    console.log("func called")
    modal.style.display = "block";
    z = document.querySelector(".gamehead");
    z.textContent = "Congrats! You Win"

}

document.getElementById("demo").addEventListener("click", myFunction);
function myFunction() {
    document.location.reload();
}


function closeX3(){
    modal.style.display = "none";
    document.location.reload();
}
function closeX(){
        modal2.style.display = "none";
    }
function closeX2(){
    modal3.style.display = "none";
}

function rect(x,y,w,h, state)
{
    if(state == 's')
    {
        ctx.fillStyle = "#00ff00";
    }
    else if(state == 'D') //Door
    {
        ctx.fillStyle = "#AAAAAA";
    }
    else if (state == 'e') // empty fields
    {
        ctx.fillStyle = "#AAAAAA";
    }
    else if (state == 'B') // hidden bomb
    { 
      ctx.fillStyle = "#AAAAAA";
       
    }
    else if( state == 'M') // Movement trajectory of player
    {
        ctx.fillStyle = "Yellow";
    }
    else if( state == 'C') // Shown bomb
    {
        ctx.fillStyle = "RED";
    }
    else if( state == 'CD') // shoen door
    {
        ctx.fillStyle = "white";
    }
// canvas drawing functions
    ctx.beginPath();
    ctx.rect(x,y,w,h);
    ctx.closePath();
    ctx.fill();

}
function draw()
{
    for(c=0; c < tileColumnCount; c++)
    {
        for(r=0; r < tileRowCount; r++)
        {
            rect(tiles[c][r].x, tiles[c][r].y, tileW, tileH, tiles[c][r].state);
        }
    }
}

// initialise the game
function init()
{
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
   document.getElementById("counter").innerHTML = "Number of Point:" +bombCounter;

    return setInterval( draw, 10);
}
let wP =0, sP=0, aP=0, dP=0;

// keys event and call a function to execute
function myDown(evt)
{
        var handled = false;
        switch(evt.keyCode)
        {
            case 38:  /* Up arrow was pressed */
                jmove("-");
                break;
            case 40 :  /* Down arrow was pressed */
                jmove("+");
                break;
            case 37:  /* Left arrow was pressed */
                imove("-");
                break;
            case 39:  /* Right arrow was pressed */
                imove("+");
                break;
            // keyboard
            case 87:  /* Up arrow was pressed */
                jmove("-");
                break;
            case 83 :  /* Down arrow was pressed */
                jmove("+");
                break;
            case 65:  /* Left arrow was pressed */
                imove("-");
                break;
            case 68:  /* Right arrow was pressed */     
                imove("+");
                break;
            case 66:
                helpBom();
                break;
            case 69:
                helpDoor();
                break;
            case 78:
                modelfungo();
        }
}

//
function imove(act)
{
    // check the position of player and action D or B
    var ii = i;
    var jj = j; 
    if (act == "-") {
        ii = ii - 1;
        if (ii == -1) {
            ii = 0;
            //console.log(i);
           // alert("outBound");
           OutOfBound();
        }
    }
    else {
       // ii = ii + 1;
        ii = ii + 1;
        
        if (ii > 9) {
            ii = 9;
            //  console.log(i);
             //alert("outBound"); 
            OutOfBound();     
        }  
    }  
    // Check if door
    if (tiles[ii][jj].state == 'D' ||  tiles[ii][jj].state == 'CD') {
        tiles[i][j].state = 'e';
        draw();
        i = ii;
        tiles[i][j].state = 's';
        draw();
        modelfunwin();
       // alert("You Wom!!!");
    }
    // Check if bomb
    if (tiles[ii][jj].state == 'B' ||  tiles[ii][jj].state == 'C') {
        tiles[i][j].state = 'M';
        draw();
        i = ii;
        tiles[i][j].state = 's';
        draw();
        bombCounter = bombCounter - 1;
        if (bombCounter >= 1)
        {
            lostPoint();
        }
        document.getElementById("counter").innerHTML ="Number of Point:" + bombCounter;

        if(bombCounter <= 0)
        {
           // alert("You Lost!!! boomb Count" + bombCounter);
          
            bombCounter = 0;
            modelfungo();         
        }
    }
    // Player Movement
    else {
        tiles[i][j].state = 'M';
        draw();
        if (act == "-") {
           i = i - 1;
           if (i <0) {
               i = 0;
           }   
        }
        else {
            i = i + 1;
           
            if (i > 9) {
                i = 9;    
            }
        }
        tiles[i][j].state = 's';
        draw();
    }    
}


function jmove(act)
{
    // check the position and action D or B
    var ii = i;
    var jj = j;
    if (act == "-") {
        jj = jj - 1;
        if (jj == -1) {
            jj = 0;
             //alert("outBound");
            OutOfBound();
        }
    }
    else {
        jj = jj + 1;
       // jj = jj + 1;
        if (jj > 9) {
            jj = 9;
           // alert("outBound");
           OutOfBound();
        }
    } 
   // Check if door
    if (tiles[ii][jj].state == 'D' ||  tiles[ii][jj].state == 'CD') {
        tiles[i][j].state = 'e';
        draw();
        j = jj;
        tiles[i][j].state = 's';
        draw();
        modelfunwin();
       // alert("You Wom!!!");
      
    }
    // Check if bomb
    if (tiles[ii][jj].state == 'B' ||  tiles[ii][jj].state == 'C') {
        tiles[i][j].state = 'M';
        draw();
        j = jj;
        tiles[i][j].state = 's';
        draw();
        bombCounter = bombCounter - 1;
       if (bombCounter >= 1)
       {
           lostPoint();
       }
        document.getElementById("counter").innerHTML = "Number of Point:" +  bombCounter;

        if(bombCounter <= 0)
        {
            bombCounter = 0;
            modelfungo();
        }
    }
    // Player Movement
    else {
        tiles[i][j].state = 'M';
        draw();
        if (act == "-") {
           j = j - 1;
           if (j < 0) {
            j = 0;
           }    
        }
        else {
            j = j + 1;
            if (j > 9) {
                j = 9;
            }
        }
        tiles[i][j].state = 's';
        draw();
    }  
}
// find a boomb
function helpBom(){
    var loopsw = 0;  // Use loop the process to validate the correct boomb to open
    var z = 0;       // Pointer to locate previous Boomb.
    var invsw = 0;   // Invalid data switch.
    if(bombCounter > 1){
        do {
            if (Rboomb[RBCtr] == "") {
                // Setting the doors from BoombArr using ArrPtr
                if (RBCtr > 0) {
                    z = RBCtr - 1;
                    invsw = 0;
                    for (r=0; r < z; r++)
                    {
                        if (BoombArr[RBoomb_Ptr] == Rboomb[r]) {     // Invalid Repeated Value
                            invsw = 1;
                        }
                    }          
                }
                if (invsw == 1) {
                    RBoomb_Ptr = RBoomb_Ptr + 1;
                    if (RBoomb_Ptr == 19 ) {
                        RBoomb_Ptr = 0;
                    }
                }
                else {
                    // Checking if valid boom otherwise loop again          
                    Rboomb[RBCtr] = BoombArr[RBoomb_Ptr];
                    ArrPtr = BoombArr[RBoomb_Ptr].split(',');
                    tiles[ArrPtr[0]][ArrPtr[1]].state = 'C';
                    draw();
                    loopsw = 1;                                     
                }
            }
        } while (loopsw == 0);
        bombCounter = bombCounter - 1;
        RBCtr = RBCtr + 1;
        RBoomb_Ptr = RBoomb_Ptr + 1;
        if (RBoomb_Ptr == 19 ) {
            RBoomb_Ptr = 0;
        }
        document.getElementById("counter").innerHTML = "Number of Point:" +  bombCounter;
        modelHelp();
    }
}

// FIND A DOOR
function  helpDoor(){
    var e = x;  // Store d to e and manipulate the pointer to choose the request door randomly.
    var z = 0;  // Pointer to locate previous door.
    var loopsw = 0;  // Use loop the process to validate the correct door to open
    // Checking if d pointer more than 3 and set e to 3 in order to locate the DoorArr[e] using e pointer.
    if (x > 3) {    
        e = 3;
    }  
    // Check for Request Door Counter Activated with limited door to open
    if (RDCtr < LimitDoor && bombCounter >= 3) 
    {
        do {
            if (Rdoor[RDCtr] == "") {
                    // Setting the doors from DoorArr using ArrPtr
                    if (RDCtr > 0) {
                        z = RDCtr - 1;
                        if (DoorArr[e] == Rdoor[z]) {     // Invalid Repeated Value
                            if ( e !=  0) {
                                e = e - 1;
                            } else {
                                e = e + 1;
                            }           
                        }
                    }
                    // Checking if valid door otherwise loop again
                    if (DoorArr[e] != Rdoor[z]) {
                        Rdoor[RDCtr] = DoorArr[e];
                        ArrPtr = DoorArr[e].split(',');
                        tiles[ArrPtr[0]][ArrPtr[1]].state = 'CD';
                        draw();
                        loopsw = 1;
                    }
            }           
        } while (loopsw == 0);            
        bombCounter = bombCounter - 2;
        RDCtr = RDCtr + 1;
        document.getElementById("counter").innerHTML = "Number of Point:" +  bombCounter;
        modelHelp();
    }   
}

init();
window.addEventListener('keydown',myDown,true);
