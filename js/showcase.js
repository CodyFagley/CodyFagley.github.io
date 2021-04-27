/*
  showcase.js
  Cody Fagley
  Authored on   March 1, 2019
  Last Modified March 1, 2019
*/

/*
  Dynamic Showcase Functionality for Cody Fagley's personal web page
*/ 

$(document).ready(function(){

  $("#overview").css("opacity", "100");
  count = 10;
  $("#overview").css("z-index", ++count);

  /* 
    Topbar Click Handlers
  */
  $("#nav_overview").click(function(){
    $("#experience").animate({opacity: "0"}, "slow");
    $("#references").animate({opacity: "0"}, "slow");
    $("#projects").animate({opacity: "0"}, "slow");

    setTimeout(function() {$("#overview").animate({opacity: "100"})}, 500);
    $("#overview").css("z-index", ++count);
  });

  $("#nav_experience").click(function(){
    $("#overview").animate({opacity: "0"}, "slow");
    $("#references").animate({opacity: "0"}, "slow");
    $("#projects").animate({opacity: "0"}, "slow");

    setTimeout(function() {$("#experience").animate({opacity: "100"})}, 500);
    $("#experience").css("z-index", ++count);
  });

  $("#nav_references").click(function(){
    $("#overview").animate({opacity: "0"}, "slow");
    $("#experience").animate({opacity: "0"}, "slow");
    $("#projects").animate({opacity: "0"}, "slow");

    setTimeout(function() {$("#references").animate({opacity: "100"})}, 500);
    $("#references").css("z-index", ++count);
  });

  $("#nav_projects").click(function(){
    $("#overview").animate({opacity: "0"}, "slow");
    $("#experience").animate({opacity: "0"}, "slow");
    $("#references").animate({opacity: "0"}, "slow");

    setTimeout(function() {$("#projects").animate({opacity: "100"})}, 500);
    $("#projects").css("z-index", ++count);

  })


});





