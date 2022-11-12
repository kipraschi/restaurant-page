export default function loadAboutPage() {
    const main = document.createElement('main');
    const text = document.createElement('h4');
    text.setAttribute('style', 'white-space: pre-line;');
    text.textContent = 
    'Our mission is to ensure each plate we serve \n\
    is full of delicious taste, familiar texture and sweet love, \n\
    while being high in protein, fiber and gluten-free. \n\
    We hope that eating with us encourages people eat more plants. \n\
    Better for people, better for the planet, \n\
    better for all the animals that call it home.'
    main.append(text);

    document.querySelector('#content').append(main);
};

//random about us text:

/*
Our mission is to ensure each plate we serve
is full of delicious taste, familiar texture and sweet love, 
while being high in protein, fiber and gluten-free.
We hope that eating with us encourages people eat more plants. 
Better for people, better for the planet, 
better for all the animals that call it home.
*/