const bouton = document.getElementById("btnMessage");
const message = document.getElementById("message");

bouton.addEventListener("click", function () {
    message.textContent = "Merci de visiter ma page";
});


function voirPlus(id, bouton) {
    const contenu = document.getElementById(id);

    if (contenu.style.display === "none") {
        contenu.style.display = "inline";  // Affiche le texte
        bouton.textContent = "Voir moins"; // Change le texte du bouton
    } else {
        contenu.style.display = "none";    // Cache le texte
        bouton.textContent = "Voir plus";  // Remet le texte du bouton
    }
}