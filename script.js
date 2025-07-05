
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(name, price) {
    const item = cart.find(i => i.name === name);
    if (item) {
        item.qty += 1;
    } else {
        cart.push({ name, price, qty: 1 });
    }
    updateCart();
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCart() {
    let count = cart.reduce((acc, item) => acc + item.qty, 0);
    document.getElementById('cart-count').textContent = count;
}

function setLanguage(lang) {
    const translations = {
        en: { welcome: "Welcome to Golden Sands Catering", dish1: "Bruschetta with salmon", dish2: "Bruschetta with shrimp" },
        ru: { welcome: "Добро пожаловать в Golden Sands Catering", dish1: "Брускетта с лососем", dish2: "Брускетта с креветкой" },
        ar: { welcome: "مرحبًا بكم في جولدن ساندز كاترينج", dish1: "بروشيتا مع السلمون", dish2: "بروشيتا مع الجمبري" }
    };
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        el.textContent = translations[lang][key];
    });
    localStorage.setItem('lang', lang);
}

window.onload = () => {
    updateCart();
    const lang = localStorage.getItem('lang') || 'en';
    setLanguage(lang);
};
