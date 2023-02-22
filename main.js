
async function search() {

  const searchBar = document.getElementById("country-search");
  // console.log("SEARCHBAR VALUE?", searchBar.value)
  const countrySearch = searchBar.value

  try {

  const response = await fetch(`https://restcountries.com/v3.1/name/${countrySearch}`)
  const data = await response.json()
    if (response.status === 404) {
      throw new Error("Country not found")
    }
  // console.log("What is DATA?", data[0])

  const countryName = data[0].name.common
  // console.log("WHAT IS COUNTRYNAME?", countryName)
  const subareaName = data[0].subregion
  // console.log("WHAT IS SUBREGION?", subareaName)
  const amount = data[0].population
  // console.log("WHAT IS POPULATION?", amount)
  const capitalCity = data[0].capital
  // console.log("WHAT IS CAPITAL?", capitalCity)

  // CURRENCY:
  const valutas = data[0].currencies
  // console.log("WHAT IS VALUTAS?", valutas)
  let currencyCodes = Object.keys(valutas)
  // console.log("currencyCodes?", currencyCodes)
  let nrOfCurrencies = currencyCodes.length
  // console.log("nrOfCurrencies?", nrOfCurrencies)
    
function moreOutputCurrency() {
    if (nrOfCurrencies === 1) {
      let outputCurrency = currencyCodes
    // for each currency, get the name -> ["German", "French"]
    .map(code => valutas[code].name)
      // console.log("outputCurrency?", outputCurrency[0].name)
      return   outputCurrency
      }
    else if (nrOfCurrencies > 1 && nrOfCurrencies <= 3) {
        let outputCurrency = currencyCodes
        .slice(0, nrOfCurrencies -1)
        .map(code => valutas[code].name)
  // console.log("OUTPUTCURRENCY?", outputCurrency)
           return outputCurrency.join(", ") + ` and ${valutas[currencyCodes.slice(-1)].name}`
    }
  }
    const moreCurrency = moreOutputCurrency()

  // LANGUAGES:
  const languages = data[0].languages
  // console.log("WHAT IS LANGUAGES?", languages)
  let languagesKeys = Object.keys(languages)
  // console.log("WHAT IS languagesKeys?", languagesKeys)
  let nrOfLanguages = languagesKeys.length
  // console.log(nrOfLanguages)
  
  function moreOutputLanguages() {
    if (nrOfLanguages === 1) {
      // console.log(outputLanguages)
      let outputLanguages = languagesKeys
      return   outputLanguages
      }
    else if (nrOfLanguages > 1 && nrOfLanguages <= 3) {
        let outputLanguages = languagesKeys
        .slice(0, nrOfLanguages - 1)
        .map(code => languages[code])
      return outputLanguages.join(", ") + ` and ${languages[languagesKeys.slice(-1)]}`;
    }
  }
  const moreLanguages = moreOutputLanguages()
  // console.log(moreLanguages)

  const flag = data[0].flags.png
  // console.log("WHAT IS FLAG?", flag)

  const flagImg = document.getElementById("flag-img").src = `${flag}`
  // console.log("WHAT IS FLAGIMG?", flagImg)

  const countryInformation = document.getElementById("country-info");
  // console.log("WHAT IS COUNTRYINFORMATION?", countryInformation)
  countryInformation.textContent = `${countryName} is situated in ${subareaName}. It has a population of ${amount} people.
    The capital is ${capitalCity} and you can pay with ${moreCurrency}. They speak ${moreLanguages}.`
  }
  catch (e) {
    document.getElementById("err").textContent = "This country doesn't exist or your spelling is incorrect. Please try again."
    document.getElementById("err").innerHTML = e;
  }
}

document.getElementById("searchBtn").addEventListener("click", search)
document.getElementById("country-search").addEventListener("click", function() {
  document.getElementById("country-info").innerHTML = ''
  document.getElementById("flag-img").src = ''
})

const countrySearch = document.getElementById("country-search");
countrySearch.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("searchBtn").click();
    document.getElementById("country-search").value = ''
    document.getElementById("country-info").innerHTML = ''
    document.getElementById("err").innerHTML = ''
  }
});
