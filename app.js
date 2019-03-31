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
    1.a) XCSL
    1.b) C
    1.c) Flex/Bison
    1.d) OCaml
    1.e) Rust
  2.) Total
  3.) Percentages
*/

/*
  1.) Subsets
*/ 

//  1.a) XCSL
//  TODO: Programatically Determine Lines of XCSL
//  XCSL-AArch64 | XCSE-AArch64 | XCSE-x86_64
var total_xcsl = 252 + 3943 + 57;

//  1.b) C
//  TODO: Programatically Determine Lines of C
//  XCSL-AArch64 | XCSL-x86_64
var total_c = 9214 + 3380;


//  1.c) Flex/Bison
//  TODO: Programatically Determine Lines of Bison
//  XCSL-AArch64 | XCSL-x86_64
var total_bison = 858 + 345;

//  TODO: Programatically Determine Lines of Flex
//  XCSL-AArch64 | XCSL-x86_64
var total_flex = 318 + 117;

//  Total Lines of Flex/Bison
var total_flex_bison = total_bison + total_flex;


//  1.d) OCaml (Just a guess; Repos are gone)
var total_caml = 3500;

//  1.e) Rust (Just a guess; Repos are gone)
var total_rust = 2250;



//  TODO: Programatically Determine Lines of Assembly
//  XCSE-AArch64 | XCSE-AArch64
var total_asm = 322 + 275;


//  TODO: Programatically Determine Lines of Web Programming
//  codyfagley.github.io | codeus.tech
var total_html = 48+111;
//  codyfagley.github.io | codeus.tech
var total_css = 266+112;
//  codyfagley.github.io | codeus.tech
var total_js = 154+98;

//  Total Lines of Web Programming
var total_web = total_html + total_css + total_js;


//  TODO: Programatically Determine Lines of Scripts
var total_make = 245;
var total_bash = 129 + 51;

//  Total Lines of Scripts
var total_script = total_make + total_bash;

//  TODO: Programatically Determine Lines of LaTeX
var total_tex = 1126 + 956 + 200;


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



