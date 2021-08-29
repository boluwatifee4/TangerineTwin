
const mainMenu = document.querySelector('.mainMenu');
const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');

openMenu.addEventListener('click' ,show);
 closeMenu.addEventListener('click' ,close);

 
 function show() {
     mainMenu.style.display = 'flex';
     mainMenu.style.display.top = '0';
 }

 function close() {
     mainMenu.style.top = '-100010%';
 }

window.addEventListener('scroll',()=>{
    let content = document.querySelector('.reveal');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight/7;
    if(contentPosition < screenPosition){
        content.classList.add('active');
    } else{
        content.classList.remove('active');
    }
});

window.addEventListener('scroll',()=>{
    let content = document.querySelector('.reveal1');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(contentPosition < screenPosition){
        content.classList.add('active1');
    } else{
        content.classList.remove('active1');
    }
});

window.addEventListener('scroll',()=>{
    let content = document.querySelector('.reveal2');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(contentPosition < screenPosition){
        content.classList.add('active2');
    } else{
        content.classList.remove('active2');
    }
});
window.addEventListener('scroll',()=>{
    let content = document.querySelector('.reveal3');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(contentPosition < screenPosition){
        content.classList.add('active3');
    } else{
        content.classList.remove('active3');
    }
});
window.addEventListener('scroll',()=>{
    let content = document.querySelector('.reveal4');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(contentPosition < screenPosition){
        content.classList.add('active4');
    } else{
        content.classList.remove('active4');
    }
});
window.addEventListener('scroll',()=>{
    let content = document.querySelector('.reveal5');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(contentPosition < screenPosition){
        content.classList.add('active5');
    } else{
        content.classList.remove('active5');
    }
});
window.addEventListener('scroll',()=>{
    let content = document.querySelector('.reveal6');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(contentPosition < screenPosition){
        content.classList.add('active6');
    } else{
        content.classList.remove('active6');
    }
});

