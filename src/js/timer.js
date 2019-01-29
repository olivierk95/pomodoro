var minutes= document.getElementById("minutes").innerHTML;
var minutesNum = parseInt(minutes);

var seconds= document.getElementById("seconds").innerHTML;
var secondsNum = parseInt(seconds);

//adding minutes
var addMinute= document.getElementById("add");
addMinute.addEventListener("click", () => {
    minutesNum += 1;
    document.getElementById("minutes").innerHTML = minutesNum;
})

//removing minutes
var removeMinute= document.getElementById("remove");
removeMinute.addEventListener("click", () => {
    minutesNum -= 1;
    document.getElementById("minutes").innerHTML = minutesNum;
})

//starting & stopping the timer
var startChrono= document.getElementById("start");
var buttonStart = true;

startChrono.addEventListener("click", function reduceTimer() {

    buttonStart = !buttonStart;

    if (buttonStart==false) {
        startChrono.innerHTML = "Stop";
        
        //Timer decreasing
        function secondsDecreasing() {
            if(minutesNum>0 && secondsNum==0 && buttonStart==false) {
                secondsNum = 59;
                minutesNum-=1;
                zeroSeconds = secondsNum;
            } else if(minutesNum>=0 && secondsNum>10 && buttonStart==false) {
                secondsNum-=1;
                zeroSeconds = secondsNum;
            } else if(minutesNum>=0 && secondsNum>0 && buttonStart==false) {
                secondsNum-=1;
                zeroSeconds = "0" + secondsNum;
            }

            document.getElementById("seconds").innerHTML = zeroSeconds;
            document.getElementById("minutes").innerHTML = minutesNum;
        };
        var chrono = setInterval(secondsDecreasing, 1000);

    } else if (buttonStart==true) {
        startChrono.innerHTML = "Start";
    };

});