function myfunction(){
    var dots = document.getElementsByClassName("dots");
    var more = document.getElementsByClassName("more");
    var btn = document.getElementsByClassName("myBtn");

    for(var i=0; i<btn.length; i++){
        if(dots[i].style.display === "none"){
            dots[i].style.display = "inline";
            more[i].style.display = "none";
            btn[i].innerHTML = "Read more";
        }else{
            dots[i].style.display = "none";
            more[i].style.display = "inline";
            btn[i].innerHTML = "Read less";
        }
    }
}

const menuBtn= document.querySelector('.ri-menu-2-line');
const menu= document. querySelector('.nav-content');

menuBtn.onclick = function(){
    menuBtn.classList.toggle('ri-arrow-up-double-line');
    menu.classList.toggle('active')
}

window.onscroll = function(){
    menu.classList.remove('active')
    menuBtn.classList.remove('ri-arrow-up-double-line')
}

const sr= ScrollReveal({
    distance: '80px',
    duration: 2500,
    delay: 200,
    reset: true,
});

sr.reveal(`.nav-header`, {origin: `top`});
sr.reveal(`.container .info h1`, {origin: `bottom`});
sr.reveal(`.container .info p`, {origin: `left`});
sr.reveal(`.card-Container #card1`, {delay:100, origin: `top`});
sr.reveal(`.card-Container #card2`, {delay:300, origin: `top`});
sr.reveal(`.card-Container #card3`, {delay:500, origin: `top`});
sr.reveal(`.card-Container #card4`, {delay:700, origin: `top`});
sr.reveal(`.about .about-layout`, { origin: `left`});
sr.reveal(`.course-box`, { origin: `top`});
sr.reveal(`.teachers-section .teacher-container:nth-child(1)`, {delay:100, origin: `top`});
sr.reveal(`.teachers-section .teacher-container:nth-child(2)`, {delay:300, origin: `top`});
sr.reveal(`.teachers-section .teacher-container:nth-child(3)`, {delay:500, origin: `top`});
sr.reveal(`.teachers-section .teacher-container:nth-child(4)`, {delay:700, origin: `top`});
sr.reveal(`.teachers-section .teacher-container:nth-child(5)`, {delay:900, origin: `top`});
sr.reveal(`.teachers-section .teacher-container:nth-child(6)`, {delay:1100, origin: `top`});
sr.reveal(`.card`, { origin: `right`});
sr.reveal(`.box`, { origin: `left`});
sr.reveal(`.contact-main`, { origin: `left`});

document.getElementById("messageForm").addEventListener("submit", function(event){
    event.preventDefault();
    alert("Your message has been sent successfully!");
    document.getElementById("messageForm").reset();
});