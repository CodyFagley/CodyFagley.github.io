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
  }
}

