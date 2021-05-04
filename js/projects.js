/*
  projects.js
  Cody Fagley
  Last Modified April 27, 2021
*/

/*
  Controls Dynamic Functionality for Project Showcases
*/


$("document").ready(function(){

  var lock = false;

  $( function() {
    $( "#dialog" ).dialog({
      autoOpen: false,
      dialogClass: "no-close",
      modal: true,
      width: 650,
      show: {
        effect: "fade",
        duration: 500
      },
      hide: {
        effect: "fade",
        duration: 500
      },
      open: function (event, ui) {
        $('#dialog').bind('click', function () {
            $("#dialog").dialog('close');
            lock = false;
        });
        lock = true;
      }
    });
  });
  
  $( function() {
    $( "#dialog2" ).dialog({
      autoOpen: false,
      dialogClass: "no-close",
      modal: true,
      width: 850,
      show: {
        effect: "fade",
        duration: 500
      },
      hide: {
        effect: "fade",
        duration: 500
      },
      open: function (event, ui) {
        $('#dialog2').bind('click', function () {
            $("#dialog2").dialog('close');
            lock = false;
        });
        lock = true;
      }
    });
  });

  activateProject(0);

  $("#xita_src").on( "click", function(){
    if (!lock)
    $( "#dialog" ).dialog( "open" );
  });
  $("#xita").on( "click", function(){
    if (!lock)
    $( "#dialog2" ).dialog( "open" );
  });

  $('#dot_xita').on("click", function(){
    activateProject(0);
  });
  $('#dot_mousevision').on("click", function(){
    activateProject(1);
  });
  $('#dot_cgal').on("click", function(){
    activateProject(2);
  });
  $('#dot_venom').on("click", function(){
    activateProject(3);
  });

});


var activated_project = -1;
var front = 100;


function activateProject(id)
{
  if (id >= 0)
  {
    switch(activated_project)
    {
      case 0: 
        $("#xita").css("opacity", "0");
        $("#dot_xita").css("border-color", "black");
        break;
      case 1: 
        $("#mouse_vision").css("opacity", "0");
        $("#dot_mousevision").css("border-color", "black");
        break;
      case 2:
        $("#cgal").css("opacity", "0");
        $("#dot_cgal").css("border-color", "black");
      case 3:
        $("#venom").css("opacity", "0");
        $("#dot_venom").css("border-color", "black");
        break;

      default:
    }
    activated_project = id;
    switch(id)
    {
      case 0:
        $("#xita").css("opacity", "100%");
        $("#xita").css("z-index", ++front);
        $("#dot_xita").css("border-color", "teal");
        break;
      case 1:
        $("#mouse_vision").css("opacity", "100%");
        $("#mouse_vision").css("z-index", ++front);
        $("#dot_mousevision").css("border-color", "teal");
        break;
      case 2:
        $("#cgal").css("opacity", "100%");
        $("#cgal").css("z-index", ++front);
        $("#dot_cgal").css("border-color", "teal");
        break;
      case 3:
        $("#venom").css("opacity", "100%");
        $("#venom").css("z-index", ++front);
        $("#dot_venom").css("border-color", "teal");
        break;

      default:
    }
  }
}
