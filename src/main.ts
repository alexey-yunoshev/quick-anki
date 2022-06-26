import { updateWikislownikArticle } from "./sites/wikislownik";

function isWikislownikArticle(href: string) {
    return href.startsWith('https://pl.wiktionary.org/wiki/');
}

window.onload = () => {
    const url = window.location.href;

    if (isWikislownikArticle(url)) {
        updateWikislownikArticle();
    }
};