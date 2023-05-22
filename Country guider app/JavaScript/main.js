const searchBtn = document.querySelector("#search-btn");
const countryInput = document.querySelector("#country-inp");
const countryDetails = document.querySelector("#result");

searchBtn.addEventListener("click", (e) => {
  const m = "m";
  let countryName = countryInput.value;
  let countryUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  console.log(countryUrl);

  fetch(countryUrl)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      countryDetails.innerHTML = `
      <div class="top-card"> 
        <img src="${data[0].flags.svg}" class="flag-img">
        <h2>${data[0].name.common}</h2>
      </div>
      <div class ="info">
         <div class="details">
           <h4>Capital City:</h4>
           <span>${data[0].capital[0]}</span>
         </div>
      </div>
      <div class ="info">
         <div class="details">
           <h4>Continent:</h4>
           <span>${data[0].continents[0]}</span>
         </div>
      </div>
      <div class ="info">
         <div class="details">
           <h4>Area:</h4>
           <span>${data[0].area}</span>
         </div>
      </div>
      <div class ="info">
         <div class="details">
           <h4>Population:</h4>
           <span>${data[0].population}</span>
         </div>
      </div>
       <div class ="info">
         <div class="details">
           <h4>Currency:</h4>
           <span>${
             data[0].currencies[Object.keys(data[0].currencies)].name
           } - ${Object.keys(data[0].currencies)[0]}</span>
         </div>
      </div>
      <div class ="info">
         <div class="details">
           <h4>Comman Languages:</h4>
           <span>${Object.values(data[0].languages)
             .toString()
             .split(" ,")
             .join(" ,")}</span>
         </div>
      </div>
      <div class ="info">
         <div class="details">
           <h4>Country Code:</h4>
           <span>${data[0].fifa}</span>
         </div>
      </div>
      `;
    })
    .catch((err) => {
      if (countryName.length === 0) {
        countryDetails.innerHTML = `<span class = "error">Please enter a country name</span>`;
      } else {
        countryDetails.innerHTML = `<span class="error">Country not found</span>`;
      }
    });
});
