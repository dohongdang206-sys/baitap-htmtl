const form = document.getElementById("registerForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmInput = document.getElementById("confirmPassword");
const phoneInput = document.getElementById("phone");

const submitBtn = document.getElementById("submitBtn");

const nameIcon = document.getElementById("nameIcon");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const confirmError = document.getElementById("confirmError");
const phoneError = document.getElementById("phoneError");

const strengthFill = document.getElementById("strengthFill");
const strengthText = document.getElementById("strengthText");

const formState = {
    name: false,
    email: false,
    password: false,
    confirm: false,
    phone: false
};

// =======================
// NAME VALIDATION
// =======================

function validateName() {

    const value = nameInput.value.trim();

    if (value.length >= 2 && value.length <= 50) {

        formState.name = true;

        nameIcon.textContent = "✅";

        nameError.textContent = "";

    } else {

        formState.name = false;

        nameIcon.textContent = "❌";

        nameError.textContent = "Name must be 2-50 characters";
    }

    updateSubmitButton();
}

nameInput.addEventListener("input", validateName);

// =======================
// EMAIL VALIDATION
// =======================

function validateEmail() {

    const value = emailInput.value.trim();

    const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!value) {

        emailError.textContent = "Email is required";

        formState.email = false;

    } else if (!emailRegex.test(value)) {

        emailError.textContent = "Invalid email format";

        formState.email = false;

    } else {

        emailError.textContent = "";

        formState.email = true;
    }

    updateSubmitButton();
}

emailInput.addEventListener("input", validateEmail);

// =======================
// PASSWORD VALIDATION
// =======================

function validatePassword() {

    const value = passwordInput.value;

    let strength = 0;

    const hasLowerUpper =
        /[a-z]/.test(value) &&
        /[A-Z]/.test(value);

    const hasNumber =
        /\d/.test(value);

    const hasSpecial =
        /[!@#$%^&*]/.test(value);

    if (value.length >= 8) {
        strength++;
    }

    if (hasLowerUpper && hasNumber) {
        strength++;
    }

    if (hasLowerUpper && hasNumber && hasSpecial) {
        strength++;
    }

    switch (strength) {

        case 1:
            strengthFill.style.width = "33%";
            strengthFill.style.background = "red";
            strengthText.textContent = "Weak";
            formState.password = false;
            break;

        case 2:
            strengthFill.style.width = "66%";
            strengthFill.style.background = "orange";
            strengthText.textContent = "Medium";
            formState.password = true;
            break;

        case 3:
            strengthFill.style.width = "100%";
            strengthFill.style.background = "green";
            strengthText.textContent = "Strong";
            formState.password = true;
            break;

        default:
            strengthFill.style.width = "0%";
            strengthText.textContent = "";
            formState.password = false;
    }

    validateConfirmPassword();

    updateSubmitButton();
}

passwordInput.addEventListener("input", validatePassword);

// =======================
// CONFIRM PASSWORD
// =======================

function validateConfirmPassword() {

    if (
        confirmInput.value &&
        confirmInput.value === passwordInput.value
    ) {

        confirmError.textContent = "";

        formState.confirm = true;

    } else {

        confirmError.textContent =
            "Passwords do not match";

        formState.confirm = false;
    }

    updateSubmitButton();
}

confirmInput.addEventListener(
    "input",
    validateConfirmPassword
);

// =======================
// PHONE FORMAT
// =======================

function formatPhone(value) {

    const numbers =
        value.replace(/\D/g, "");

    let formatted = "";

    if (numbers.length > 0) {
        formatted += numbers.substring(0, 4);
    }

    if (numbers.length >= 5) {
        formatted += "-" + numbers.substring(4, 7);
    }

    if (numbers.length >= 8) {
        formatted += "-" + numbers.substring(7, 10);
    }

    return formatted;
}

function validatePhone() {

    phoneInput.value =
        formatPhone(phoneInput.value);

    const raw =
        phoneInput.value.replace(/\D/g, "");

    if (raw.length === 10) {

        phoneError.textContent = "";

        formState.phone = true;

    } else {

        phoneError.textContent =
            "Phone must be 10 digits";

        formState.phone = false;
    }

    updateSubmitButton();
}

phoneInput.addEventListener(
    "input",
    validatePhone
);

// =======================
// SUBMIT BUTTON
// =======================

function updateSubmitButton() {

    const allValid =
        Object.values(formState)
            .every(value => value);

    submitBtn.disabled = !allValid;
}

// =======================
// SUCCESS MODAL
// =======================

form.addEventListener("submit", (e) => {

    e.preventDefault();

    openSuccessModal();
});

function openSuccessModal() {

    const overlay =
        document.createElement("div");

    overlay.className = "modal-overlay";

    const modal =
        document.createElement("div");

    modal.className = "modal";

    const title =
        document.createElement("h2");

    title.textContent =
        "🎉 Registration Successful!";

    const name =
        document.createElement("p");

    name.textContent =
        `Name: ${nameInput.value}`;

    const email =
        document.createElement("p");

    email.textContent =
        `Email: ${emailInput.value}`;

    const phone =
        document.createElement("p");

    phone.textContent =
        `Phone: ${phoneInput.value}`;

    const closeBtn =
        document.createElement("button");

    closeBtn.className = "close-btn";

    closeBtn.textContent = "Close";

    closeBtn.addEventListener("click", () => {
        overlay.remove();
    });

    modal.append(
        title,
        name,
        email,
        phone,
        closeBtn
    );

    overlay.appendChild(modal);

    document.body.appendChild(overlay);
}