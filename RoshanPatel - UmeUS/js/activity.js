/* ===== - ===== CREATED BY TIRTH PATEL ===== - ===== */


"use strict";
var $ = function (id) { return document.getElementById(id); };

// fun ction for validaton
var validation = function () {

    var fName = $("firstName").value;
    var lName = $("lastName").value;
    var memberNumber = $("membershipNumber").value;

    var ddlmemtype = $("ddlmtype").value;
    console.log(ddlmemtype);

    var ddlactivity = $("ddlActivity").value;
    console.log(ddlactivity);

    var hasError = false;
    //  var lName=$("lastName").value;

    if (!isNaN(fName) || fName == "")//name validation
    {
        $("fnerror").innerHTML = "please enter a valid name";
        hasError = true;
        //  document.getElementById("firstName").innerHTML="Enter a valid Name";
        //alert("enter" );
    }
    else {
        $("fnerror").innerHTML = "";
    }
    // if(lName=="")
    // {
    //     $("lastName").text("Please enter your Last Name");
    // }

    if (!isNaN(lName) || lName == "") {
        $("lnerror").innerHTML = "please enter a valid name";
        hasError = true;
    }
    else {
        $("lnerror").innerHTML = "";
    }

    if (isNaN(memberNumber) || memberNumber == "") {
        $("mNumber").innerHTML = "Please enter Member Number";
        hasError = true;
    }
    else {
        $("mNumber").innerHTML = "";
    }

    if (ddlmemtype == "--Select Membership Type--") {
        $("mtype").innerHTML = "Please select Member Type";
        hasError = true;
    }
    else {
        $("mtype").innerHTML = "";
    }

    if (ddlactivity == "--Select Activity--") {
        $("activities").innerHTML = "Please select Activity";
        hasError = true;
    }
    else {
        $("activities").innerHTML = "";
    }


    if (hasError == false) {
        display();
        timer();
        hidefrm();
    }
}

// displaing data
function display() {
    var FirstName = $("firstName").value;
    var Lastname = $("lastName").value;
    var MemberType = $("ddlmtype").value;
    var MemberNumber = $("membershipNumber").value;
    var activity = $("ddlActivity").value;

    $("Display_dtls").innerHTML = "Name : " + FirstName + " " + Lastname + "<br/> Member Type : " + MemberType
        + "<br/> Membership Number : " + MemberNumber + "<br/> Activity : " + activity
        + "<br> Your remaining time remaining for this activity is : ";

}

//form hide
function hidefrm() {
    var fld = $("fldst_form");
    // var btn = $("btnSubmit");
    fld.style.display = "none";

    $("details").style.display = "inline";
}


//count down timer

function timer() {
    var deadline = new Date("Sept 2, 2021").getTime();

    var x = setInterval(function () {
        var now = new Date().getTime();
        var t = deadline - now;
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((t % (1000 * 60)) / 1000);
        document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
        if (t < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);

}


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



// window.onload=function()
// {
//     $("btnSubmit").onclick=validation;
//     $("btnSubmit").onclick=display;

// }
