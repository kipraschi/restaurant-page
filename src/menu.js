export default function loadMenuPage() {
    const main = document.createElement('main');
    const test = document.createElement('h1');

    main.textContent = "MENU";
    main.append(test);
    
    document.querySelector('#content').append(main);
};