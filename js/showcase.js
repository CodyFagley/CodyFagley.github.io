/*
  showcase.js
  Cody Fagley
  Authored on   March 1, 2019
  Last Modified March 1, 2019
*/

/*
  Dynamic Showcase Functionality for Cody Fagley's personal web page
*/ 


OVERVIEW    = 0;
STEM        = 1;
BIZDEV      = 2;
EXPERIENCE  = 3;
REFERENCES  = 4;

active = 0;
count = 10;

$(document).ready(function(){

  activateShowcase(OVERVIEW);

  /* 
    Topbar Click Handlers
  */
  $("#nav_overview").click(function(){
    activateShowcase(OVERVIEW);
  });
  $("#nav_experience").click(function(){
    activateShowcase(EXPERIENCE);
  });
  $("#nav_references").click(function(){
    activateShowcase(REFERENCES);
  });
  $("#nav_projects").click(function(){
    activateShowcase(STEM);
  });
  $("#nav_business").click(function(){
    activateShowcase(BIZDEV);
  });



});


function activateShowcase(showcase)
{
  switch(active)
  {
    case OVERVIEW:
      $("#overview").animate({opacity: "0"}, "slow");
      break;
    case STEM:
      $("#stem").animate({opacity: "0"}, "slow");
      $("#dialog").dialog('close');
      $("#dialog2").dialog('close');
      break;
    case BIZDEV:
      $("#business").animate({opacity: "0"}, "slow");
      break;
    case EXPERIENCE:
      $("#experience").animate({opacity: "0"}, "slow");
      break;
    case REFERENCES:
      $("#references").animate({opacity: "0"}, "slow");
      break;
    default:
  }
  active = showcase;
  switch(showcase)
  {
    case OVERVIEW:
      setTimeout(function() {$("#overview").animate({opacity: "100"})}, 500);
      $("#overview").css("z-index", ++count);
      break;
    case STEM:
      setTimeout(function() {$("#stem").animate({opacity: "100"})}, 500);
      $("#stem").css("z-index", ++count);
      break;
    case BIZDEV:
      setTimeout(function() {$("#business").animate({opacity: "100"})}, 500);
      $("#business").css("z-index", ++count);
      break;
    case EXPERIENCE:
      setTimeout(function() {$("#experience").animate({opacity: "100"})}, 500);
      $("#experience").css("z-index", ++count);
      break;
    case REFERENCES:
      setTimeout(function() {$("#references").animate({opacity: "100"})}, 500);
      $("#references").css("z-index", ++count);
      break;
    default:
  }
}




