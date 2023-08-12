// Créer un événément au scroll

// Cacher la navbar si l'utilisateur comment à descendre et la sortir quand il remonte

// Stocker la valeur du précédent niveau de scroll pour savoir si l'on est monté ou descendu

// Connaitre niveau de scroll (window.scrollY)

let lastScroll = 0; // on cree une variable initialiser à zero(0) qui va stocker la derniere position de notre scroll.

window.addEventListener("scroll", () => {
    // Quand la position actuelle du scroll est inferieur à la position de la derniere fois qu'on a scroller execute le code suivant.
    if (window.scrollY < lastScroll) {
        navbar.style.top = 0;
    // Sinon la nav reste à sa position initiale.
    } else {
        navbar.style.top = "-60px";
    }

    lastScroll = window.scrollY; // on affecte à lastScroll la valeur de la derniere position du scroll elle est differente de la position actuelle.
});

