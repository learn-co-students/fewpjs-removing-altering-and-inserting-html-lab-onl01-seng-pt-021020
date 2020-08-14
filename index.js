// Write your code here!
document.querySelector('main').remove();
const username = "Pablo";
const newHeader = document.createElement('h1');
newHeader.id = "victory";
newHeader.className = "victory";
newHeader.innerHTML = `${username} is the champion!`;