const menuBtn = document.getElementById("nav-btn");
const menu = document.getElementById("menu");
const closeMenu = document.getElementById("close-btn");
const pastIssues = document.getElementById("past-issues");
const volBtns = document.querySelectorAll(".vol");

menuBtn.addEventListener("click", ()=>{
    menu.classList.toggle("show");
});
pastIssues.addEventListener("click", ()=>{
    volBtns.forEach((btn)=> {
        btn.classList.toggle("clicked");
    })
});

closeMenu.addEventListener("click", ()=>{
    menu.classList.remove("show");
    volBtns.forEach((btn)=> {
        btn.classList.remove("clicked");
    })
});

