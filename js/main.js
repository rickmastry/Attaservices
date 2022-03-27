let showMenu = false;
let navicon = document.querySelector('.nav-icon');
let sidemenu = document.querySelector('.side-nav');


navicon.addEventListener('click', toggleMenu, false);

function toggleMenu(event){
    if(!showMenu){
      if(sidemenu.style.width = '300px');
     
        //Set Menu state
        showMenu = true;
       
    }else{
     
      sidemenu.style.width = '0px';
     
        //Set Menu State
        showMenu = false;

    }
}

let closed = document.querySelector('.btn-close');
closed.addEventListener("click", toggleBtn);


function toggleBtn(event){
  
    sidemenu.style.width = '0px';
    showMenu = false;
}

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector(".navbar").style.padding = "25px 10px";
    document.querySelector(".navbar-brand").style.width = "70px";
    document.querySelector(".navbar-brand").style.height = "70px";
  } else {
    document.querySelector(".navbar").style.padding = "70px 10px";
    document.querySelector(".navbar-brand").style.width = "90px";
    document.querySelector(".navbar-brand").style.height = "90px";
  }
}

