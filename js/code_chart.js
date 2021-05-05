/*
  code_chart.js
  Cody Fagley
  Last Modified April 27, 2021
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
var total_xcsl = 882 + 3943 + 57;

//  1.b) C
//  TODO: Programatically Determine Lines of C
//  XCSL-AArch64 | XCSL-x86_64
var total_c = 9214 + 5200;


//  Python
var total_py = 3500;


//  1.c) Flex/Bison
//  TODO: Programatically Determine Lines of Bison
//  XCSL-AArch64 | XCSL-x86_64
var total_bison = 858 + 345;

//  TODO: Programatically Determine Lines of Flex
//  XCSL-AArch64 | XCSL-x86_64
var total_flex = 318 + 117;

//  Total Lines of Flex/Bison
var total_flex_bison = total_bison + total_flex;


//  1.d) OCaml-like (e.g. Haskell, LISP) (Just a guess)
var total_caml = 8000;

//  1.e) Rust (Just a guess; Repos are gone)
var total_rust = 2250;



//  TODO: Programatically Determine Lines of Assembly
//  XCSE-AArch64 | XCSE-x86_64
var total_asm = 2500 + 600;


//  TODO: Programatically Determine Lines of Web Programming
//  codyfagley.github.io | codeus.tech
var total_html = 48+600;
//  codyfagley.github.io | codeus.tech
var total_css = 566+112;
//  codyfagley.github.io | codeus.tech
var total_js = 354+98;

//  Total Lines of Web Programming
var total_web = total_html + total_css + total_js;


//  TODO: Programatically Determine Lines of Scripts
var total_make = 380;
var total_bash = 800 + 51;

//  Total Lines of Scripts
var total_script = total_make + total_bash;

//  TODO: Programatically Determine Lines of LaTeX
var total_tex = 1126 + 956 + 200;


var total_csharp = 1548 - 137;

var total = total_c + total_py + total_flex_bison + total_caml + total_rust + total_xcsl + total_asm + total_script + total_web + total_tex + total_csharp;


//  Percentage Values
var per_c    = parseFloat(total_c)/total;
var per_py   = parseFloat(total_py)/total;
var per_fb   = parseFloat(total_flex_bison)/total;
var per_xcsl = parseFloat(total_xcsl)/total;
var per_caml = parseFloat(total_caml)/total;
var per_rust = parseFloat(total_rust)/total;
var per_asm  = parseFloat(total_asm)/total;
var per_web  = parseFloat(total_web)/total;
var per_scpt = parseFloat(total_script)/total;
var per_tex  = parseFloat(total_tex)/total;
var per_cs   = parseFloat(total_csharp)/total;

window.onload = function() {
  CanvasJS.addColorSet("greenShades",
          [//colorSet Array
          "#2F2F2F",
          "#702070",
          "#2E8B8B",
          "#6666EE",
          "#006000",
          "#7E2E1F", 
          "#D09090",
          "#E08022",
          "#228822",
          "#BBBB20",
          "#BBBBBB"
          ]);
  
  var chart = new CanvasJS.Chart("overview", {
    colorSet: "greenShades",
    animationEnabled: true,
    title: {
      text: "Programming Experience by Language"
    },
    toolTip:
    {
      content: "{label} Projects<br/><hr/>{projects}",
      backgroundColor: "black",
      fontColor: "white"
    },
    data: [{
      type: "pie",
      startAngle: 220,
      yValueFormatString: "##0.00\"%\"",
      indexLabel: "{label} {y}",
      dataPoints: [
        {y: per_c*100, label: "C/C++", projects: "XCSL-AArch64<br/>XCSL-x86_64"},
        {y: per_caml*100, label: "Haskell-like", projects: "<strong>Includes Haskell, OCaml, LISP</strong><br>XCSE-PoC v1"},
        {y: per_xcsl*100, label: "XCSL", projects: "XCSE-AArch64<br/>XCSE-x86_64"},
        {y: per_py*100, label: "Python", projects: "Smart Slice Cura Plugin"},
        {y: per_fb*100, label: "Flex/Bison", projects: "XCSL-AArch64<br/>XCSL-x86_64"},
        {y: per_asm*100, label: "Assembly", projects: "XCSE-AArch64 Bootloader<br/>XCSE-x86_64 Bootloader"},
        {y: per_rust*100, label: "Rust", projects: "XCSE-PoC v2"},
        {y: per_web*100, label: "Web", projects: "Former Consultant<br/>https://codyfagley.github.io<br/>https://codeustech.github.io"},
        {y: per_scpt*100, label: "Scripts", projects: "Automation Scripts<br/>Makefile Installers"},
        {y: per_tex*100, label: "LaTeX", projects: "XCS User Manual<br/>XCS Technical Spec."},
        {y: per_cs*100, label: "C#/SQL", projects: "Lending Library"},
      ]
    }],
    backgroundColor: "#F2F2F2"
  });
  chart.render();
}

