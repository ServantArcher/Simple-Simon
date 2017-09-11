(function () {
    "use strict";
   var userInputs=[];
   var simonOutputs=[];
   var id, color, level=0;
   var soundBoard=["https:s3.amazonaws.com/freecodecamp/simonSound1.mp3",//green
        "https:s3.amazonaws.com/freecodecamp/simonSound2.mp3",//red

       "https:s3.amazonaws.com/freecodecamp/simonSound3.mp3", //yellow

            "https:s3.amazonaws.com/freecodecamp/simonSound4.mp3"
   //blue
       ];



    $(document).ready(function(){
        $(".start-game").click(function(){
            level++;
            startSimon();

        })
    });
    //Starts simon game.
    function startSimon(){
        console.log(level);
        $(".level-display").text(level);
        randomColor();
        var i=0;
        var simonInterval= setInterval(function() {
            id=simonOutputs[i];
            color=$("#"+id).attr("class").split(" ")[1];
            console.log(id+" "+color);
            addClassSound(id, color);
            i++;
            if(i==simonOutputs.length){
                clearInterval(simonInterval)
            }
            },1000);

    }
    //Generates random simon colors and pushes to array.
    function randomColor() {
        var random =Math.floor(Math.random()*4);
        simonOutputs.push(random);
    }
    function addClassSound(id, color){
        $("#"+id).addClass(color+"-active"); // lights up the selected color the is lit up through the simple simon game. (add in with css.)
        // playSimonSound(id);
        setTimeout(function(){
            $("#"+id).removeClass(colors+"-active")
        },500);
    }
    function playSimonSound(id){


    }


})();