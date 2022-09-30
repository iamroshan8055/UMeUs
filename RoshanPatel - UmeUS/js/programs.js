/* ===== - ===== CREATED BY YASH PATEL ===== - ===== */


var $ = function (id) {

  return document.getElementById(id);

}

// code to expand the view button

function myFunction() {

  var dots = document.getElementById("less1");

  var moreText = document.getElementById("more1");

  var btnText = document.getElementById("vmore");


  // if else condition 


  if (dots.style.display === "none") {

    dots.style.display = "inline";

    btnText.innerHTML = "View more";

    moreText.style.display = "none";

  } else {

    dots.style.display = "none";

    btnText.innerHTML = "View less";

    moreText.style.display = "inline";

  }

}


// code to expand second view button

function myFunction2() {

  var dots2 = document.getElementById("less2");

  var moreText2 = document.getElementById("more2");

  var btnText2 = document.getElementById("view_more");

  // if else condition 

  if (dots2.style.display === "none") {

    dots2.style.display = "inline";

    btnText2.innerHTML = "View more";

    moreText2.style.display = "none";

  } else {

    dots2.style.display = "none";

    btnText2.innerHTML = "View less";

    moreText2.style.display = "inline";

  }

}


$("fb_icon").onmouseover = function () { fbmouseOver() };

$("fb_icon").onmouseout = function () { fbmouseOut() };

function fbmouseOver() {

  $("fb_icon").src = "images/icons/facebook_1.png"

}

function fbmouseOut() {

  $("fb_icon").src = "images/icons/facebook_3.png"

}



$("ig_icon").onmouseover = function () { igmouseOver() };

$("ig_icon").onmouseout = function () { igmouseOut() };


function igmouseOver() {

  $("ig_icon").src = "images/icons/insta_1.png"

}

function igmouseOut() {

  $("ig_icon").src = "images/icons/insta_3.png"

}



$("pin_icon").onmouseover = function () { pinmouseOver() };

$("pin_icon").onmouseout = function () { pinmouseOut() };


function pinmouseOver() {

  $("pin_icon").src = "images/icons/pinterest_1.png"

}

function pinmouseOut() {

  $("pin_icon").src = "images/icons/pinterest_3.png"

}



$("yt_icon").onmouseover = function () { ytmouseOver() };

$("yt_icon").onmouseout = function () { ytmouseOut() };


function ytmouseOver() {

  $("yt_icon").src = "images/icons/youtube_1.png"

}

function ytmouseOut() {

  $("yt_icon").src = "images/icons/youtube_3.png"

}


var mybutton = document.getElementById("myBtn");


window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}