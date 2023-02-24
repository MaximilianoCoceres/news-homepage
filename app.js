let menu = document.querySelector(".menu");
let abrirMenu = document.querySelector(".btn__open");
let cerrarMenu = document.querySelector(".btn__close");

cerrarMenu.addEventListener("click", function () {
  menu.classList.remove("active");
});

abrirMenu.addEventListener("click", function () {
  menu.classList.toggle("active");
});

fetch("/notices.json")
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
    let notices = document.querySelector(".notices");
    let noticia = '';
    for (var i in data.noticias) {
      noticia += `<div class="notice">
      <div class="notice__img">
  
        <img src="${data.noticias[i].img}" alt="${data.noticias[i].alt}">
      </div>
      <div class="notice__text">
        <span>${data.noticias[i].number}</span>
        <a href="#"><h3>${data.noticias[i].title}</h3></a>
        <p>${data.noticias[i].description}</p>
      </div>
    </div>`;
    }


    notices.innerHTML = noticia;
  });
