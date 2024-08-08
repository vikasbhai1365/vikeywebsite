let projBtn = document.querySelector(".projectBtn");
let projectContainer = document.querySelector(".project-container");

// projBtn.addEventListener("click", () => {
//   projectContainer.style.display = "block";
// });
let projContainerVar=false;
projBtn.addEventListener("click",()=>{

  if(projContainerVar===false)
  {
    projectContainer.style.display="block";
    projContainerVar=true;
  }
  else
  {
    projectContainer.style.display="none";
    projContainerVar=false;
  }
      // projectContainer.style.display="none";
    

});

let programBtn = document.querySelector(".programBtn");
let javaBtn = document.querySelector(".javaBtn");
let linkdiv = document.querySelector(".javaunits");

let java = false;
programBtn.addEventListener("click", () => {
  javaBtn.style.display = "block";
  programBtn.disabled=true;
  javaBtn.addEventListener("click", () => {
    if (java === false) {
      linkdiv.style.display = "block";
      java=true;
    }
    else{
        linkdiv.style.display = "none";
        java=false;
    }
  });
});

let pythonBtn = document.querySelector(".pythonbtn");
let pythonUnits = document.querySelector(".pythonunits");

let python = false;
programBtn.addEventListener("click", () => {
  pythonBtn.style.display = "block";
  programBtn.disabled=true;
  pythonBtn.addEventListener("click", () => {
    if (python === false) {
      pythonUnits.style.display = "block";
      python=true;
    }
    else{
        pythonUnits.style.display = "none";
        python=false;
    }
  });
});
// let devBtn=document.querySelector(".devBtn");
// devBtn.addEventListener("click",function show(){
//     console.log("hi");
// })
document.addEventListener("DOMContentLoaded", function () {
  let devBtn = document.querySelector(".devBtn");
  let devContainer = document.querySelector(".developer-container");
  let show = false;
  devBtn.addEventListener("click", () => {
    if (show === false) {
      devContainer.style.display = "block";
      devBtn.innerText = "Hide Details";
      show = true;
    } else {
      devContainer.style.display = "none";
      show = false;
      devBtn.innerText = "Developer Details";
    }
  });
});

