//Copyright 2017: Andy B Goode 1950s/60s Rock n Roll/Swing Singer

var siteVersion = "2.2.0";


function createMenuBar(topOrBottom) {
  //create standard menu bar
  var menu = "<div id='"+topOrBottom+"MenuBar' class='menu'>";
  menu +="<a href='index.html'>Home</a> ";
  menu +="<a href='news.html'>News</a> ";
  menu +="<a href='photos.html'>Photos</a> ";
  menu +="<a href='music.html'>Music</a> ";
  menu +="<a href='videos.html'>Videos</a> ";
  menu +="<a href='songlist.html'>Songs</a> ";
  menu +="<a href='testimonials.html'>Testimonials</a> ";
  menu +="<a href='#contact'>Contact</a>";
  menu +="</div>";
  return menu;
}



//PUBLIC FUNCTIONS

function displayPage() {
  displayHeader('mainHeader');
  displayFooter('pageFooter');
}


function displayHeader(headerID) {
  //display page header + top menu
  var header = "<h1><img id='logo' src='images/logo.gif' alt='AndyBGoode Logo'> Andy B Goode</h1>";
  header +="<div id='topMenu'>"+createMenuBar('top')+"</div>";
  document.getElementById(headerID).innerHTML = header;
}


function displayFooter(footerID) {
  //create standard footer (with bottom menu)
  var footer ="<div id='contact' class='contact-area'>";
  footer +="<h2 class='banner'>Contact me</h2>";
  footer +="<div class='textbox-area'>";

  footer +="<DIV class='boxPanelNoBorder'>";
  footer +="<ul id='contactList'>";
  footer +="<li id='liPhone'>Phone: 07415 338859</li>";
  footer +="<li id='liEmail'>email: <a href='mailto:Andy@AndyBGoode.com?Subject=Hi%20Andy' target='_top'>Andy@AndyBGoode.com</a></li>";
  footer +="<li id='liFacebook'>Facebook: <a href='https://www.facebook.com/AndyBGoode'>AndyBGoode</a></li>";
  footer +="<li id='liInstagram'>Instagram: <a href='https://www.instagram.com/andybgoodevocalist'>andybgoodevocalist</a></li>";
  footer +="<li id='liYouTube'>YouTube: <a href='https://www.youtube.com/channel/UCHJsASS25ndVJYEykEK9BLQ'>Andy B Goode</a></li>";
  footer +="<li id='liTwitter'>Twitter: <a href='http://www.twitter.com/AndyBGoode'>@AndyBGoode</a></li>";
  footer +="<li id='liJays'>The Jays Vintage: <a href='http://www.TheJaysVintage.com'>The Jays Vintage</a></li>";
  footer +="<li id='liWebsite'>Version: v"+siteVersion+"</li>";
  footer +="</ul>";
  footer +="</DIV>";

  footer +="<DIV class='boxPanelNoBorder'>";
  footer +="<TABLE class='boxHeadingArea'>";
  footer +="<TR><TD><a href='photos.html'><img class='boxImageBigger' src='photos/thejays0010-thumb.jpg' alt='AndyBGoode'></a></TD>";
  footer +="<TD><a href='http://www.TheJaysVintage.com'><img class='boxImageBigger' src='photos/thejays0012-thumb.jpg' alt='TheJaysVintage'></a></TD></TR>";
  footer +="</TABLE>";
  footer +="</DIV>";

  footer +="</div>";
  footer +="</div>";

  footer +=createMenuBar('bottom');

  document.getElementById(footerID).innerHTML = footer;
}
