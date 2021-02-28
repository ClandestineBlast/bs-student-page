const leftMenuButtons: NodeListOf<HTMLButtonElement> = 
    document.querySelectorAll('.left-menu button');

leftMenuButtons.forEach(button => button.onclick = leftMenuEventHandler);

function leftMenuEventHandler(){
    const currentButton: HTMLButtonElement = this;
    if (currentButton.hasAttribute('target')) {
        const currentActiveWindow: HTMLDivElement =
            document.querySelector('.main-window .active')
        currentActiveWindow.classList.toggle('active');
        currentActiveWindow.classList.toggle('hidden');

        const newActiveWindow: HTMLDivElement = 
            document.querySelector(currentButton.getAttribute('target'));
        newActiveWindow.classList.toggle('active');
        newActiveWindow.classList.toggle('hidden');
    }
}

const alertCloseButtons: NodeListOf<HTMLButtonElement> =
    document.querySelectorAll('.alert button')

alertCloseButtons.forEach(button => button.onclick = alertEventHandler);

function alertEventHandler() {
    const currentButton: HTMLButtonElement = this;
    currentButton.parentElement.classList.toggle('alert-closed');
}