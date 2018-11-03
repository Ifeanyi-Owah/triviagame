var inputs = 7;
console.log(inputs);
// first CGI Movie
var $firstCgiMovie = "The Lion King";
var $cgi =  $("input[name ='CGI']" );
// spice girls
var $spiceGirlName = "Sugar Spice";
var $spiceGirls =  $("input[name ='Spice Girls']" );
// Disney song
var $disneyCircleSong = "Frozen";
var $disney =  $("input[name ='disney']" );
// NBA 90s
var $nbaTeam = "Chicago Bulls";
var $nba =  $("input[name ='NBA']" );
// Teen spirit
var $hitRockSong = "Nirvana";
var $musicGroup =  $("input[name ='music group']" );
// Fresh prince
var $freshPrinceLine = "Dice";
var $freshPrince =  $("input[name ='Fresh Prince']" );
// Doug
var $doug =  $("input[name ='doug']" );
var $dougFriend = "Mark";

// timer
var $timer = $("#timer");

// container
var $container = $("#container");

// button container
var $btnContainer = $("#button_container");

// done button
var doneBtn = $("#all_done");

// win count
var winCount = 0;
// loose count
var looseCount = 0;
// unchecked
var unchecked = 0;
// countdown
var countdown = 60;

$(document).ready(function(){

    // cgi movie event handler
 $cgi.change(function(){
       var $selectedCgi = $cgi.filter(function(){
           return this.checked;
       });
       console.log($selectedCgi .val());
       if($selectedCgi.val() === $firstCgiMovie){
         winCount++;
         console.log(winCount);
       }else{
        looseCount++;
        console.log(looseCount);
    }
   });

//    spiceGirls event handler

   $spiceGirls.change(function(){
    var $selectedSpiceGirls = $spiceGirls.filter(function(){
        return this.checked;
    });
    console.log($selectedSpiceGirls .val());
    if($selectedSpiceGirls.val() === $spiceGirlName){
      winCount++;
      console.log(winCount);
    }else{
        looseCount++;
        console.log(looseCount);
    }
});

//    Disney event handler
   $disney.change(function(){
    var $selectedDisneySong = $disney.filter(function(){
        return this.checked;
    });
    console.log($selectedDisneySong.val());
    if($selectedDisneySong.val() === $disneyCircleSong){
       winCount++;
       console.log(winCount);
}else{
    looseCount++;
    console.log(looseCount);
}
});
    
    // nba star
    $nba.change(function(){
    var $selectedNba = $nba.filter(function(){
         return this.checked;
        }); 
    console.log($selectedNba.val());
    if($selectedNba.val() === $nbaTeam){
        winCount++;
        console.log(winCount);
    }else{
        looseCount++;
        console.log(looseCount);
    }
    }); 

    // hit rock song group
    $musicGroup.change(function(){
       var $selectedMusicGroup = $musicGroup.filter(function(){
           return this.checked;
       });
       console.log($selectedMusicGroup.val());
       if($selectedMusicGroup.val() === $hitRockSong){
           winCount++;
           console.log(winCount);
       }else{
        looseCount++;
        console.log(looseCount);
    }
    });

    // fresh prince

    $freshPrince.change(function(){
      var $selectedFreshPrince = $freshPrince.filter(function(){
          return this.checked;
      });
      console.log($selectedFreshPrince.val());
      if($selectedFreshPrince.val() === $freshPrinceLine){
        winCount++;
        console.log(winCount);
      }else{
        looseCount++;
        console.log(looseCount);
    }
    });

    //  dougs friend
    $doug.change(function(){
        var $selectedFriend = $doug.filter(function(){
          return this.checked;
          
        });
        console.log($selectedFriend.val());
        if($selectedFriend.val() === $dougFriend){
            winCount++;
            console.log(winCount);
          }else{
            looseCount++;
            console.log(looseCount);
        }

    });

    $("#start-game").on("click",function(){
        $btnContainer.css("display","none");
        $container.css("display","block");
        setInterval(function(){
        countdown--;
        $timer.text(countdown);
        },1000);
        if(countdown === 0){
            $container.css("display","none");
            $("#game_over").css("display","block");
            $("#correct").text(winCount);
            $("#wrong").text(looseCount);
           $("#unanswered").text(7-(looseCount+winCount));
        }
        
    });

    $(doneBtn).on("click",function(){
        $container.css("display","none");
        $("#game_over").css("display","block");
        $("#correct").text(winCount);
        $("#wrong").text(looseCount);
        $("#unanswered").text(7-(looseCount+winCount));
   });
});



