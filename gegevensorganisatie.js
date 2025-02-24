const gaVederknop = document.getElementById("ga-verder-knop");

gaVederknop.addEventListener("click", function(){
    if (organisatieKnop.classList.contains("active")){
        window.location.href = "events.html";
    }
})
