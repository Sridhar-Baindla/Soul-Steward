const messages = [
  "You are already enough.",
  "Stillness is your superpower.",
  "Even the moon rests in darkness.",
  "Your quiet matters.",
  "Soft hearts are the strongest."
];
const shownMessages = [];
function showGratitude() {
  const remaining = messages.filter(msg => !shownMessages.includes(msg));
  const message = remaining.length > 0? remaining[Math.floor(Math.random() * remaining.length)]: messages[Math.floor(Math.random() * messages.length)];
  const el = document.getElementById('gratitude-message');
  el.textContent = message;
  el.style.opacity = 0;
  el.style.transition = 'opacity 0.6s ease';
  setTimeout(() => el.style.opacity = 1, 10);
  if (!shownMessages.includes(message)) {
    shownMessages.push(message);
    const listItem = document.createElement('li');
    listItem.textContent = message;
    document.getElementById('archive-list').appendChild(listItem);
  }
}
function navigateToPresence() {
  window.open("./HTML/presence.html", "_self");
}
function navigateToMemory() {
  window.open("./HTML/memory.html", "_self");
}
function navigateToEmotional() {
  window.open("./HTML/emotional.html", "_self");
}
function navigateToInvisible() {
  window.open("./HTML/invisible.html", "_self");
}
function navigateToGratitude() {
  window.open("./HTML/gratitude.html", "_self");
}
function toggleMenu() {
    const menu = document.getElementById('sideMenu');
    const toggleButton = document.getElementById('menu-toggle');

    menu.classList.toggle('active');
    toggleButton.classList.toggle('active'); // add/remove class to change color
  }