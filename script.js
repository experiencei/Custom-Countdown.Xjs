const countdownForm = document.getElementById('countdownForm');
const inputContainer = document.getElementById('input-container');
const dateEl = document.getElementById('date-picker');


let countdownTitle = '';
let countdownDate = '';   


// Set Date Input Min & Value with Today's Date
const today = new Date().toISOString().split('T')[0];
dateEl.setAttribute('min', today);


function updateCountdown(e) {
    e.preventDefault();
    // Set title and date, save to localStorage
    countdownTitle = e.srcElement[0].value;
    countdownDate = e.srcElement[1].value;
    savedCountdown = {
      title: countdownTitle,
      date: countdownDate,
    };
    localStorage.setItem('countdown', JSON.stringify(savedCountdown));
    // Check if no date entered
    if (countdownDate === '') {
      alert('Please select a date for the countdown.');
    } else {
      // Get number version of current Date, updateDOM
      countdownValue = new Date(countdownDate).getTime();
      updateDOM();
    }
  }





countdownForm.addEventListener('submit', updateCountdown);