//Evento para carrusel dinámico
addEventListener("DOMContentLoaded", () => {
  const imagenes = [
    "./recursos/person.jpg",
    "./recursos/webDesign.jpg",
    "./recursos/javaProject.png",
    "./recursos/rugby.jpg",
    "./recursos/rugby2.jpg",
  ];
  let i = 1;
  const img1 = document.querySelector("#img1");
  const img2 = document.querySelector("#img2");
  const divPuntos = document.querySelector("#puntos");

  for (let index = 0; index < imagenes.length; index++) {
    const div = document.createElement("div");
    div.classList.add("circles");
    div.id = index;
    divPuntos.appendChild(div);
  }

  img1.src = imagenes[0];
  const circulos = document.querySelectorAll(".circles");
  circulos[0].classList.add("resaltado");

  const slideHow = () => {
    img2.src = imagenes[i];
    const circleAct = Array.from(circulos).find((el) => el.id == i);
    Array.from(circulos).forEach((cir) => cir.classList.remove("resaltado"));
    circleAct.classList.add("resaltado");

    img2.classList.add("active");

    i++;
    if (i === imagenes.length) {
      i = 0;
    }

    setTimeout(() => {
      img1.src = img2.src;
      img2.classList.remove("active");
    }, 1000);
  };

  setInterval(slideHow, 4000);
});
