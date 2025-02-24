// Verkrijg de naam van de gebruiker uit localStorage
const userName = localStorage.getItem('userName');

// Als de naam beschikbaar is, toon de naam in de welkomsttekst
if (userName) {
    document.getElementById("keuze-type").textContent = `Salam alaykoum, ${userName}!`;
}

const organisatieKnop = document.getElementById("organisatie-knop");
const afbeelding = document.querySelector("#organisatie-icon");


organisatieKnop.addEventListener("click", function() {
    // Voeg de klasse 'active' toe aan de knop wanneer erop geklikt wordt
    organisatieKnop.classList.add("active");
    afbeelding.classList.add("active");
    deelnemerKnop.classList.remove("active");
    afbeeldingdeelnemer.classList.remove("active");

});

const deelnemerKnop = document.getElementById("deelnemer-knop");
const afbeeldingdeelnemer = document.querySelector("#deelnemer-icon");


deelnemerKnop.addEventListener("click", function() {
    // Voeg de klasse 'active' toe aan de knop wanneer erop geklikt wordt
    deelnemerKnop.classList.add("active");
    afbeeldingdeelnemer.classList.add("active");
    organisatieKnop.classList.remove("active");
    afbeelding.classList.remove("active");

});

const gaVederknop = document.getElementById("ga-verder-knop");

gaVederknop.addEventListener("click", function(){
    if (organisatieKnop.classList.contains("active")){
        window.location.href = "gegevensorganisatie.html";
    }
})
