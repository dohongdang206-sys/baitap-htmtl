const gallery = document.getElementById("gallery");
const loading = document.getElementById("loading");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close-btn");

let page = 1;
const limit = 20;

let isLoading = false;

/* =========================
   FETCH PHOTOS
========================= */

async function fetchPhotos() {
    try {
        isLoading = true;
        loading.style.display = "block";

        const response = await fetch(
            `https://picsum.photos/v2/list?page=${page}&limit=${limit}`
        );

        const photos = await response.json();

        renderPhotos(photos);

        page++;

    } catch (error) {
        console.error("Lỗi fetch ảnh:", error);
    } finally {
        isLoading = false;
        loading.style.display = "none";
    }
}

/* =========================
   RENDER PHOTOS
========================= */

function renderPhotos(photos) {

    photos.forEach(photo => {

        const card = document.createElement("div");
        card.className = "card";

        const img = document.createElement("img");

        // Lazy loading
        img.dataset.src = photo.download_url;

        img.alt = photo.author;

        // Click mở lightbox
        img.addEventListener("click", () => {
            openLightbox(photo.download_url);
        });

        card.appendChild(img);

        gallery.appendChild(card);

        imageObserver.observe(img);
    });
}

/* =========================
   LAZY LOAD IMAGES
========================= */

const imageObserver = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const img = entry.target;

            img.src = img.dataset.src;

            observer.unobserve(img);
        }
    });

}, {
    threshold: 0.1
});

/* =========================
   INFINITE SCROLL
========================= */

async function loadMorePhotos() {

    if (isLoading) return;

    await fetchPhotos();
}

const observer = new IntersectionObserver((entries) => {

    if (entries[0].isIntersecting) {
        loadMorePhotos();
    }

}, {
    threshold: 1
});

observer.observe(document.querySelector("#load-trigger"));

/* =========================
   LIGHTBOX
========================= */

function openLightbox(src) {
    lightbox.style.display = "flex";
    lightboxImg.src = src;
}

function closeLightbox() {
    lightbox.style.display = "none";
}

closeBtn.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

/* =========================
   LOAD FIRST PAGE
========================= */

fetchPhotos();