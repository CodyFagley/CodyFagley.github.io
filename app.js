/*
  app.js
  Cody Fagley
  Authored on   March 1, 2019
  Last Modified March 1, 2019
*/

/*
  Contains functions for use in Cody Fagley Personal Website
  
  Table of Contents
  1.) Subsets
    1.a) C
    1.b) Flex/Bison
    1.c) OCaml
    1.d) Rust
  2.) Total
  3.) Percentages
*/

//  1.a) C
//  TODO: Programatically Determine Lines of C
var total_c = 3992+3380;


//  1.b) Flex/Bison
//  TODO: Programatically Determine Lines of Bison
var total_bison = 812+345;

//  TODO: Programatically Determine Lines of Flex
var total_flex = 368;

//  Total Lines of Flex/Bison
var total_flex_bison = total_bison + total_flex;


//  1.c) OCaml (Just a guess; Repos are gone)
var total_caml = 3500;

//  1.d) Rust (Just a guess; Repos are gone)
var total_rust = 2250;


//  TODO: Programatically Determine Lines of XCSL
var total_xcsl = 2156;


//  TODO: Programatically Determine Lines of Assembly
var total_asm = 371;

//  TODO: Programatically Determine Lines of Web Programming
var total_html = 78+111;
var total_css = 266+112;
var total_js = 91+98;

//  Total Lines of Web Programming
var total_web = total_html + total_css + total_js;


//  TODO: Programatically Determine Lines of Scripts
var total_make = 245;
var total_bash = 129 + 51;

//  Total Lines of Scripts
var total_script = total_make + total_bash;

//  TODO: Programatically Determine Lines of LaTeX
var total_tex = 1126;


var total_csharp = 1548 - 137;

var total = total_c + total_flex_bison + total_caml + total_rust + total_xcsl + total_asm + total_script + total_web + total_tex + total_csharp;


//  Percentage Values
var per_c    = parseFloat(total_c)/total;
var per_fb   = parseFloat(total_flex_bison)/total;
var per_xcsl = parseFloat(total_xcsl)/total;
var per_caml = parseFloat(total_caml)/total;
var per_rust = parseFloat(total_rust)/total;
var per_asm  = parseFloat(total_asm)/total;
var per_web  = parseFloat(total_web)/total;
var per_scpt = parseFloat(total_script)/total;
var per_tex  = parseFloat(total_tex)/total;
var per_cs   = parseFloat(total_csharp)/total;



