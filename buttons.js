var leftMenuButtons = document.querySelectorAll('.left-menu button');
leftMenuButtons.forEach(function (button) { return button.onclick = leftMenuEventHandler; });
function leftMenuEventHandler() {
    var currentButton = this;
    if (currentButton.hasAttribute('target')) {
        var currentActiveWindow = document.querySelector('.main-window .active');
        currentActiveWindow.classList.toggle('active');
        currentActiveWindow.classList.toggle('hidden');
        var newActiveWindow = document.querySelector(currentButton.getAttribute('target'));
        newActiveWindow.classList.toggle('active');
        newActiveWindow.classList.toggle('hidden');
    }
}
var alertCloseButtons = document.querySelectorAll('.alert button');
alertCloseButtons.forEach(function (button) { return button.onclick = alertEventHandler; });
function alertEventHandler() {
    var currentButton = this;
    currentButton.parentElement.classList.toggle('alert-closed');
}
