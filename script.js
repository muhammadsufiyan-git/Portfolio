function toggleNav() {
    const sidenav = document.getElementById("mySidenav");
    sidenav.style.left = sidenav.style.left === "0px" ? "-250px" : "0";
}

function closeNav() {
    document.getElementById("mySidenav").style.left = "-250px";
}

document.addEventListener('DOMContentLoaded', function() {
const body = document.querySelector('body');
const particleCount = 30;

for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    const size = Math.random() * 4 + 2;

    particle.style.width = `${size}px`;

    particle.style.height = `${size}px`;

    particle.style.left = `${Math.random() * 100}vw`;

    particle.style.top = `${Math.random() * 100}vh`;

    const duration = Math.random() * 10 + 10;

    particle.style.animationDuration = `${duration}s`;  
    particle.style.animationDelay = `${Math.random() * 5}s`;
    body.appendChild(particle);
}
});

