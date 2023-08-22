const toggleBtn = document.getElementById("toggle-btn");
const navbarCon = document.getElementById("navlinks-container");

toggleBtn.addEventListener('click', ()=>{
    navbarCon.classList.toggle("drop")
})