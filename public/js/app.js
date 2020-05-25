const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const result = document.querySelector("#msg1");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value;
  result.textContent = "loading...";
  fetch("http://localhost:3000/weather?address=" + location).then(
    (response) => {
      response.json().then((data) => {
        if (data.error) {
          result.textContent = data.error;
        } else {
          result.textContent = data.location;
          result.textContent = data.forecast;
        }
      });
    }
  );
});
