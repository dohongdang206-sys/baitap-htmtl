const images = [
    "https://placehold.co/800x500/orange/white?text=Image+1",
    "https://placehold.co/800x500/blue/white?text=Image+2",
    "https://placehold.co/800x500/green/white?text=Image+3",
    "https://placehold.co/800x500/red/white?text=Image+4",
    "https://placehold.co/800x500/purple/white?text=Image+5",
    "https://placehold.co/800x500/pink/white?text=Image+6",
    "https://placehold.co/800x500/black/white?text=Image+7",
    "https://placehold.co/800x500/yellow/black?text=Image+8",
    "https://placehold.co/800x500/gray/white?text=Image+9"
];

const commands = [
    "Open Gallery",
    "Next Image",
    "Previous Image",
    "Play Slideshow",
    "Pause Slideshow",
    "Close Modal",
    "Toggle Theme",
    "Focus Search"
];

const gallery = document.getElementById("gallery");

const modalOverlay =
    document.getElementById("modalOverlay");

const modalImage =
    document.getElementById("modalImage");

const openModalBtn =
    document.getElementById("openModalBtn");

const closeModalBtn =
    document.getElementById("closeModalBtn");

const prevBtn =
    document.getElementById("prevBtn");

const nextBtn =
    document.getElementById("nextBtn");

const playBtn =
    document.getElementById("playBtn");

const commandOverlay =
    document.getElementById("commandOverlay");

const commandInput =
    document.getElementById("commandInput");

const commandList =
    document.getElementById("commandList");

let currentIndex = 0;

let slideshow = null;

let isPlaying = false;

// =======================
// RENDER GALLERY
// =======================

function renderGallery() {

    images.forEach((src, index) => {

        const img =
            document.createElement("img");

        img.src = src;

        img.alt = `Gallery Image ${index + 1}`;

        img.tabIndex = 0;

        img.setAttribute(
            "aria-label",
            `Open image ${index + 1}`
        );

        img.addEventListener("click", () => {
            openModal(index);
        });

        img.addEventListener("keydown", (e) => {

            if (e.key === "Enter") {
                openModal(index);
            }
        });

        gallery.appendChild(img);
    });
}

// =======================
// MODAL
// =======================

function openModal(index) {

    currentIndex = index;

    updateModalImage();

    modalOverlay.classList.remove("hidden");
}

function closeModal() {

    modalOverlay.classList.add("hidden");

    stopSlideshow();
}

function updateModalImage() {

    modalImage.src = images[currentIndex];
}

function nextImage() {

    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    updateModalImage();
}

function prevImage() {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    updateModalImage();
}

// =======================
// SLIDESHOW
// =======================

function startSlideshow() {

    slideshow = setInterval(() => {
        nextImage();
    }, 2000);

    isPlaying = true;

    playBtn.textContent = "⏸ Pause";
}

function stopSlideshow() {

    clearInterval(slideshow);

    isPlaying = false;

    playBtn.textContent = "▶ Play";
}

function toggleSlideshow() {

    if (isPlaying) {
        stopSlideshow();
    } else {
        startSlideshow();
    }
}

// =======================
// COMMAND PALETTE
// =======================

function openCommandPalette() {

    commandOverlay.classList.remove("hidden");

    commandInput.focus();

    renderCommands(commands);
}

function closeCommandPalette() {

    commandOverlay.classList.add("hidden");

    commandInput.value = "";
}

function renderCommands(commandArray) {

    commandList.innerHTML = "";

    commandArray.forEach(command => {

        const li =
            document.createElement("li");

        li.className = "command-item";

        li.textContent = command;

        li.tabIndex = 0;

        li.setAttribute(
            "aria-label",
            command
        );

        li.addEventListener("click", () => {
            executeCommand(command);
        });

        commandList.appendChild(li);
    });
}

function executeCommand(command) {

    switch (command) {

        case "Open Gallery":
            openModal(0);
            break;

        case "Next Image":
            nextImage();
            break;

        case "Previous Image":
            prevImage();
            break;

        case "Play Slideshow":
            startSlideshow();
            break;

        case "Pause Slideshow":
            stopSlideshow();
            break;

        case "Close Modal":
            closeModal();
            break;

        case "Toggle Theme":
            document.body.classList.toggle("dark");
            break;
    }

    closeCommandPalette();
}

// =======================
// SEARCH COMMANDS
// =======================

commandInput.addEventListener("input", () => {

    const keyword =
        commandInput.value.toLowerCase();

    const filtered =
        commands.filter(command =>
            command
                .toLowerCase()
                .includes(keyword)
        );

    renderCommands(filtered);
});

// =======================
// BUTTON EVENTS
// =======================

openModalBtn.addEventListener("click", () => {
    openModal(0);
});

closeModalBtn.addEventListener("click", closeModal);

nextBtn.addEventListener("click", nextImage);

prevBtn.addEventListener("click", prevImage);

playBtn.addEventListener("click", toggleSlideshow);

// =======================
// KEYBOARD EVENTS
// =======================

document.addEventListener("keydown", (e) => {

    // CTRL + K
    if (e.ctrlKey && e.key.toLowerCase() === "k") {

        e.preventDefault();

        openCommandPalette();
    }

    // ESC
    if (e.key === "Escape") {

        closeModal();

        closeCommandPalette();
    }

    // LEFT / RIGHT
    if (!modalOverlay.classList.contains("hidden")) {

        if (e.key === "ArrowRight") {
            nextImage();
        }

        if (e.key === "ArrowLeft") {
            prevImage();
        }

        // SPACE
        if (e.code === "Space") {

            e.preventDefault();

            toggleSlideshow();
        }

        // NUMBER 1-9
        const number = parseInt(e.key);

        if (number >= 1 && number <= 9) {

            currentIndex = number - 1;

            updateModalImage();
        }
    }

    // ENTER SELECT COMMAND
    if (
        !commandOverlay.classList.contains("hidden")
        && e.key === "Enter"
    ) {

        const firstItem =
            document.querySelector(".command-item");

        if (firstItem) {

            executeCommand(
                firstItem.textContent
            );
        }
    }
});

// =======================
// INIT
// =======================

renderGallery();