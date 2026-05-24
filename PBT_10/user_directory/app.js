// ======================
// STATE
// ======================

let users = [];
let filteredUsers = [];

// ======================
// API LAYER
// ======================

const api = {

    baseURL: "https://jsonplaceholder.typicode.com",

    async getUsers() {

        const response = await fetch(`${this.baseURL}/users`);

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        return await response.json();
    },

    async getUser(id) {

        const response = await fetch(`${this.baseURL}/users/${id}`);

        if (!response.ok) {
            throw new Error("Failed to fetch user");
        }

        return await response.json();
    },

    async createUser(data) {

        const response = await fetch(`${this.baseURL}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error("Failed to create user");
        }

        return await response.json();
    },

    async updateUser(id, data) {

        const response = await fetch(`${this.baseURL}/users/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error("Failed to update user");
        }

        return await response.json();
    },

    async deleteUser(id) {

        const response = await fetch(`${this.baseURL}/users/${id}`, {
            method: "DELETE"
        });

        if (!response.ok) {
            throw new Error("Failed to delete user");
        }

        return true;
    }
};

// ======================
// UI LAYER
// ======================

const ui = {

    renderUsers(users) {

        const userList = document.getElementById("userList");

        if (users.length === 0) {
            userList.innerHTML = "<p>No users found</p>";
            return;
        }

        userList.innerHTML = users.map(user => `
            <div class="user-card">

                <h3>${user.name}</h3>

                <p>📧 ${user.email}</p>

                <p>📱 ${user.phone || "N/A"}</p>

                <div class="card-buttons">

                    <button
                        class="edit-btn"
                        onclick="handleEdit(${user.id})"
                    >
                        Edit
                    </button>

                    <button
                        class="delete-btn"
                        onclick="handleDelete(${user.id})"
                    >
                        Delete
                    </button>

                </div>

            </div>
        `).join("");
    },

    showLoading() {
        document.getElementById("loading").classList.remove("hidden");
    },

    hideLoading() {
        document.getElementById("loading").classList.add("hidden");
    },

    showError(message) {

        const toast = document.getElementById("toast");

        toast.className = "toast-error";
        toast.innerText = message;
        toast.style.display = "block";

        setTimeout(() => {
            toast.style.display = "none";
        }, 3000);
    },

    showSuccess(message) {

        const toast = document.getElementById("toast");

        toast.className = "toast-success";
        toast.innerText = message;
        toast.style.display = "block";

        setTimeout(() => {
            toast.style.display = "none";
        }, 3000);
    }
};

// ======================
// LOAD USERS
// ======================

async function loadUsers() {

    try {

        ui.showLoading();

        users = await api.getUsers();

        filteredUsers = [...users];

        ui.renderUsers(filteredUsers);

    } catch (error) {

        ui.showError(error.message);

    } finally {

        ui.hideLoading();
    }
}

// ======================
// CREATE / UPDATE
// ======================

const form = document.getElementById("userForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const id = document.getElementById("userId").value;

    const userData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value
    };

    try {

        if (id) {

            // UPDATE

            const updatedUser = await api.updateUser(id, userData);

            users = users.map(user =>
                user.id == id ? updatedUser : user
            );

            ui.showSuccess("User updated!");

        } else {

            // CREATE

            const newUser = await api.createUser(userData);

            newUser.id = Date.now();

            users.unshift(newUser);

            ui.showSuccess("User created!");
        }

        filteredUsers = [...users];

        ui.renderUsers(filteredUsers);

        form.reset();

        document.getElementById("formWrapper")
            .classList.add("hidden");

    } catch (error) {

        ui.showError(error.message);
    }
});

// ======================
// EDIT
// ======================

async function handleEdit(id) {

    try {

        const user = await api.getUser(id);

        document.getElementById("userId").value = user.id;
        document.getElementById("name").value = user.name;
        document.getElementById("email").value = user.email;
        document.getElementById("phone").value = user.phone;

        document.getElementById("formTitle")
            .innerText = "Edit User";

        document.getElementById("formWrapper")
            .classList.remove("hidden");

    } catch (error) {

        ui.showError(error.message);
    }
}

// ======================
// DELETE
// ======================

async function handleDelete(id) {

    const confirmed = confirm(
        "Are you sure you want to delete this user?"
    );

    if (!confirmed) return;

    try {

        await api.deleteUser(id);

        users = users.filter(user => user.id !== id);

        filteredUsers = [...users];

        ui.renderUsers(filteredUsers);

        ui.showSuccess("User deleted!");

    } catch (error) {

        ui.showError(error.message);
    }
}

// ======================
// SEARCH
// ======================

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", (e) => {

    const keyword = e.target.value.toLowerCase();

    filteredUsers = users.filter(user => {

        return (
            user.name.toLowerCase().includes(keyword) ||
            user.email.toLowerCase().includes(keyword)
        );
    });

    ui.renderUsers(filteredUsers);
});

// ======================
// SHOW FORM
// ======================

document.getElementById("addUserBtn")
    .addEventListener("click", () => {

        form.reset();

        document.getElementById("userId").value = "";

        document.getElementById("formTitle")
            .innerText = "Add User";

        document.getElementById("formWrapper")
            .classList.remove("hidden");
    });

// ======================
// CANCEL FORM
// ======================

document.getElementById("cancelBtn")
    .addEventListener("click", () => {

        document.getElementById("formWrapper")
            .classList.add("hidden");
    });

// ======================
// INIT
// ======================

loadUsers();