
const navSlide = () =>{

    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    const overlay = document.querySelector(".overlay");

    burger.addEventListener("click", ()=>{
        nav.classList.toggle("nav-active");

        navLinks.forEach((link) =>{
            if(link.style.animation){
                link.style.animation = ""
            }else {
                link.style.animation = 'navLinksFade 0.3s ease 0.2s forwards';
            }
        });

        burger.classList.toggle("close");

        if(overlay.style.animation && overlay.style.display){
            overlay.style.animation = ""
            overlay.style.display = "none"
        }else{
            overlay.style.animation = 'overlayAnimation 0.5s ease forwards';
            overlay.style.display = "block"
        }
        
    });
};

navSlide();