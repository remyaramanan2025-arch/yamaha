// BIKES CAROUSEL 

var a=document.getElementById("ca1");
var b=document.getElementById("ca2");
var c=document.getElementById("ca3");

// SCOOTY CAROUSEL 

var d=document.getElementById("ca4");
var e=document.getElementById("ca5");
var f=document.getElementById("ca6");

// OVERALL BIKES AND SCOOTYS CAROUSEL

var overallbike=document.getElementById("overallbike");
var overallscooty=document.getElementById("overallscooty");


// SECTORS OF BIKES AND SCOOTYS 

var biketypes=document.getElementById("biketypes");
var scootytypes=document.getElementById("scootytypes");


// Function FOR MOTORCYCLES AND SCOOTERS 


function b1(){

    overallbike.style.display="block";
    overallscooty.style.display="none";
    biketypes.style.display="block";
    scootytypes.style.display="none";

    document.getElementById("clickb1").style.color="blue"
    document.getElementById("clickb1").style.borderColor="blue"
    document.getElementById("clicks1").style.color="grey"
    document.getElementById("clicks1").style.borderColor="grey"
   
}


function s1(){

    overallbike.style.display="none";
    overallscooty.style.display="block";
    biketypes.style.display="none";
    scootytypes.style.display="block";

    d.style.display="block";

    document.getElementById("click4").style.color="blue"
    document.getElementById("click5").style.color="grey"
    document.getElementById("click6").style.color="grey"

    document.getElementById("clickb1").style.color="grey"
    document.getElementById("clickb1").style.borderColor="grey"
    document.getElementById("clicks1").style.color="blue"
    document.getElementById("clicks1").style.borderColor="blue"
    
}



// FUNTIONS OF BIKES 

function click1(){

    a.style.display="block";
    b.style.display="none";
    c.style.display="none";

    document.getElementById("click1").style.color="blue"
    document.getElementById("click2").style.color="grey"
    document.getElementById("click3").style.color="grey"

    
}



function click2(){

    a.style.display="none";
    b.style.display="block";

    document.getElementById("click1").style.color="grey"
    document.getElementById("click2").style.color="blue"
    document.getElementById("click3").style.color="grey"
   
}

function click3(){

    a.style.display="none";
    b.style.display="none";
    c.style.display="block";

    document.getElementById("click1").style.color="grey"
    document.getElementById("click2").style.color="grey"
    document.getElementById("click3").style.color="blue"

    
}


// FUNTIONS OF SCOOTYS

function click4(){

    d.style.display="block";
    e.style.display="none";
    f.style.display="none";

    document.getElementById("click4").style.color="blue"
    document.getElementById("click6").style.color="grey"
    document.getElementById("click5").style.color="grey"
    
}
function click5(){

    d.style.display="none";
    e.style.display="block";
    f.style.display="none";

    document.getElementById("click4").style.color="grey"
    document.getElementById("click5").style.color="blue"
    document.getElementById("click6").style.color="grey"
    
    
}

function click6(){

    d.style.display="none";
    e.style.display="none";
    f.style.display="block";

    document.getElementById("click4").style.color="grey"
    document.getElementById("click5").style.color="grey"
    document.getElementById("click6").style.color="blue"
    
}


var g=document.getElementById("pho1");
var h=document.getElementById("vid1");

function click8(){
  g.style.display="none";
  h.style.display="block";


  document.getElementById("vv").style.color="blue";
  document.getElementById("vv").style.borderColor="blue";
  document.getElementById("pp").style.color="black";
  document.getElementById("pp").style.borderColor="grey";
  
}
function click7(){
  g.style.display="block";
  h.style.display="none";

  document.getElementById("pp").style.color="blue";
  document.getElementById("pp").style.borderColor="blue";
  document.getElementById("vv").style.color="black";
  document.getElementById("vv").style.borderColor="grey";
}

window.onload(document.getElementById("click1").style.color="blue",document.getElementById("clickb1").style.color="blue",
        document.getElementById("clickb1").style.borderColor="blue",document.getElementById("pp").style.color="blue",
        document.getElementById("pp").style.borderColor="blue")
