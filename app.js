const cards = document.querySelectorAll(".card");
const cardImg = document.querySelectorAll(".cardImg");

cards.forEach((card) => {
  card.addEventListener("click", (e) => {
    let cardImage = card.querySelector(".cardImg");
    cardImage.classList.toggle("hidden");
    // console.log(card.classList);
    // e.classList.toggle("hidden");
  });
});
