const products = [
    { id: 1, name: "iPhone 16", price: 25990000, category: "phone", image: "https://placehold.co/200", rating: 4.5, inStock: true },
    { id: 2, name: "Samsung S25", price: 21990000, category: "phone", image: "https://placehold.co/200", rating: 4.4, inStock: true },
    { id: 3, name: "MacBook Air M4", price: 32990000, category: "laptop", image: "https://placehold.co/200", rating: 4.9, inStock: true },
    { id: 4, name: "Dell XPS 15", price: 28990000, category: "laptop", image: "https://placehold.co/200", rating: 4.7, inStock: false },
    { id: 5, name: "iPad Pro", price: 24990000, category: "tablet", image: "https://placehold.co/200", rating: 4.8, inStock: true },
    { id: 6, name: "Galaxy Tab S9", price: 18990000, category: "tablet", image: "https://placehold.co/200", rating: 4.3, inStock: true },
    { id: 7, name: "AirPods Pro", price: 6990000, category: "accessory", image: "https://placehold.co/200", rating: 4.6, inStock: true },
    { id: 8, name: "Sony WH-1000XM5", price: 8990000, category: "accessory", image: "https://placehold.co/200", rating: 4.9, inStock: true },
    { id: 9, name: "ROG Phone 9", price: 23990000, category: "phone", image: "https://placehold.co/200", rating: 4.2, inStock: false },
    { id: 10, name: "Lenovo Legion 7", price: 35990000, category: "laptop", image: "https://placehold.co/200", rating: 4.8, inStock: true },
    { id: 11, name: "Xiaomi Pad 7", price: 12990000, category: "tablet", image: "https://placehold.co/200", rating: 4.1, inStock: true },
    { id: 12, name: "Logitech MX Master 3S", price: 2490000, category: "accessory", image: "https://placehold.co/200", rating: 4.7, inStock: true }
];

let currentCategory = "all";
let searchValue = "";
let currentSort = "";
let cartCount = 0;

const body = document.body;

function init() {
    createLayout();
    renderProducts(products);
}

function createLayout() {

    const container = document.createElement("div");
    container.className = "container";

    // CART
    const cartIcon = document.createElement("div");
    cartIcon.className = "cart-icon";
    cartIcon.innerHTML = "🛒";

    const badge = document.createElement("div");
    badge.className = "cart-badge";
    badge.textContent = cartCount;

    cartIcon.appendChild(badge);

    // TOPBAR
    const topbar = document.createElement("div");
    topbar.className = "topbar";

    // SEARCH
    const searchBox = document.createElement("div");
    searchBox.className = "search-box";

    const searchInput = document.createElement("input");
    searchInput.placeholder = "Search products...";

    searchInput.addEventListener("input", (e) => {
        searchValue = e.target.value.toLowerCase();
        updateProducts();
    });

    searchBox.appendChild(searchInput);

    // SORT
    const sortBox = document.createElement("div");
    sortBox.className = "sort-box";

    const sortSelect = document.createElement("select");

    const sortOptions = [
        { value: "", text: "Sort By" },
        { value: "price-asc", text: "Price Low to High" },
        { value: "price-desc", text: "Price High to Low" },
        { value: "name", text: "Name A-Z" },
        { value: "rating", text: "Highest Rating" }
    ];

    sortOptions.forEach(optionData => {
        const option = document.createElement("option");
        option.value = optionData.value;
        option.textContent = optionData.text;
        sortSelect.appendChild(option);
    });

    sortSelect.addEventListener("change", (e) => {
        currentSort = e.target.value;
        updateProducts();
    });

    sortBox.appendChild(sortSelect);

    // DARK MODE
    const themeBtn = document.createElement("button");
    themeBtn.className = "toggle-theme";
    themeBtn.textContent = "🌙 Dark Mode";

    themeBtn.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
    });

    topbar.append(searchBox, sortBox, themeBtn);

    // CATEGORY BUTTONS
    const categories = ["all", "phone", "laptop", "tablet", "accessory"];

    const categoryWrapper = document.createElement("div");
    categoryWrapper.className = "category-buttons";

    categories.forEach(category => {
        const button = document.createElement("button");

        button.textContent = category.toUpperCase();
        button.className = "category-btn";

        if (category === "all") {
            button.classList.add("active");
        }

        button.addEventListener("click", () => {

            document.querySelectorAll(".category-btn")
                .forEach(btn => btn.classList.remove("active"));

            button.classList.add("active");

            currentCategory = category;

            updateProducts();
        });

        categoryWrapper.appendChild(button);
    });

    // GRID
    const grid = document.createElement("div");
    grid.className = "product-grid";
    grid.id = "productGrid";

    container.append(topbar, categoryWrapper, grid);

    body.append(container, cartIcon);
}

function renderProducts(productList) {

    const grid = document.getElementById("productGrid");

    grid.innerHTML = "";

    productList.forEach(product => {

        const card = document.createElement("div");
        card.className = "product-card";

        // IMAGE
        const image = document.createElement("img");
        image.src = product.image;

        // INFO
        const info = document.createElement("div");
        info.className = "product-info";

        const title = document.createElement("h3");
        title.className = "product-title";
        title.textContent = product.name;

        const price = document.createElement("p");
        price.className = "product-price";
        price.textContent = product.price.toLocaleString("vi-VN") + "₫";

        const rating = document.createElement("p");
        rating.className = "product-rating";
        rating.textContent = `⭐ ${product.rating}`;

        const stock = document.createElement("p");
        stock.className = "stock";

        if (product.inStock) {
            stock.textContent = "In Stock";
            stock.classList.add("in-stock");
        } else {
            stock.textContent = "Out of Stock";
            stock.classList.add("out-stock");
        }

        // BUTTON
        const addBtn = document.createElement("button");
        addBtn.className = "add-cart-btn";
        addBtn.textContent = "Add to Cart";

        addBtn.addEventListener("click", (e) => {
            e.stopPropagation();

            cartCount++;

            document.querySelector(".cart-badge").textContent = cartCount;
        });

        // MODAL
        card.addEventListener("click", () => {
            openModal(product);
        });

        info.append(title, price, rating, stock, addBtn);

        card.append(image, info);

        grid.appendChild(card);
    });
}

function filterByCategory(productList) {

    if (currentCategory === "all") {
        return productList;
    }

    return productList.filter(
        product => product.category === currentCategory
    );
}

function searchProducts(productList) {

    return productList.filter(product =>
        product.name.toLowerCase().includes(searchValue)
    );
}

function sortProducts(productList) {

    const sorted = [...productList];

    switch (currentSort) {

        case "price-asc":
            sorted.sort((a, b) => a.price - b.price);
            break;

        case "price-desc":
            sorted.sort((a, b) => b.price - a.price);
            break;

        case "name":
            sorted.sort((a, b) => a.name.localeCompare(b.name));
            break;

        case "rating":
            sorted.sort((a, b) => b.rating - a.rating);
            break;
    }

    return sorted;
}

function updateProducts() {

    let filtered = [...products];

    filtered = filterByCategory(filtered);

    filtered = searchProducts(filtered);

    filtered = sortProducts(filtered);

    renderProducts(filtered);
}

function openModal(product) {

    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";

    const modal = document.createElement("div");
    modal.className = "modal";

    const image = document.createElement("img");
    image.src = product.image;

    const content = document.createElement("div");
    content.className = "modal-content";

    const title = document.createElement("h2");
    title.textContent = product.name;

    const price = document.createElement("p");
    price.textContent = `Price: ${product.price.toLocaleString("vi-VN")}₫`;

    const category = document.createElement("p");
    category.textContent = `Category: ${product.category}`;

    const rating = document.createElement("p");
    rating.textContent = `Rating: ⭐ ${product.rating}`;

    const stock = document.createElement("p");
    stock.textContent = product.inStock ? "Available" : "Out of stock";

    const closeBtn = document.createElement("button");
    closeBtn.className = "close-modal";
    closeBtn.textContent = "Close";

    closeBtn.addEventListener("click", () => {
        overlay.remove();
    });

    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
            overlay.remove();
        }
    });

    content.append(title, price, category, rating, stock, closeBtn);

    modal.append(image, content);

    overlay.appendChild(modal);

    body.appendChild(overlay);
}

init();