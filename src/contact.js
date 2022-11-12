export default function loadContactPage() {
    const main = document.createElement('main');

    const hoursHeading = document.createElement('h1');
    const hours = document.createElement('h2');
    const address = document.createElement('h3');
    const phone = document.createElement('h3');
    const map = document.createElement('button');

    hoursHeading.textContent = 'Hours';
    hours.setAttribute('style', 'white-space: pre;');
    hours.textContent = 'I – V: 11:30 – 20:00 \r\n';
    hours.textContent += 'VI: 11:30 – 21:00 \r\n';
    hours.textContent += 'VII: 12:00 – 19:00';

    address.textContent = '20 Green Street, 11994';
    phone.textContent = '+370 6677 7177';
    map.textContent = 'Open in Google Maps';
    
    main.append(hoursHeading, hours, phone, address, map);

    document.querySelector('#content').append(main);
};