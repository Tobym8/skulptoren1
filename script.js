/* Java Nedraknare */

/*Skriv javascriptkod för en nedräknare som räknar ned från dagens datum till 1 april 2024. Nedräkningen ska skrivas ut i elementet med id "nedraknare". Texten som skrivs ut ska vara "Skulptören", 
följt av xxx dagar, xxx timmar, xxx minuter, xxx sekunder. */

const nedraknareElement = document.getElementById("nedraknare");

// Datum för 1 april 2024
const targetDate = new Date("2024-04-01T00:00:00");

// Funktion för att uppdatera nedräkningen
function updateCountdown() {
    const now = new Date();
    const timeDifference = targetDate - now;

    // Beräkna antal dagar, timmar, minuter och sekunder
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Skapa textsträngen för nedräkningen
    const countdownText = `${days} ${hours} ${minutes} ${seconds}`;
    

    // Uppdatera elementet med nedräkningen
    nedraknareElement.textContent = countdownText;
}

// Uppdatera nedräkningen varje sekund
setInterval(updateCountdown, 1000);

/* Java Nav */
const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDown_Menu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
    dropDown_Menu.classList.toggle('open')
    const isOpen = dropDown_Menu.classList.contains('open')

    toggleBtnIcon.classList = isOpen 
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
};

/* Java Biljetter */
const container = document.querySelector('.containerseats');
const seats = document.querySelectorAll('.row .seat:not(.occupied');
const count = document.getElementById('count');

//update total
function updateSelectedCount() {
    const selectedSeat = document.querySelectorAll('.row .seat.selected'); 
    
    const selectedSeatCount = selectedSeat.length;
    
    count.innerText = selectedSeatCount;
}

container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected');
    }
    updateSelectedCount();
});