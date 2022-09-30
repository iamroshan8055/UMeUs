/* ===== - ===== CREATED BY ROSHAN PATEL & TIRTH PATEL ===== - ===== */


$(document).ready(function () {
    appendJsonData();

    function appendJsonData() {

        let xhrObj = new XMLHttpRequest();
        xhrObj.open("get", "json/ourteam.json", true);

        xhrObj.onload = () => {

            var jsonObj = JSON.parse(xhrObj.responseText);

            $("#counimg").attr("href", jsonObj.team[0].counsellor[0].image_url);
            $(".counimg").attr("src", jsonObj.team[0].counsellor[0].image_url);
            $(".counsellor1 h3").text(jsonObj.team[0].counsellor[0].name)
            $(".counsellor1 .str1 img").attr("src", jsonObj.team[0].counsellor[0].star1);
            $(".counsellor1 .str2 img").attr("src", jsonObj.team[0].counsellor[0].star2);
            $(".counsellor1 .str3 img").attr("src", jsonObj.team[0].counsellor[0].star3);
            $(".counsellor1 .str4 img").attr("src", jsonObj.team[0].counsellor[0].star4);
            $(".counsellor1 .str5 img").attr("src", jsonObj.team[0].counsellor[0].star5);
            $(".counsellor1 #excerpt").text(jsonObj.team[0].counsellor[0].descrip)

            // for(var i=0; i<jsonObj.team[0].trainers.length; i++) {
            //     console.log(i)

            //     $("#trnr").append(
            //         '<div class="card trainers1">'+
            //         '<div class="card-header animated-bg" id="header">'+
            //             '<a href="'+jsonObj.team[0].trainers[i].image_url+'" id="trainimg" target="_blank"><img src="'+jsonObj.team[0].trainers[i].image_url+'" alt="Guest2- profile image" class="trainimg" width="100%"></a>'+
            //         '</div>'+
            //         '<div class="card-content">'+
            //             '<h3 class="card-title" id="title">'+jsonObj.team[0].trainers[i].name+'</h3>'+

            //             '<div class="str_rating">'+
            //                 '<div class="stars str1">'+
            //                     '<img src="'+jsonObj.team[0].trainers[i].star1+'" alt="star 1">'+
            //                 '</div>'+

            //                 '<div class="stars str2">'+
            //                     '<img src="'+jsonObj.team[0].trainers[i].star2+'" alt="star 2">'+
            //                 '</div>'+

            //                 '<div class="stars str3">'+
            //                     '<img src="'+jsonObj.team[0].trainers[i].star3+'" alt="star 3">'+
            //                 '</div>'+

            //                 '<div class="stars str4">'+
            //                     '<img src="'+jsonObj.team[0].trainers[i].star4+'" alt="star 4">'+
            //                '</div>'+

            //                 '<div class="stars str5">'+
            //                     '<img src="'+jsonObj.team[0].trainers[i].star5+'" alt="star 5">'+
            //                 '</div>'+
            //             '</div>'+

            //             '<p class="card-excerpt" id="excerpt">'+
            //             jsonObj.team[0].trainers[i].descrip+
            //             '</p>'+

            //         '</div>'+
            //     '</div>'
            //     )



            // $(".trainers1 #trainimg").attr("href", jsonObj.team[0].trainers[i].image_url);
            // $(".trainers1 .trainimg").attr("src", jsonObj.team[0].trainers[i].image_url);
            // $(".trainers1 h3").text(jsonObj.team[0].trainers[i].name)
            // $(".trainers1 .str1 img").attr("src", jsonObj.team[0].trainers[i].star1);
            // $(".trainers1 .str2 img").attr("src", jsonObj.team[0].trainers[i].star2);
            // $(".trainers1 .str3 img").attr("src", jsonObj.team[0].trainers[i].star3);
            // $(".trainers1 .str4 img").attr("src", jsonObj.team[0].trainers[i].star4);
            // $(".trainers1 .str5 img").attr("src", jsonObj.team[0].trainers[i].star5);
            // $(".trainers1 #excerpt").text(jsonObj.team[0].trainers[i].descrip)
            // }

            // =========================== Trainers Start =================================

            $(".trainers1 #trainimg").attr("href", jsonObj.team[0].trainers[0].image_url);
            $(".trainers1 .trainimg").attr("src", jsonObj.team[0].trainers[0].image_url);
            $(".trainers1 h3").text(jsonObj.team[0].trainers[0].name)
            $(".trainers1 .str1 img").attr("src", jsonObj.team[0].trainers[0].star1);
            $(".trainers1 .str2 img").attr("src", jsonObj.team[0].trainers[0].star2);
            $(".trainers1 .str3 img").attr("src", jsonObj.team[0].trainers[0].star3);
            $(".trainers1 .str4 img").attr("src", jsonObj.team[0].trainers[0].star4);
            $(".trainers1 .str5 img").attr("src", jsonObj.team[0].trainers[0].star5);
            $(".trainers1 #excerpt").text(jsonObj.team[0].trainers[0].descrip)

            $(".trainers2 #trainimg").attr("href", jsonObj.team[0].trainers[1].image_url);
            $(".trainers2 .trainimg").attr("src", jsonObj.team[0].trainers[1].image_url);
            $(".trainers2 h3").text(jsonObj.team[0].trainers[1].name)
            $(".trainers2 .str1 img").attr("src", jsonObj.team[0].trainers[1].star1);
            $(".trainers2 .str2 img").attr("src", jsonObj.team[0].trainers[1].star2);
            $(".trainers2 .str3 img").attr("src", jsonObj.team[0].trainers[1].star3);
            $(".trainers2 .str4 img").attr("src", jsonObj.team[0].trainers[1].star4);
            $(".trainers2 .str5 img").attr("src", jsonObj.team[0].trainers[1].star5);
            $(".trainers2 #excerpt").text(jsonObj.team[0].trainers[1].descrip)

            $(".trainers3 #trainimg").attr("href", jsonObj.team[0].trainers[2].image_url);
            $(".trainers3 .trainimg").attr("src", jsonObj.team[0].trainers[2].image_url);
            $(".trainers3 h3").text(jsonObj.team[0].trainers[2].name)
            $(".trainers3 .str1 img").attr("src", jsonObj.team[0].trainers[2].star1);
            $(".trainers3 .str2 img").attr("src", jsonObj.team[0].trainers[2].star2);
            $(".trainers3 .str3 img").attr("src", jsonObj.team[0].trainers[2].star3);
            $(".trainers3 .str4 img").attr("src", jsonObj.team[0].trainers[2].star4);
            $(".trainers3 .str5 img").attr("src", jsonObj.team[0].trainers[2].star5);
            $(".trainers3 #excerpt").text(jsonObj.team[0].trainers[2].descrip)

            $(".trainers4 #trainimg").attr("href", jsonObj.team[0].trainers[3].image_url);
            $(".trainers4 .trainimg").attr("src", jsonObj.team[0].trainers[3].image_url);
            $(".trainers4 h3").text(jsonObj.team[0].trainers[3].name)
            $(".trainers4 .str1 img").attr("src", jsonObj.team[0].trainers[3].star1);
            $(".trainers4 .str2 img").attr("src", jsonObj.team[0].trainers[3].star2);
            $(".trainers4 .str3 img").attr("src", jsonObj.team[0].trainers[3].star3);
            $(".trainers4 .str4 img").attr("src", jsonObj.team[0].trainers[3].star4);
            $(".trainers4 .str5 img").attr("src", jsonObj.team[0].trainers[3].star5);
            $(".trainers4 #excerpt").text(jsonObj.team[0].trainers[3].descrip)

            // =========================== Trainers End =================================

            $("#psycimg").attr("href", jsonObj.team[0].psychiatrist[0].image_url);
            $(".psycimg").attr("src", jsonObj.team[0].psychiatrist[0].image_url);
            $(".psychiatrist1 h3").text(jsonObj.team[0].psychiatrist[0].name)
            $(".psychiatrist1 .str1 img").attr("src", jsonObj.team[0].psychiatrist[0].star1);
            $(".psychiatrist1 .str2 img").attr("src", jsonObj.team[0].psychiatrist[0].star2);
            $(".psychiatrist1 .str3 img").attr("src", jsonObj.team[0].psychiatrist[0].star3);
            $(".psychiatrist1 .str4 img").attr("src", jsonObj.team[0].psychiatrist[0].star4);
            $(".psychiatrist1 .str5 img").attr("src", jsonObj.team[0].psychiatrist[0].star5);
            $(".psychiatrist1 #excerpt").text(jsonObj.team[0].psychiatrist[0].descrip)

            $("#dietimg").attr("href", jsonObj.team[0].dietitian[0].image_url);
            $(".dietimg").attr("src", jsonObj.team[0].dietitian[0].image_url);
            $(".dietitian1 h3").text(jsonObj.team[0].dietitian[0].name)
            $(".dietitian1 .str1 img").attr("src", jsonObj.team[0].dietitian[0].star1);
            $(".dietitian1 .str2 img").attr("src", jsonObj.team[0].dietitian[0].star2);
            $(".dietitian1 .str3 img").attr("src", jsonObj.team[0].dietitian[0].star3);
            $(".dietitian1 .str4 img").attr("src", jsonObj.team[0].dietitian[0].star4);
            $(".dietitian1 .str5 img").attr("src", jsonObj.team[0].dietitian[0].star5);
            $(".dietitian1 #excerpt").text(jsonObj.team[0].dietitian[0].descrip)


        }

        xhrObj.send();

    }
});

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