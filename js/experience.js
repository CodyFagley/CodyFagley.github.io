/*
  experience.js
  Cody Fagley
  Last Modified May 5, 2021
*/

/*
  Dynamic Functionality for Experience "Page"
*/


$("document").ready(function()
{

  activateExperience(0);

  $("#dot_codeus").on("click", function(){
    activateExperience(0);
  });
  $("#dot_teton").on("click", function(){
    activateExperience(1);
  });
  $("#dot_siteseers").on("click", function(){
    activateExperience(2);
  });
  $("#dot_westmoreland").on("click", function(){
    activateExperience(3);
  });


});


activatedExperience = -1;
front = 100;

function activateExperience(id)
{
  switch (activatedExperience)
  {
    case 0:
      $("#codeus").css("opacity", 0);
      $("#dot_codeus").css("border-color", "black");
      break;
    case 1:
      $("#teton").css("opacity", 0);
      $("#dot_teton").css("border-color", "black");
      break;
    case 2:
      $("#siteseers").css("opacity", 0);
      $("#dot_siteseers").css("border-color", "black");
      break;
    case 3:
      $("#westmoreland").css("opacity", 0);
      $("#dot_westmoreland").css("border-color", "black");
      break;
  }
  activatedExperience = id;
  switch(id)
  {
    case 0:
      $("#codeus").css("opacity", "100%");
      $("#codeus").css("z-index", ++front);
      $("#dot_codeus").css("border-color", "teal");
      break;
    case 1:
      $("#teton").css("opacity", "100%");
      $("#teton").css("z-index", ++front);
      $("#dot_teton").css("border-color", "teal");
      break;
    case 2:
      $("#siteseers").css("opacity", "100%");
      $("#siteseers").css("z-index", ++front);
      $("#dot_siteseers").css("border-color", "teal");
      break;
    case 3:
      $("#westmoreland").css("opacity", "100%");
      $("#westmoreland").css("z-index", ++front);
      $("#dot_westmoreland").css("border-color", "teal");
      break;
  }
}

