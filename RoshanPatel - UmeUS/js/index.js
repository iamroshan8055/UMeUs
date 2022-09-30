/* ===== - ===== CREATED BY ROSHAN PATEL ===== - ===== */


var $ = function (id) {
  return document.getElementById(id);
}

/* -------------------- Carousel slider start ---------------------- */

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  // console.log("slides : ",slides[0].style.display)
  // console.log("slides length : ",slides.length)
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  // console.log(slides[slideIndex-1])
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

/* -------------------- Carousel slider end ---------------------- */



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

/* -------------------- View More Button start ---------------------- */
function btCmp() {
  var dots1 = document.getElementById("dots_btcmp");
  var moreText1 = document.getElementById("more_btcmp");
  var btnText1 = document.getElementById("btcmp_vm");

  if (dots1.style.display === "none") {
    dots1.style.display = "inline";
    btnText1.innerHTML = "View More";
    moreText1.style.display = "none";
  } else {
    dots1.style.display = "none";
    btnText1.innerHTML = "View Less";
    moreText1.style.display = "inline";
  }
}

function tchCmp() {
  var dots2 = document.getElementById("dots_tchcmp");
  var moreText2 = document.getElementById("more_tchcmp");
  var btnText2 = document.getElementById("tchcmp_vm");

  if (dots2.style.display === "none") {
    dots2.style.display = "inline";
    btnText2.innerHTML = "View More";
    moreText2.style.display = "none";
  } else {
    dots2.style.display = "none";
    btnText2.innerHTML = "View Less";
    moreText2.style.display = "inline";
  }
}
/* -------------------- View More Button end ---------------------- */

function validate() {
  var f_name = $("fname").value;
  var l_name = $("lname").value;
  var phone = $("phn").value;
  var mail = $("eml").value;
  var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;

  // console.log("fname------ ",f_name)
  // console.log("lname------ ",l_name)
  // console.log("phone------ ",phone)
  // console.log("email------ ",mail)

  if (f_name == "") {
    $("sfname").innerHTML = "Invalid First Name!"
  } else {
    $("sfname").innerHTML = "";
  }

  if (l_name == "") {
    $("slname").innerHTML = "Invalid Last Name!"
  } else {
    $("slname").innerHTML = "";
  }

  if (phone == "") {
    $("sphn").innerHTML = "Invalid Phone!";
  } else {
    if (isNaN(phone)) {
      $("sphn").innerHTML = "Use numeric only!"
    } else {
      $("sphn").innerHTML = "";
    }
  }

  if (mail == "") {
    $("seml").innerHTML = "Invalid Email Address!"
  } else if (!emailPattern.test(mail)) {
    $("seml").innerHTML = "Invalid Email Address Format!";
  } else {
    $("seml").innerHTML = "";
  }

}

// ------------------------------------------------------------


// const toTop = document.querySelector(".to-top");

// window.addEventListener("scroll", () => {
//   if (window.pageYOffset > 100) {
//     toTop.classList.add("active");
//   } else {
//     toTop.classList.remove("active");
//   }
// })


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



// --------------------------------------------------------------


// window.onload = function() {
//     document.getElementsByClassName("img1").css('display', '');
//     $("cntct_frm").click=validate();

// }