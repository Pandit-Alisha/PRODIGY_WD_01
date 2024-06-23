document.addEventListener('DOMContentLoaded', () => {

    const aboutButton = document.getElementById('aboutButton'); 
    const popup = document.getElementById('popup'); 
    const closeButton = document.querySelector('.close-button'); 

    if (aboutButton && popup && closeButton) {
        aboutButton.addEventListener('click', () => {
            popup.style.display = 'block';
        });

        closeButton.addEventListener('click', () => {
            popup.style.display = 'none';
        });
    }

    const surpriseButton = document.getElementById('surpriseButton');
    const interestingFact = document.getElementById('interestingFact');

    const interestingFacts = [
        "The first email was sent by Ray Tomlinson to himself in 1971.",
        "The Eiffel Tower can be 15 cm taller during the summer due to thermal expansion.",
        "A group of flamingos is called a 'flamboyance'.",
        "Honey never spoils:--> Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible.",
        "Octopuses have three hearts: two pump blood to the gills, and one pumps it to the rest of the body."
    ];

    if (surpriseButton && interestingFact) {
        surpriseButton.addEventListener('click', () => {
            const randomFact = interestingFacts[Math.floor(Math.random() * interestingFacts.length)];
            interestingFact.textContent = randomFact;
            interestingFact.classList.remove('hidden'); 
        });
    }
});
