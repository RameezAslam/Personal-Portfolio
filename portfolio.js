var typed = new Typed('#element', {
    strings: ['and I am a Front End Web Developer'],
    typeSpeed: 50,
  });


  const menuBtn = document.getElementById("menuBtn");
  const closeBtn = document.getElementById("closeBtn");
  const offcanvasMenu = document.getElementById("offcanvasMenu");

  menuBtn.addEventListener("click", () => {
      offcanvasMenu.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
      offcanvasMenu.classList.remove("active");
  });


  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
        entry.target.classList.add("show");
        } else if(!entry.isIntersecting) {
            entry.target.classList.remove("show");
        }
    });
    });

    document.querySelectorAll(".hidden").forEach((el) => observer.observe(el));

    const descriptionText = `Motivated Front-End Developer with a strong foundation in HTML, CSS, JavaScript,
    Bootstrap, and  React.js, along with basic knowledge of Tailwind CSS. Experienced in creating responsive, 
    mobile-friendly, and interactive applications. Eager to apply my skills in real-world, hands-on job
     opportunities.`

     let index = 0;
     const speed = 10;

     function typeEffect () {
       const descriptionElement = document.querySelector('.description');
       if(index < descriptionText.length) {
           descriptionElement.innerHTML += descriptionText.charAt(index);
           index++;
           setTimeout(typeEffect,speed);
       } else {
           return;
       }
     }
     window.onload = setInterval(() => {
        typeEffect();
     },4000 )


     document.addEventListener("DOMContentLoaded", function () {
        const headings = document.querySelectorAll(".heading");

        function checkScroll() {
            headings.forEach(heading => {
                const sectionPos = heading.getBoundingClientRect().top;
                const screenPos = window.innerHeight / 1.2;

                if (sectionPos < screenPos) {
                    heading.classList.add("show");  
                } else {
                    heading.classList.remove("show"); 
                }
            });
        }

         window.addEventListener("scroll", checkScroll);
    });


    document.addEventListener("DOMContentLoaded", function () {
        const sections = document.querySelectorAll("section");
        const navLinks = document.querySelectorAll(".nav-link");
    
        function setActiveLink() {
            let currentSectionId = "";
    
            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
    
                if (window.scrollY >= sectionTop - 200) { 
                    currentSectionId = section.getAttribute("id");
                }
            });
    
            navLinks.forEach((link) => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${currentSectionId}`) {
                    link.classList.add("active");
                }
            });
        }
    
        window.addEventListener("scroll", setActiveLink);
        setActiveLink(); 
    });
    
    