document.querySelectorAll('a[href^="#"').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth"})
    });
});


const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a")

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id")
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if(link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    })
});

document.querySelector(".btn.primary").addEventListener("click", () =>{
    window.open("CV_Galih.pdf", "_blank");
});

document.querySelector(".btn.secondary").addEventListener("click", () =>{
    window.location.href = "mailto:kepoangker@gmail.com";
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {threshold: 0.2});

document.querySelectorAll(".skills, .interested, .hero").forEach(el =>{
    observer.observe(el);
});

const text = "Galih Radhitya Wira";
let i = 0;
const target = document.querySelector(".text h2 span");

function typing() {
    if (i < text.length){
        target.textContent += text.charAt(i);
        i++;
        setTimeout(typing, 100);
    }
}

target.textContent = "";
typing();