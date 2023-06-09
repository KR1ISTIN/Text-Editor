const butInstall = document.getElementById('buttonInstall');
const textHeader = document.getElementById('textHeader');

// Logic for installing the PWA
// an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    butInstall.style.visibility = 'visible';
    textHeader.textContent = 'Click button to install'
});

// a click event handler on the `butInstall` element
butInstall.addEventListener('click', async (event) => {
    event.preventDefault();
    butInstall.setAttribute('disabled', true);
    butInstall.textContent = 'Installed';
});

// an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    textHeader.textContent = 'Successfully installed!';
    console.log('👍', 'app installed', event);
});
