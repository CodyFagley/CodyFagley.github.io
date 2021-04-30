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
  $('#dot_venom').on("click", function(){
    activateProject(2);
  });

});


var activated_project = -1;


function activateProject(id)
{
  if (id >= 0)
  {
    switch(activated_project)
    {
      case 0: 
        $("#xita").css("opacity", "0");
        break;
      case 1: 
        $("#mouse_vision").css("opacity", "0");
        break;
      case 2:
        $("#venom").css("opacity", "0");
        break;

      default:
    }
    activated_project = id;
    switch(id)
    {
      case 0:
        $("#xita").css("opacity", "100%");
        break;
      case 1:
        $("#mouse_vision").css("opacity", "100%");
        break;
      case 2:
        $("#venom").css("opacity", "100%");
        break;

      default:
    }
  }
}
