const galerieImage = document.getElementById("allImages");
let monImage = getImage("titre", "../images/food.png");


galerieImage.innerHTML = monImage;

function getImage(titre, urlImage){
    titre = sanitizeHtml(titre);
    urlImage = sanitizeHtml(urlImage);
    return`<div class="col p-3">
            <div class="image-card text-white">
                <img src="../images/food.png" alt="food" class="rounded w-100">
                <p class="titre-image">Titre</p>
                <div class="action-image-buttons" data-show="admin">
                    <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#EditionPhotoModal"><i class="bi bi-pencil-square"></i></a></button>
                    <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#DeletePhotoModal"><i class="bi bi-trash"></i></a></button>
                </div>
            </div>`
}