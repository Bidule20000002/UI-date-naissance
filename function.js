const grid = document.getElementById('grid');
const marker = document.getElementById('marker');
const valueDisplay = document.getElementById('value');

grid.addEventListener('click', (event) => {
    // Récupérer les dimensions et la position de la grille
    const rect = grid.getBoundingClientRect();
    const positionX = event.clientX - rect.left;
    const positionY = event.clientY - rect.top;

    // Calculer les pourcentages par rapport aux dimensions de la grille
    const percentageX = Math.round(positionX / rect.width * 400)+1624;
    const percentageY = 365 - Math.round(positionY / rect.height * 365);

    // Déplacer le marqueur
    marker.style.left = `${positionX}px`;
    marker.style.top = `${positionY}px`;

    // Afficher les positions
    valueDisplay.textContent = `Date de naissance: ${Math.round(percentageY%31)}/${Math.round((percentageY/31)%12)}/${percentageX}`;
    localStorage.setItem('date', `Date de naissance: ${Math.round(percentageY%31)}/${Math.round((percentageY/31)%12)}/${percentageX}`)
});

function Button(){
    //const data = localStorage.getItem(date);
    const data = "date enregistrer"
    alert(data);
}

// pour le nom et prénom :

// Liste des lettres de l'alphabet
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Récupérer les éléments HTML
const slider = document.getElementById("letter-slider");
const selectedLetter = document.getElementById("selected-letter");

// Mettre à jour la lettre sélectionnée lorsque le curseur change
slider.addEventListener("input", function () {
    const prenom = []
    const letterIndex = parseInt(slider.value, 10); // Convertir la valeur en nombre
    selectedLetter.textContent = alphabet[letterIndex]; // Récupérer la lettre correspondante
    //prenom.push(electedLetter.textContent)

});

// Initialiser avec la première lettre
selectedLetter.textContent = alphabet[0];
