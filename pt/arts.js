document.addEventListener("DOMContentLoaded", () => {
  const galeria = document.getElementById("galeria");

  fetch("arts.json")
    .then(response => response.json())
    .then(imagens => {
      imagens.forEach(img => {
        const imgElement = document.createElement("img");
        imgElement.src = "images/arts/" + img;
        imgElement.alt = img;
        imgElement.classList.add("thumb");

        // destaque ao passar o mouse
        imgElement.addEventListener("mouseover", () => {
          imgElement.classList.add("highlight");
        });
        imgElement.addEventListener("mouseout", () => {
          imgElement.classList.remove("highlight");
        });

        // mostrar imagem grande ao clicar
        imgElement.addEventListener("click", () => {
          const overlay = document.createElement("div");
          overlay.classList.add("overlay");

          const bigImg = document.createElement("img");
          bigImg.src = "images/arts/" + img;
          bigImg.classList.add("big-image");

          overlay.appendChild(bigImg);
          document.body.appendChild(overlay);

          overlay.addEventListener("click", () => overlay.remove());
        });

        galeria.appendChild(imgElement);
      });
    })
    .catch(err => console.error("Erro ao carregar imagens:", err));
});