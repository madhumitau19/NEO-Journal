const menuBtn = document.getElementById("menu-icon");
const menu = document.getElementById("menu-mobile");
const pastIssues = document.getElementById("past-issues");
const volBtns = document.querySelectorAll(".vol");

menuBtn.addEventListener("click", ()=>{
    menu.classList.toggle("show");
    document.getElementById("menu-bars").classList.toggle("open");
    document.getElementById("close-icon").classList.toggle("open");
});
pastIssues.addEventListener("click", ()=>{
    volBtns.forEach((btn)=> {
        btn.classList.toggle("clicked");
    })
});

// closeMenu.addEventListener("click", ()=>{
//     menu.classList.remove("show");
//     volBtns.forEach((btn)=> {
//         btn.classList.remove("clicked");
//     })
// });


const pastIssueDT = document.getElementById("past-issue");
const pastIssueList = document.getElementById("past-issue-list");
pastIssueDT.addEventListener("click", ()=>{
    pastIssueList.classList.toggle("show");
});