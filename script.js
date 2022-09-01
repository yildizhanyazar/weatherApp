const info = document.querySelector(".inputText");
const infoBtn = document.querySelector(".btn");

infoBtn.addEventListener("click", () => {
   getData(info.value);
});
function getData(namers) {
   const API = "Buraya API key giriniz";
   const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${namers}&appid=${API}&units=metric&lang=tr`;
   fetch(baseURL)
      .then((res) => res.json())
      .then((data) => {
         const {
            name,
            sys: { country },
            main: { temp, feels_like },
            weather: [{ description }],
         } = data;
         const city = document.querySelector("#sehir");
         const temperature = document.querySelector("#sicaklik");
         const weatherDesc = document.querySelector("#havaDurumu");
         const feel = document.querySelector("#hissedilen");
         city.textContent = `> ${name},${country}`;
         temperature.textContent += `> ${temp}`;
         weatherDesc.textContent = `> ${description.toUpperCase()}`;
         feel.textContent += `> ${feels_like}`;
         info.value = "";
      })
      .catch((err) => console.warn(err));
}
