let currentover = 0, currentscore = 0;
let overs = 0,score=0;;
let targetnum=0;
var scorediv;
let team = 1;
let boll = 0,wicket = 0;
let currentscorediv = document.getElementById('currentscore');
let currentoverdiv = document.getElementById('currentover');
let introdiv = document.getElementById('introdiv');
let matchstartdiv = document.getElementById('matchstart');
let notificationdiv1 = document.getElementById('notification1');
let notificationdiv2 = document.getElementById('notification2');
let targetshowdiv = document.getElementById('targetshow');
let matchdetailsdiv = document.getElementById('matchdetails');
let target = document.getElementById('targetdiv');



function currentoverfun() {
    currentoverdiv.innerText = "Over : " + currentover + "." + boll;
    return;
}

function currentscorefun() {
    currentscorediv.innerText = "Score : " + currentscore;
    return;
}
function matchend(){
    matchdetailsdiv.style.display = 'none';
    targetshowdiv.style.display = 'block';
    var k = target.innerHTML;
    notificationdiv2.innerText = "Team " + team + " play complete";
    targetnum = currentscore + 1;
    target.innerText = k + targetnum;
    team++;
    currentover = 0, currentscore = 0;
    score=0;;
    boll = 0,wicket = 0;
   return;
}

function startmatch() {
    overs = document.getElementById("over").value;
    introdiv.style.display = 'none';
    matchstartdiv.style.display = 'block';
    let h = document.getElementById('headd');
    let k = h.innerHTML;
    h.innerText = k + overs + ",Team 1 Play";
    currentoverfun();
    currentscorefun();
    wicketupdate();
    notificationdiv1.innerHTML = "Start match ";
    return;
}

function scorecalculator(score) {
    currentscore += score;
    boll++;
    if (boll == 6) {
        currentover++;
        boll = 0;
        currentoverfun();
    }
    currentscorefun();
    
    
    if (currentover == overs) {
        matchend();
    }
    return;
}
function wicketupdate(){
    
    if(wicket == 11){
        matchend();
    }
    var wicketdiv = document.getElementById('wicket');
    wicketdiv.innerHTML =  "Wickets : "+ wicket + "/11";
    wicket++ && boll++;
    if (boll == 6) {
        currentover++;
        boll = 0;
        currentoverfun();
    }
    notificationdiv1.innerHTML = "You Lose the Wicket";
    currentoverfun();
    currentscorefun();
    return;
}
function dotbollupdate(){
    currentscore += score;
    boll++;
    if (boll == 6) {
        currentover++;
        boll = 0;
        currentoverfun();
    }
    currentoverfun();
    currentscorefun();
    return;
}

function scorecalculator1() {
    scorecalculator(parseInt(document.getElementById('btnscoreval1').innerText));
    currentoverfun();
    notificationdiv1.innerHTML = "1 Run Score in this boll";
    return;
}

function scorecalculator2() {
    scorecalculator(parseInt(document.getElementById('btnscoreval2').innerText));
    currentoverfun();
    notificationdiv1.innerHTML = "2 Run Score in this boll";
    return;
}

function scorecalculator3() {
    scorecalculator(parseInt(document.getElementById('btnscoreval3').innerText));
    currentoverfun();
    notificationdiv1.innerHTML = "3 Run Score in this boll";
    return;
}

function scorecalculator4() {
    scorecalculator(parseInt(document.getElementById('btnscoreval4').innerText));
    currentoverfun();
    notificationdiv1.innerHTML = "4 (Four)  in this boll";
    return;}


function scorecalculator5() {
    scorecalculator(parseInt(document.getElementById('btnscoreval5').innerText));
    currentoverfun();
    notificationdiv1.innerHTML = "5 Run Score in this boll";
    return;
} 

function scorecalculator6() {
    scorecalculator(parseInt(document.getElementById('btnscoreval6').innerText));
    currentoverfun();
    notificationdiv1.innerHTML = "6 (Six)  in this boll";
    return;
}
function dotbollupdate(){
    currentscore += score;
    boll++;
    if (boll == 6) {
        currentover++;
        boll = 0;
        currentoverfun();
    }
    currentoverfun();
    currentscorefun();
    if (currentover == overs) {
        matchend();
    }
    notificationdiv1.innerHTML = "Dot Boll";
    return;
}

function wideballupdate(){
    currentscore += score + 1;
    boll++;
    if (boll == 6) {
        currentover++;
        boll = 0;
        currentoverfun();
    }
    currentoverfun();
    currentscorefun();
    if (currentover == overs) {
        matchend();
    }
    notificationdiv1.innerHTML = "Wide Ball";
    return;
}

// TEAM 2 PLAY 

// play part 2 

let currentoverB = 0, currentscoreB = 0;
let scoreB=0,bollB=0,wicketB=0;
var scorediv;
let currentscoredivB = document.getElementById('currentscoreB');
let currentoverdivB = document.getElementById('currentoverB');
let notificationdiv1B = document.getElementById('notification1B');
let notificationdiv2B = document.getElementById('notification2B');
let result = document.getElementById('resultshow');
let matchhalf2B = document.getElementById('matchhalf2');
let targetdiv2 = document.getElementById('targetdiv2');
let finalresult = document.getElementById('finalresultnotification');




function currentoverfunB() {
    currentoverdivB.innerText = "Over : " + currentoverB + "." + bollB;
    return;
}

function currentscorefunB() {
    currentscoredivB.innerText = "Score : " + currentscoreB;
    if(targetnum<=currentscoreB){
        matchendB();
    }
    return;
}
function matchendB(){
    matchhalf2B .style.display = 'none';
    result.style.display = 'block';
    if(targetnum  <= currentscoreB){
       finalresult.innerText = "Congratulations Team 2"
    }
    else
    if (targetnum > currentscoreB){
        finalresult.innerText = "Congratulations Team 1"
    }

    currentoverB = 0, currentscoreB = 0;
    scoreB=0,bollB=0,wicketB=0;
   return;
}



function scorecalculatorB(scoreB) {
    currentscoreB += scoreB;
    bollB++;
    if (bollB == 6) {
        currentoverB++;
        bollB = 0;
        currentoverfunB();
    }
    currentscorefunB();
    
    
    if (currentoverB == overs) {
        matchendB();
    //     {
    //         AFTER ALL
    //     }
    }
    return;
}
function wicketupdateB(){
    
    if(wicketB == 11){
        matchendB();
 //     {
    //         AFTER ALL
    //     }
    }
    var wicketdivB = document.getElementById('wicketB');
    wicketdivB.innerHTML =  "Wickets : "+ wicketB + "/11";
    wicketB++ && bollB++;
    if (bollB == 6) {
        currentoverB++;
        bollB = 0;
        currentoverfunB();
    }
    notificationdiv1B.innerHTML = "You Lose the Wicket";
    currentoverfunB();
    currentscorefunB();
    return;
}
function dotbollupdateB(){
    currentscoreB += scoreB;
    bollB++;
    if (bollB == 6) {
        currentoverB++;
        bollB = 0;
        currentoverfunB();
    }
    currentoverfunB();
    currentscorefunB();
    return;
}

function scorecalculator1B() {
    scorecalculatorB(parseInt(document.getElementById('btnscoreval1B').innerText));
    currentoverfunB();
    notificationdiv1B.innerHTML = "1 Run Score in this boll";
    return;
}

function scorecalculator2B() {
    scorecalculatorB(parseInt(document.getElementById('btnscoreval2B').innerText));
    currentoverfunB();
    notificationdiv1B.innerHTML = "2 Run Score in this boll";
    return;
}


function scorecalculator3B() {
    scorecalculatorB(parseInt(document.getElementById('btnscoreval3B').innerText));
    currentoverfunB();
    notificationdiv1B.innerHTML = "3 Run Score in this boll";
    return;
}


function scorecalculator4B() {
    scorecalculatorB(parseInt(document.getElementById('btnscoreval4').innerText));
    currentoverfunB();
    notificationdiv1B.innerHTML = "4 (Four)  in this boll";
    return;
}


function scorecalculator5B() {
    scorecalculatorB(parseInt(document.getElementById('btnscoreval5B').innerText));
    currentoverfunB();
    notificationdiv1B.innerHTML = "5 Run Score in this boll";
    return;} 


function scorecalculator6B(){
    scorecalculatorB(parseInt(document.getElementById('btnscoreval6B').innerText));
    currentoverfunB();
    notificationdiv1B.innerHTML = "6 (Six)  in this boll";
return;
}
function dotbollupdateB(){
    currentscoreB += scoreB;
    bollB++;
    if (bollB == 6) {
        currentoverB++;
        bollB = 0;
        currentoverfunB();
    }
    currentoverfunB();
    currentscorefunB();
    if (currentoverB == overs) {
        matchendB();
         //     {
    //         AFTER ALL
    //     }
    }
    notificationdiv1B.innerHTML = "Dot Boll";
    return;
}

function wideballupdateB(){
    currentscoreB += scoreB + 1;
    bollB++;
    if (bollB == 6) {
        currentoverB++;
        bollB = 0;
        currentoverfunB();
    }
    currentoverfunB();
    currentscorefunB();
    if (currentoverB == overs) {
        matchendB();
        // {
        //     AFTER DO 
        // }
    }
    notificationdiv1B.innerHTML = "Wide Ball";
    return;
}

function startmatchB() {
    targetshowdiv.style.display = 'none';
    matchhalf2B.style.display = 'block';
    let m = document.getElementById('headdB');
    let j = m.innerHTML;
    m.innerText= j + overs + ",Team 2 Play";
    let g = targetdiv2.innerHTML + targetnum;
    targetdiv2.innerText = g;
    currentoverfunB();
    currentscorefunB();
    wicketupdateB();
    notificationdiv1B.innerHTML = "Welcome to team 2 play";
    return;
}

function restart(){
    location.reload();
    // result.style.display = 'none';
    // introdiv.style.display = 'block';
    // targetnum=0;
    // overs = 0;
    return;
}