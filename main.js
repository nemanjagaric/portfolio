let artcl = document.getElementById("artcl");
let hiddenP = document.getElementById("hiddenP");
let backBtn = document.querySelectorAll('.backBtn');
let main = document.getElementById('main');
let projects = document.getElementById("projects");
let projectsLink = document.querySelectorAll(".projectsLink");
let projectsBackBtn = document.getElementById("projectsBackBtn");
let contact = document.getElementById("contact");
let contactLink = document.querySelectorAll(".contactLink");
let mobileNav = document.getElementById("mobile-nav");
let mobileMenu = document.getElementById("mobile-menu");

mobileMenu.addEventListener('click', function(e){
    e.preventDefault;
    mobileNav.style.display = "block";
});

artcl.addEventListener('click', function(e) {
    e.preventDefault;
    main.style.display = "block";
    artcl.style.display = "none";
    hiddenP.style.display = "block";
});



for (let i = 0; i < projectsLink.length; i++) {
    projectsLink[i].addEventListener('click', function (e) {
    e.preventDefault;
    main.style.display = "none";
    projects.style.display = "block";
    artcl.style.display = "none";
    hiddenP.style.display = "none";
    contact.style.display = "none";
    mobileNav.style.display = "none";
});
}

for (let i = 0; i < contactLink.length; i++) {
    contactLink[i].addEventListener('click', function (e) {
    e.preventDefault;
    main.style.display = "block";
    contact.style.display = "block";
    projects.style.display = "none";
    artcl.style.display = "none";
    hiddenP.style.display = "none";
    mobileNav.style.display = "none";
});
}

for (let i = 0; i < backBtn.length; i++) {
    backBtn[i].addEventListener('click', function (e) {
        e.preventDefault;
        main.style.display = "block";
        artcl.style.display = "block";
        hiddenP.style.display = "none";
        contact.style.display = "none";
        projects.style.display = "none";
    });
    
}


