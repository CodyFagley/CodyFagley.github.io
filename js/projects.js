/*
  projects.js
  Cody Fagley
  Last Modified April 27, 2021
*/

/*
  Controls Dynamic Functionality for Project Showcases
*/


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
      });
    }
  });

});

$("document").ready(function(){


  $("#xita_src").on( "click", function(){
    $( "#dialog" ).dialog( "open" );
  });


});
