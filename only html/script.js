const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    const cardInfo = card.querySelector(".card__info > span");
    const originalText = cardInfo.innerText;

    card.querySelectorAll(".cardNav > li").forEach(navItem => {
        navItem.addEventListener("mouseenter", () => {
            cardInfo.innerText = navItem.dataset.info;
        });
        navItem.addEventListener("mouseleave", () => {
            cardInfo.innerText = originalText;
        });
    });
});
