/* ===== - ===== CREATED BY ROSHAN PATEL & YASH PATEL ===== - ===== */


// =========================================================================

$(document).ready(function () {
    appendJsonData("json/Basic.json");
    $("a").click(function () {
        var url = "json/" + this.title + ".json";   /* title link to swap */
        $("#appendJson").empty();   /* cleasr tag so we can append new data */
        appendJsonData(url);    /* function call with one arguement */
    });
});

function appendJsonData(url) {
    var jsonUrl = url;  /* create object for json file url */

    let xhrObj = new XMLHttpRequest();
    xhrObj.open("get", jsonUrl, true);

    xhrObj.onload = () => {
        var jsonObj = JSON.parse(xhrObj.responseText);

        $(".card").css("height", jsonObj.plan[0].card_ht);
        $(".card-content").css("background", jsonObj.plan[0].bg_color);
        $(".card-content").css("background", jsonObj.plan[0].bg_color_gradient);
        $(".card-content").css("height", jsonObj.plan[0].card_content_ht);

        $("#pln_h2").text(jsonObj.plan[1].plan_type);
        $("#per_mo").text(jsonObj.plan[1].p_p_m);
        $("#excerpt").html(jsonObj.plan[1].plan_content);
        $(".priceBtn").val(jsonObj.plan[1].price);
        $(".priceBtn").text(jsonObj.plan[1].price);
        // $(".priceBtn").css("font-weight","bold");

        $(".priceBtn").mouseenter(function () {
            $(this).css("font-weight", "bold");
        }).mouseleave(function () {
            $(this).css("font-weight", "normal");
        });

    }
    xhrObj.send();
}

// =========================================================================



/* -------------------- social icons start ---------------------- */
/* ---------- Facebook icon start ------------ */
$("#fb_icon").onmouseover = function () { fbmouseOver() };
$("#fb_icon").onmouseout = function () { fbmouseOut() };

function fbmouseOver() {
  $("#fb_icon").attr("src","images/icons/facebook_1.png");
}

function fbmouseOut() {
  $("#fb_icon").attr("src","images/icons/facebook_3.png");
}
/* ---------- Facebook icon end ------------ */

/* ---------- Instagram icon start ------------ */
$("#ig_icon").onmouseover = function () { igmouseOver() };
$("#ig_icon").onmouseout = function () { igmouseOut() };

function igmouseOver() {
  $("#ig_icon").attr("src","images/icons/insta_1.png");
}

function igmouseOut() {
  $("#ig_icon").attr("src","images/icons/insta_3.png");
}
/* ---------- Instagram icon end ------------ */

/* ---------- Pinterest icon start ------------ */
$("#pin_icon").onmouseover = function () { pinmouseOver() };
$("#pin_icon").onmouseout = function () { pinmouseOut() };

function pinmouseOver() {
  $("#pin_icon").attr("src","images/icons/pinterest_1.png");
}

function pinmouseOut() {
  $("#pin_icon").attr("src","images/icons/pinterest_3.png");
}
/* ---------- Pinterest icon end ------------ */

/* ---------- YouTube icon start ------------ */
$("#yt_icon").onmouseover = function () { ytmouseOver() };
$("#yt_icon").onmouseout = function () { ytmouseOut() };

function ytmouseOver() {
  $("#yt_icon").attr("src","images/icons/youtube_1.png");
}

function ytmouseOut() {
  $("#yt_icon").attr("src","images/icons/youtube_3.png");
}
/* ---------- YouTube icon end ------------ */
/* -------------------- social icons start ---------------------- */