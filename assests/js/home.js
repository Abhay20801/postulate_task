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
