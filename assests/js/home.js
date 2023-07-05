AOS.init();
// let radios = document.getElementsByName('room-card');
// console.log(radios);

// for (let i=0;i<radios.length;i++){
//     radios[i].onclick(function(){

//     })
// }
// Get references to the radio buttons and option content elements
const radioButtons = document.querySelectorAll('input[name="content-option"]');
console.log(radioButtons);
const optionContents = document.querySelectorAll('.option-content');
console.log(optionContents);
// Hide all option content elements except the default selected one
optionContents.forEach((content, index) => {
    if (index !== 0) {
        content.style.display = 'none';
    }
});

// Add event listener to radio buttons
radioButtons.forEach(radio => {
    radio.addEventListener('change', () => {
        // Get the value of the selected radio button
        const selectedOption = document.querySelector('input[name="content-option"]:checked').value;

        // Hide all option content elements
        optionContents.forEach(content => {
            content.style.display = 'none';
        });

        // Show the selected option content
        const selectedContent = document.getElementById(`${selectedOption}-content`);
        selectedContent.style.display = 'block';
    });
});

// Guest room Picker
// Get necessary elements
const guestRoomInput = document.getElementById('guest-room-input');
const popupDiv = document.getElementById('popup-div');
const doneBtn = document.getElementById('done-btn');

let clickCount = 0;

// Function to show or hide the popup div based on click count
function togglePopup() {
  clickCount++;
  if (clickCount % 2 !== 0) {
    popupDiv.style.display = 'block';
  } else {
    popupDiv.style.display = 'none';
  }
}

// Function to update the input with selected values
function updateInput() {
  const noOfRooms = document.getElementById('no-of-rooms').value;
  const noOfAdults = document.getElementById('no-of-adults').value;
  const noOfChildren = document.getElementById('no-of-children').value;

  guestRoomInput.value = `${noOfRooms} Room(s), ${noOfAdults} Adult(s), ${noOfChildren} Child(ren)`;

  togglePopup();
}

// Event listeners
guestRoomInput.addEventListener('click', togglePopup);
doneBtn.addEventListener('click', updateInput);