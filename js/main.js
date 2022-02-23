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

