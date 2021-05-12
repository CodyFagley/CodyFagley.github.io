/*
  business.js
  Cody Fagley
  Last Modified May 11, 2021
*/

/*
  Contains dynamic functionality for business "page"
*/

$(document).ready(function (){

  $( function() {
    $( "#dialog_cashflows" ).dialog({
      autoOpen: false,
      dialogClass: "no-close",
      modal: true,
      width: "60%",
      show: {
        effect: "fade",
        duration: 500
      },
      hide: {
        effect: "fade",
        duration: 500
      },
      open: function (event, ui) {
        $('#dialog_cashflows').bind('click', function () {
            $("#dialog_cashflows").dialog('close');
        });
      }
    });
  });


  $("#cashflow").on( "click", function(){
    $( "#dialog_cashflows" ).dialog( "open" );
  });

});


