const navlinks = document.querySelectorAll(".nav__link");
const windowPathName = window.location.pathname;
navlinks.forEach(navlink =>{
if(navlink.href.includes(windowPathName)){
navlink.classList.add("active_navbar_arrow");
}
})

let hamburgur = document.querySelector(".hamburgur");
let navigation = document.querySelector(".navbar_wrapper");
hamburgur.addEventListener("click",()=>{
    navigation.classList.toggle("active_navigation");
})


// countor js starts 
let nums = document.querySelectorAll(".nums .num");
let section = document.querySelector(".progress_section");
let started = false; // Function Started? No

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 780) {
    if (!started) {
      nums.forEach((num) => startCount(num));
      started = true;
    }
  }
};

function startCount(el) {
    let goal = el.dataset.goal;
    let count = 0;
    let increment = goal / 200; // Adjust the increment to control the speed
  
    let countInterval = setInterval(() => {
      count += increment;
      el.textContent = Math.ceil(count);
  
      if (Math.ceil(count) >= goal) {
        clearInterval(countInterval);
        el.textContent = goal; // Ensure it displays the goal value exactly
      }
    }, 10); // Adjust the interval time to control the speed
  };

// gsap animation starts
gsap.registerPlugin(ScrollTrigger);
gsap.to(".hero_img_1" ,{
  opacity:1,
  x:150,
  duration:1,
  scrollTrigger:".hero_img_1"
});
gsap.registerPlugin(ScrollTrigger);
gsap.to(".hero_img_3" ,{
  opacity:1,
  x:-150,
  duration:1,
  scrollTrigger:".hero_img_3"
});
gsap.registerPlugin(ScrollTrigger);
gsap.to(".hero_img_2" ,{
  opacity:1,
  y:-150,
  duration:1,
  scrollTrigger:".hero_img_2"
});
gsap.registerPlugin(ScrollTrigger);
gsap.to(".hero_section_wrapper h1" ,{
  opacity:1,
  duration:2,
  scrollTrigger:".hero_section_wrapper h1"
});
gsap.registerPlugin(ScrollTrigger);
gsap.to(".hero_section_wrapper h2" ,{
  opacity:1,
  duration:2,
  scrollTrigger:".hero_section_wrapper h2"
});
gsap.registerPlugin(ScrollTrigger);
gsap.to(".hero_section_wrapper p" ,{
  opacity:1,
  duration:2,
  scrollTrigger:".hero_section_wrapper "
});
gsap.registerPlugin(ScrollTrigger);
gsap.to(".heading_downlode h1",{
  opacity:1,
  x:50,
  delay:.1,
  duration:1,
  scrollTrigger:".heading_downlode h1"
});
gsap.registerPlugin(ScrollTrigger);
gsap.to(".services_wrapper p",{
  opacity:1,
  x:50,
  delay:.4,
  duration:.5,
  scrollTrigger:".services_wrapper p"
});
gsap.registerPlugin(ScrollTrigger);
gsap.to(".Graphic",{
  delay:.6,
  opacity:1,
  x:50,
  duration:.5,
  scrollTrigger:".Graphic"
});
gsap.registerPlugin(ScrollTrigger);
gsap.to(".design",{
  delay:.6,
  opacity:1,
  x:50,
  duration:.5,
  scrollTrigger:".design"
});
gsap.registerPlugin(ScrollTrigger);
gsap.to(".development",{
  delay:.8,
  opacity:1,
  x:50,
  duration:.5,
  scrollTrigger:".development"
});
gsap.registerPlugin(ScrollTrigger);
gsap.to(".lead",{
  delay:1,
  opacity:1,
  x:50,
  duration:.5,
  scrollTrigger:".lead"
});
// gsap animation ends