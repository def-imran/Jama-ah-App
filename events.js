// Het openen van de popup voor het maken van een nieuw evenement
const nieuweEvenementKnop = document.querySelector(".ga-verder-knop");
const nieuwEvenementPopup = document.querySelector(".nieuw-evenement-container");
const sluitPopupKnop = document.querySelector(".sluit-popup");

// Functie om de popup te openen
function openPopup() {
    nieuwEvenementPopup.style.display = "flex";
}

// Functie om de popup te sluiten
function closePopup() {
    nieuwEvenementPopup.style.display = "none";
}

// Event listener om de popup te openen wanneer de knop wordt ingedrukt
nieuweEvenementKnop.addEventListener("click", openPopup);

// Event listener om de popup te sluiten wanneer de sluitknop wordt ingedrukt
sluitPopupKnop.addEventListener("click", closePopup);

