export default function loadHomePage() {
    const main = document.createElement('main');

    const hero = document.createElement('div');
    const left = document.createElement('div');
    const right = document.createElement('div');

    const heading3 = document.createElement('h3');
    const heading1 = document.createElement('h1');
    const heading2 = document.createElement('h2');

    const img = document.createElement('img');

    hero.classList.add('hero');
    left.classList.add('left');
    right.classList.add('right');

    heading3.textContent = 'Welcome to';
    heading1.textContent = 'Veagan';
    heading2.textContent = 'The Vegan Heaven';

    img.src = '/src/food.jpg';
    img.setAttribute('height', '500px');

    left.append(heading3, heading1, heading2);
    right.append(img);
    hero.append(left, right);
    main.append(hero);

    document.querySelector('#content').append(main);
};
