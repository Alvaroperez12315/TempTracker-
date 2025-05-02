const claveApi = "5d05784b35234799bac54506250205"; // Reemplaza con tu API Key de WeatherAPI
const idioma = "es";

async function buscarClima() {
    const ciudad = document.querySelector("#input-ciudad").value;
    const apiClimaActual = `https://api.weatherapi.com/v1/current.json?q=${ciudad}&lang=${idioma}&key=${claveApi}`;

    try {
        const respuesta = await fetch(apiClimaActual);
        const data = await respuesta.json();
        mostrarClima(data);
    } catch (error) {
        console.error("Error al obtener datos del clima:", error);
    }
}

function mostrarClima(data) {
    document.querySelector("#clima-info").style.display = "block";
    document.querySelector("#ciudad").textContent = data.location.name + ", " + data.location.country;
    document.querySelector("#icono-clima").src = "https:" + data.current.condition.icon;
    document.querySelector("#descripcion").textContent = data.current.condition.text;
    document.querySelector("#temperatura span").textContent = `Temperatura: ${data.current.temp_c}°C`;
    document.querySelector("#humedad span").textContent = `Humedad: ${data.current.humidity}%`;
    document.querySelector("#viento span").textContent = `Viento: ${data.current.wind_kph} km/h`;
}
