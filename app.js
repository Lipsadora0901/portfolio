const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content');


function PageTransitions(){
    //BUTTON click active class
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn','');
            this.className += ' active-btn';
        })
    }

    //sections active
    allSections.forEach((section) =>
    section.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
        sectBtns.forEach((btn) => {
        btn.classList.remove("active");
        });
        e.target.classList.add("active");
        sections.forEach((section) => {
        section.classList.remove("active");
        });

        const element = document.getElementById(id);
        element.classList.add("active");
    }
    })
);
//toggle theme
/* const themeBtn = document.querySelectorAll('.theme-btn');
themeBtn.addEventListener("click",() =>{
    let element = document.body;
    element.classList.toggle("light-mode")
}) */
'use strict'

const switcher = document.querySelector('.theme-btn');
console.log(switcher);

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');

    let className = document.body.className;
    if (className == "light-theme") {
        this.textContent = "Dark";
    }
    else {
       this.textContent = "Light";
    }
});
}

PageTransitions();