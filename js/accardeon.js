//блок аккардеон
AOS.init();

let label = document.querySelectorAll('.label');

label.forEach((event) => {
    event.addEventListener('click', function(el) {        
        let panel = event.nextElementSibling;
        let tag = el.target;
        
        if (panel.style.display === "block") { 
            panel.style.display = "none";
          } else {
            panel.style.display = "block";
          }
          if (panel.style.display === "none") { 
          }
        });
})

// блок бургер -меню

// let res = document.querySelector('.menu-btn')

// res.addEventListener('click', function (el) {
//   el.preventDefault();
//   let tag = el.target;
//   let res = tag.parentElement;
//   res.classList.toggle('menu-active')
//   let content = res.nextElementSibling; // content-menu
//   content.classList.toggle('content-menu-active')
  
// })


// плавный скролл

const smoothLinks = document.querySelectorAll("a[href^='#']");
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener("click", function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute("href");

        document.querySelector(id).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
};


// куки 

document.getElementById("year").innerHTML = new Date().getFullYear();



// faq
let square = document.querySelector('.square');
let panelItem = document.querySelectorAll('.panel-title'),
  active = document.getElementsByClassName('panel-active');

Array.from(panelItem).forEach(function(item, i, panelItem) {
  item.addEventListener('click', function(e) {
    if (active.length > 0 && active[0] !== this)  // если есть активный элемент, и это не тот по которому кликнули
      active[0].classList.remove('panel-active'); // убрать класс panel-active

    // изменить состояние класса panel-active на текущем элементе: добавить если не было, убрать если было.
    this.classList.toggle('panel-active');    
    this.classList.add('square');    
  });
});
