let navbar = document.getElementById("header");
let scrollPrevious = window.pageYOffset;
window.onscroll = function(){
  let scrollCurrent = window.pageYOffset;
  if(scrollPrevious > scrollCurrent)
  {
    navbar.style.top = "0px";
  }
  else
  {
    navbar.style.top = "-90px";
  }
  scrollPrevious = scrollCurrent;
}





function scrollHeader(){
  const header = document.getElementById('header')
  if(this.scrollY >= 10) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll',scrollHeader)





// navbar script


const navSlide = () =>{
  const burger = document.querySelector(".burger");
  const nav  =  document.querySelector(".nav_menu");
  const navLinks = document.querySelectorAll(".nav_list li");

  navLinks.forEach((el) => {
    el.addEventListener('click', function(){
      nav.classList.remove('nav-active');

      // animated links
    navLinks.forEach((link, index)=>{
      if(link.style.animation) {
      link.style.animation = '';
      } else{
      link.style.animation = 'navLinkFade2 0.5s ease forwards ${index / 7 + 2}s';
      }
  });
  burger.classList.remove('toggle');

    })
  })


  burger.addEventListener('click', ()=>{

  // toogle nav
  if(nav.classList.contains('nav-active'))
  {
      nav.classList.remove('nav-active');

        // animated links
      navLinks.forEach((link, index)=>{
        if(link.style.animation) {
        link.style.animation = '';
        } else{
        link.style.animation = 'navLinkFade2 0.5s ease forwards ${index / 7 + 2}s';
        }
    });
  burger.classList.remove('toggle');

  }
  else
  {
        nav.classList.add('nav-active');

        // animated links
      navLinks.forEach((link, index)=>{
        if(link.style.animation) {
        link.style.animation = '';
        } else{
        link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 + 2}s';
        }
    });
  burger.classList.toggle('toggle');

  }


  // burger animation
});



}

navSlide();