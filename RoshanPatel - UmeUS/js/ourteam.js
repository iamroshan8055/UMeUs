/* ===== - ===== CREATED BY TIRTH PATEL & YASH PATEL ===== - ===== */


var $ = function (id) {
  return document.getElementById(id);
}

/* -------------------- social icons start ---------------------- */
/* ---------- Facebook icon start ------------ */
$("fb_icon").onmouseover = function () { fbmouseOver() };
$("fb_icon").onmouseout = function () { fbmouseOut() };

function fbmouseOver() {
  $("fb_icon").src = "images/icons/facebook_1.png"
}

function fbmouseOut() {
  $("fb_icon").src = "images/icons/facebook_3.png"
}
/* ---------- Facebook icon end ------------ */

/* ---------- Instagram icon start ------------ */
$("ig_icon").onmouseover = function () { igmouseOver() };
$("ig_icon").onmouseout = function () { igmouseOut() };

function igmouseOver() {
  $("ig_icon").src = "images/icons/insta_1.png"
}

function igmouseOut() {
  $("ig_icon").src = "images/icons/insta_3.png"
}
/* ---------- Instagram icon end ------------ */

/* ---------- Pinterest icon start ------------ */
$("pin_icon").onmouseover = function () { pinmouseOver() };
$("pin_icon").onmouseout = function () { pinmouseOut() };

function pinmouseOver() {
  $("pin_icon").src = "images/icons/pinterest_1.png"
}

function pinmouseOut() {
  $("pin_icon").src = "images/icons/pinterest_3.png"
}
/* ---------- Pinterest icon end ------------ */

/* ---------- YouTube icon start ------------ */
$("yt_icon").onmouseover = function () { ytmouseOver() };
$("yt_icon").onmouseout = function () { ytmouseOut() };

function ytmouseOver() {
  $("yt_icon").src = "images/icons/youtube_1.png"
}

function ytmouseOut() {
  $("yt_icon").src = "images/icons/youtube_3.png"
}
/* ---------- YouTube icon end ------------ */
/* -------------------- social icons start ---------------------- */


// ------------------------------------------------------------

var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// -------------------------------------------------------------------------------

// -------------------------------------------------------------------------------

const boxes = document.querySelectorAll('.card')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
  const triggerBottom = window.innerHeight / 5 * 4

  boxes.forEach(abc => {
    const boxTop = abc.getBoundingClientRect().top

    if (boxTop < triggerBottom) {
      abc.classList.add('show')
    } else {
      abc.classList.remove('show')
    }
  })
}

// -------------------------------------------------------------------------------


// -------------------------------------------------------------------------------


// window.onload = function() {
//   alert ("Hello Brother")
// }