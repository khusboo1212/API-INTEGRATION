async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const resultDiv = document.getElementById("weatherResult");

  if (!city) {
    resultDiv.innerHTML = "Please enter a city name.";
    return;
  }

  try {
    resultDiv.innerHTML = "Loading...";
    const response = await fetch(`https://wttr.in/${city}?format=3`);
    const data = await response.text(); // it's plain text, not JSON
    resultDiv.innerHTML = `<p>${data}</p>`;
  } catch (error) {
    resultDiv.innerHTML = "Error: " + error.message;
  }
}
