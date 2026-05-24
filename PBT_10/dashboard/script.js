const weatherStatus = document.getElementById("weatherStatus");
const weatherContent = document.getElementById("weatherContent");

const countryStatus = document.getElementById("countryStatus");
const countryContent = document.getElementById("countryContent");

const usersStatus = document.getElementById("usersStatus");
const usersContent = document.getElementById("usersContent");

const globalLoading = document.getElementById("globalLoading");
const loadTime = document.getElementById("loadTime");

const refreshBtn = document.getElementById("refreshBtn");

function setLoading() {
    weatherStatus.textContent = "Loading...";
    countryStatus.textContent = "Loading...";
    usersStatus.textContent = "Loading...";

    weatherStatus.className = "status loading";
    countryStatus.className = "status loading";
    usersStatus.className = "status loading";

    globalLoading.style.display = "block";
}

async function loadDashboard() {

    setLoading();

    const startTime = Date.now();

    try {

        const results = await Promise.allSettled([

            // Weather API
            fetch(
                "https://api.open-meteo.com/v1/forecast?latitude=21.03&longitude=105.85&current_weather=true"
            ).then(r => r.json()),

            // Country API
            fetch(
                "https://restcountries.com/v3.1/name/vietnam"
            ).then(r => r.json()),

            // Random User API
            fetch(
                "https://randomuser.me/api/?results=5"
            ).then(r => r.json())

        ]);

        // WEATHER
        if (results[0].status === "fulfilled") {

            const data = results[0].value.current_weather;

            weatherStatus.textContent = "Success";
            weatherStatus.className = "status success";

            weatherContent.innerHTML = `
                <p>Temperature: ${data.temperature}°C</p>
                <p>Wind Speed: ${data.windspeed} km/h</p>
            `;

        } else {

            weatherStatus.textContent = "Error";
            weatherStatus.className = "status error";

            weatherContent.innerHTML = `
                <p>${results[0].reason.message}</p>
            `;
        }

        // COUNTRY
        if (results[1].status === "fulfilled") {

            const country = results[1].value[0];

            countryStatus.textContent = "Success";
            countryStatus.className = "status success";

            countryContent.innerHTML = `
                <p><strong>Name:</strong> ${country.name.common}</p>
                <p><strong>Capital:</strong> ${country.capital[0]}</p>
                <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
                <img src="${country.flags.png}" width="120">
            `;

        } else {

            countryStatus.textContent = "Error";
            countryStatus.className = "status error";

            countryContent.innerHTML = `
                <p>${results[1].reason.message}</p>
            `;
        }

        // USERS
        if (results[2].status === "fulfilled") {

            const users = results[2].value.results;

            usersStatus.textContent = "Success";
            usersStatus.className = "status success";

            usersContent.innerHTML = users.map(user => `
                <div class="user">
                    <img src="${user.picture.medium}">
                    <div>
                        <p>${user.name.first} ${user.name.last}</p>
                        <small>${user.email}</small>
                    </div>
                </div>
            `).join("");

        } else {

            usersStatus.textContent = "Error";
            usersStatus.className = "status error";

            usersContent.innerHTML = `
                <p>${results[2].reason.message}</p>
            `;
        }

    } catch (error) {

        console.error(error);

    } finally {

        const totalTime = Date.now() - startTime;

        loadTime.textContent = `Data loaded in ${totalTime} ms`;

        globalLoading.style.display = "none";
    }
}

refreshBtn.addEventListener("click", loadDashboard);

loadDashboard();