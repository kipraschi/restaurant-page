export default function loadHeader() {
    const header = document.querySelector('#header');

    const icon = document.createElement('div');
    const home = document.createElement('button');
    const about = document.createElement('button');
    const menu = document.createElement('button');
    const contact = document.createElement('button');

    home.classList.add('link');
    about.classList.add('link');
    menu.classList.add('link');
    contact.classList.add('link');

    home.textContent = 'Home';
    about.textContent = 'About Us';
    menu.textContent = 'Our Menu';
    contact.textContent = 'Contact Us';

    header.append(icon, home, about, menu, contact);
}