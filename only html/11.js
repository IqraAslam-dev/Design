const cards = document.querySelectorAll(".card");

for (const card of cards) {
    const cardInfo = card.querySelector(".card__info > span");
    const cardProduct = cardInfo.innerText;
    const cardNav = card.querySelectorAll(".cardNav > *");

    cardNav.forEach((el) => {
        el.addEventListener("mouseenter", function () {
            const data = this.dataset.info;
            cardInfo.classList.add("hover");
            cardInfo.innerText = data;
        });
    });

    cardNav.forEach((el) => {
        el.addEventListener("mouseleave", () => {
            cardInfo.classList.remove("hover");
            cardInfo.innerText = cardProduct;
        });
    });
}
