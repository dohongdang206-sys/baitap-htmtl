const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const loading = document.getElementById("loading");
const errorBox = document.getElementById("error");
const errorText = document.getElementById("errorText");

const weatherResult = document.getElementById("weatherResult");

const cityName = document.getElementById("cityName");
const temp = document.getElementById("temp");
const humidity = document.getElementById("humidity");
const description = document.getElementById("description");
const weatherIcon = document.getElementById("weatherIcon");

const historyList = document.getElementById("historyList");


// ========================
// Fetch Weather
// ========================

async function getWeather(city) {

    if (!city) return;

    showLoading();

    try {

        const response = await fetch(
            `https://wttr.in/${city}?format=j1`
        );

        if (!response.ok) {
            throw new Error("Không tìm thấy thành phố");
        }

        const data = await response.json();

        const current = data.current_condition[0];

        showWeather({
            city,
            temperature: current.temp_C,
            humidity: current.humidity,
            description: current.weatherDesc[0].value,
            icon: current.weatherIconUrl[0].value
        });

        saveHistory(city);

    } catch (error) {

        showError("Không thể lấy dữ liệu thời tiết!");

    }
}


// ========================
// UI States
// ========================

function showLoading() {

    loading.classList.remove("hidden");

    errorBox.classList.add("hidden");
    weatherResult.classList.add("hidden");
}

function showWeather(weather) {

    loading.classList.add("hidden");
    errorBox.classList.add("hidden");

    weatherResult.classList.remove("hidden");

    cityName.textContent = weather.city;
    temp.textContent = weather.temperature;
    humidity.textContent = weather.humidity;
    description.textContent = weather.description;

    weatherIcon.src = weather.icon;
}

function showError(message) {

    loading.classList.add("hidden");
    weatherResult.classList.add("hidden");

    errorBox.classList.remove("hidden");

    errorText.textContent = message;
}


// ========================
// Search History
// ========================

function saveHistory(city) {

    let history = JSON.parse(
        localStorage.getItem("weatherHistory")
    ) || [];

    // Xóa nếu trùng
    history = history.filter(item => item !== city);

    // Thêm lên đầu
    history.unshift(city);

    // Chỉ lấy 5 thành phố
    history = history.slice(0, 5);

    localStorage.setItem(
        "weatherHistory",
        JSON.stringify(history)
    );

    renderHistory();
}

function renderHistory() {

    const history = JSON.parse(
        localStorage.getItem("weatherHistory")
    ) || [];

    historyList.innerHTML = "";

    history.forEach(city => {

        const li = document.createElement("li");

        li.textContent = city;

        li.addEventListener("click", () => {
            getWeather(city);
        });

        historyList.appendChild(li);
    });
}


// ========================
// Events
// ========================

searchBtn.addEventListener("click", () => {

    const city = cityInput.value.trim();

    getWeather(city);
});

cityInput.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {

        getWeather(cityInput.value.trim());
    }
});


// ========================
// Init
// ========================

renderHistory();s