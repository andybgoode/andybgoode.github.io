//Andy B Goode Video Player
//Copyright (C) 2019 Andrew Britton.
//All rights reserved

//Video selection onto a single player (click video name/thumbnail navigates to player + loads selected video)
//Video can be auto loaded from any webpage usig the following syntax:
//http://www.andybgoode.com/videos.html?videoRef=videoBeerBarrel
//if a single video and not a playlist, start time can be specified by adding  &videoStart=30
//Note: If the videoRef is not located then the first video is played

var videoArray = [];
var videoListHTMLID = "";
var videoPlayerHTMLID = "";

//addVideo("videoRef",isPlaylist,isHidden,"name","thumbnail","caption","youTubeID");

//Videos
addVideo("videoHoundDog",0,0,"Hound Dog","photo","You aint nothing but a Hound Dog! What fab lyrics. This Elvis style cover of the original blues classic is one of the most famous rock and roll songs of all time.","B4oriWzwbO0");
addVideo("videoJohnnyBGoode",0,0,"Johnny B. Goode","photo","'Johnny B. Goode' originally by the fantastic Chuck Berry. 'Back to the Future' is one of my favourite movies, and that track really adds energy to the film.","EvSlu1k60ow");
addVideo("videoFlyMe",0,0,"Fly Me To The Moon","photo","The definitive Frank Sinatra song from the time when holidays on jets liners were new. This was recorded live at Norton Juxta Twycross Fete.","3r-W-cvGkYI");
addVideo("videoYouMakeMeYoung",0,0,"You Make Me Feel So Young","photo","Another Frank Sinatra tune about his love for his favourite girl. All those times that make life worth living.","u5rZBDsEwBQ");
addVideo("videoTeenagerInLove",0,0,"Teenager in Love","photo","Do you remember when you were a teenager in love? It's great to hear people joining in at the chorus. This was recorded at the Dosthill Summer Vintage Fayre. I also performed this song on TCR FM at the Norton Juxta Twycross Summer Fete.","xfGqHgRePIY");
addVideo("videoHowDoYouLike",0,0,"How Do You Like Your Eggs","photo","A Dean Martin song performed by Andy B Goode and Sophie Dangerfield. What is a morning on BBC 2 without it.","SKQFrn1tmZM");
addVideo("videoMagicMoments",0,0,"Magic Moments","photo","Dean Martins song remembering those little events that make life special","TSs-vgnPoaY");
addVideo("videoSummerShowReel2016",0,0,"Summer Showreel","photo","You could play 'Name that Tune' while you listen. Snippets of many of my songs can be found in the 'Andy B Goode Summer Showreel 2016'. This was recorded live at St Pauls Church Dosthill Summer Vintage Fete. Enjoy!","f4x4ei3muL8");
addVideo("videoRnRPlaylist",1,0,"Playlist: Vintage Rock n Roll","photo","Here's some of my 1950s/60s Rock and Roll hits, including: Hound Dog, Johnny B. Goode, Teenager in Love, This Ole House, Great Balls of Fire and more. Feel free to sing along.","PLTlGVrSbUuPhcs2zGuGratWyUqKBq169Z");
addVideo("videoGreatBalls",0,0,"Great Balls of Fire","thumbnail","The Fantastic Jerry Lee Lewis smash. It's fun to hear and it's fun sing!","4xVeQbkKNmQ");
addVideo("videoThisOleHouse",0,0,"This Ole House","thumbnail","Originally by Rosemary Clooney the covered by Shaking Steves in the 80s this song has soo much energy.","bDCP4a0qJ-M");
addVideo("videoFrosty",0,1,"Frosty the Snowman","photo","Here's a dynamic track from my Christmas set about a chilly dude with a floppy hat.","-wjfPpTqyHA");
addVideo("videoHollyJolly",0,1,"Holly Jolly Christmas","photo","A lovely Michael Bublé style Christmas track from my Christmas set which is fun to perform.","UOglQOzmDNU");
addVideo("videoJingleBells",0,1,"Jingle Bells","photo","Here's every childs favourite Christmas song. From my Christmas set.","2U-nhubmJh0");
addVideo("videoWhiteChristmas",0,1,"White Christmas","photo","From the movie Holiday Inn, its the crooning Bing Crosby classic. From my Christmas set.","HDBR_8Ll348");
addVideo("videoRudolph",0,1,"Rudolph the Red-Nosed Reindeer","photo","The Dean Martin version of the seasonal classic. From my Christmas set. Don't Forget to sing along.","XdutAMGV3UA");
addVideo("videoChristmas",0,1,"The Christmas Song","photo","Nat King Cole created this old time classic. From my Christmas set.","2sSKaddR9s0");
addVideo("videoWinter",0,0,"Winter Wonderland","photo","This one is performed in Elvis style. From my Christmas set.","prYhaRXuatw");
addVideo("videoRun",0,0,"Run Rudolph Run","photo","Chuck Berry created this energetic smash. From my Christmas set.","Agj9vVIQkA4");
addVideo("videoBeerBarrel",0,0,"Beer Barrel Polka","photo","The Jays Vintage (Vintage Vocal Harmony Tribute Group) performs the classic Andrew's Sisters 'Beer Barrel Polka'.","lgGX0rofXpA");
addVideo("videoRobin",0,1,"Rockin' Robin","photo","The 1970s groovy hit about a little bird. From my Christmas set.","xXvjLN_zedQ");
addVideo("videoSilent",0,1,"Silent Night","photo","A lovely Christmas carol performed in an Elvis style. From my Christmas set.","G7Rq3i3XWiE");
addVideo("videoSunshine",0,0,"You Are My Sunshine","photo","My favourite Bing Crosby number. Sang to me by my Grand parents.","JzTnYon8ipQ");
addVideo("videoChristmasPlaylist",1,0,"Playlist: Christmas Classics","photo","Christmas is a special time for music. Here's a few classics including hits by Chuck Berry, Dean Martin and Michael Buble: Run Rudolph Run, Frosty the Snowman, Winter Wonderland, Jingle Bells, Holly Jolly Christmas, Rockin Robin, Rudolph the Red-Nosed Reindeer, White Christmas, Silent Night and The Christmas Song.","PLTlGVrSbUuPi7yMifCQYbKwjlhQiL4afJ");


//---------------------------------------------------------------------------

function displayVideoPlayer(htmlID,htmlIDList,autoStart) {
  var autoplay=false;
  var selectedVideo=0;
  if (autoStart=="Autoplay") {
    autoplay=true;
  }
  videoPlayerHTMLID=htmlID;
  document.getElementById(videoPlayerHTMLID).innerHTML = "";
  displayVideoList(htmlIDList);

  //load the url parameter specified video (if specified)
  var videoRef=GetURLParameter("videoRef");
  var videoStart=GetURLParameter("videoStart");
  if (videoStart=="") {
	  videoStart=0;
  }
  if (videoRef!="") {
    selectedVideo=findVideoByRef(videoRef);
	videoListItemClick(selectedVideo,false,videoStart);
  } else {
    loadVideoByIndex(selectedVideo,autoplay,0);
  }
}


//Extract url parameters
function GetURLParameter(param) {
  var pageURL = window.location.search.substring(1);
  var URLVars = pageURL.split('&');
  for (var i = 0; i < URLVars.length; i++) {
    var paramName = URLVars[i].split('=');
    if (paramName[0] == param) {
      return paramName[1];
    }
  }
  return "";
}

function findVideoByRef(videoRef) {
  var result=0;
  for (videoIndex = 0; videoIndex < videoArray.length; videoIndex++) {
	  if( videoArray[videoIndex].videoRef==videoRef){
		  result=videoIndex;
		  break;
	  }
  }
  return result;
}

function addVideo(videoRef,isPlaylist,isHidden,name,thumbnail,caption,youTubeID) {
  var tempVideo = {videoRef:videoRef,name:name, caption:caption, thumbnail:thumbnail, isPlaylist:isPlaylist, isHidden:isHidden, youTubeID:youTubeID};
  videoArray.push(tempVideo);
}

function displayVideoList(htmlID) {
  videoListHTMLID = htmlID;
  var tempDisplay="";
  for (videoIndex = 0; videoIndex < videoArray.length; videoIndex++) {
	  if (videoArray[videoIndex].isHidden==0) {
        tempDisplay += "<div onClick='videoListItemClick("+videoIndex+",true,0)' class='w3-button w3-border w3-small'>"+videoArray[videoIndex].name+"</div>";
	  }
  }
  document.getElementById(videoListHTMLID).innerHTML = tempDisplay+"<div id='videoCaption'></div";
}

function videoListItemClick(videoIndex,autoplay,startTime) {
	loadVideoByIndex(videoIndex,autoplay,startTime);
	location.hash = "#"+videoPlayerHTMLID;
}

function loadVideoByIndex(videoIndex,autoplay,startTime) {
  var autoPlayText="";
  var autoPlayTextList="";
  var startText="";
  if (autoplay) {
    autoPlayText="&autoplay=1&loop=1";
    autoPlayTextList="&autoplay=1&loop=1";
  }
  startText+="?start="+startTime+autoPlayText
  if (videoArray[videoIndex].isPlaylist==0) {
    document.getElementById(videoPlayerHTMLID).innerHTML = "<iframe src='https://www.youtube.com/embed/"+videoArray[videoIndex].youTubeID+startText+"' allowfullscreen></iframe>";
  } else {
    document.getElementById(videoPlayerHTMLID).innerHTML = "<iframe src='https://www.youtube.com/embed/?listType=playlist&list="+videoArray[videoIndex].youTubeID+autoPlayTextList+"' allow='autoplay' allowfullscreen></iframe>";
  }
  document.getElementById("videoCaption").innerHTML = "<p>"+videoArray[videoIndex].caption+"</p>";
}



