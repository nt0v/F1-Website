let sideBarOpen = false;

let sideBar = function() {
    let getSideBar = document.querySelector("aside");
    let getSideBarImg = document.querySelector("aside img");
    let getSideBarUl = document.querySelector("aside ul");
    let getSideBarLinks = document.querySelectorAll("aside ul li a");
    if (sideBarOpen == false) {
        getSideBar.style.width = "15em";
        getSideBarImg.style.visibility = "visible";
        getSideBarUl.style.visibility = "visible";
        for (let i = 0; i < getSideBarLinks.length; i++) {
            getSideBarLinks[i].style.opacity = "1";
        }
        sideBarOpen = true;
    }
    else {
        getSideBar.style.width = "5em";
        getSideBarUl.style.visibility = "hidden";
        getSideBarImg.style.visibility = "hidden";
        for (let i = 0; i < getSideBarLinks.length; i++) {
            getSideBarLinks[i].style.opacity = "0";
        }
        sideBarOpen = false;
    }
}