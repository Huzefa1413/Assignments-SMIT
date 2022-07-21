var navTop = -45;
const myNavInterval = setInterval(myNavTimer, 50);
function myNavTimer(){
    if(navTop>=0){
        myNavStopFunction();
    }
    navTop++;
    document.getElementById("navbar").style.top = navTop+"px";
}
function myNavStopFunction(){
    clearInterval(myNavInterval);
}

var head1Left = -750;
const myhead1Interval = setInterval(myhead1Timer, 1);
function myhead1Timer(){
    if(head1Left>=375){
        myhead1StopFunction();
    }
    head1Left++;
    document.getElementById("heading1").style.left = head1Left+"px";
}
function myhead1StopFunction(){
    clearInterval(myhead1Interval);
}

var head2Bottom = 0;
const myhead2Interval = setInterval(myhead2Timer, 14);
function myhead2Timer(){
    if(head2Bottom>=320){
        myhead2StopFunction();
    }
    head2Bottom++;
    document.getElementById("heading2").style.bottom = head2Bottom+"px";
}
function myhead2StopFunction(){
    clearInterval(myhead2Interval);
}