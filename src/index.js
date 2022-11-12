import css from "./style.css";
import loadHeader from "./header";
import loadHomePage from "./home";
import loadAboutPage from "./about";
import loadMenuPage from "./menu";
import loadContactPage from "./contact";

loadHeader();

const links = document.querySelectorAll('.link');
const modules = [loadHomePage, loadAboutPage, loadMenuPage, loadContactPage];

links.forEach((link, index) => {
    link.addEventListener("click", () => {
        clearPage(),
        modules[index]()});
});

function clearPage() {
    const content = document.querySelector('#content');
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    };
}
