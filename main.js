
async function search() {

  // 8.	Zorg ervoor dat de waarde uit het input veld wordt gebruikt als query voor het GET request.
  // Er moet alleen een request gedaan worden als de gebruiker op enter drukt, of op de zoek-knop klikt.

  const searchBar = document.getElementById("country-search");
  // console.log("SEARCHBAR VALUE?", searchBar.value)
  const countrySearch = searchBar.value

  // try {

  const response = await fetch(`https://restcountries.com/v3.1/name/${countrySearch}`)
  const data = await response.json()
  console.log("What is DATA?", data[0])

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
  console.log("WHAT IS VALUTAS?", valutas)

  // get all keys of object -> ["EUR", "USD", "GBP"]
  let currencyCodes = Object.keys(valutas)

  // how many do we have? Important if you want to make an excpetion for the last one
  let nrOfCurrencies = currencyCodes.length

  let outputCurrency = currencyCodes
    //     // we start 0 and slice off the last element (length -1), that way we only have ["EUR", "USD"]
        .slice(0, nrOfCurrencies -1)
    //     // for each currency, get the name -> ["euro", "dollar"]
    .map(code => valutas[code].name)
  console.log("OUTPUTCURRENCY?", outputCurrency)

function moreOutputCurrency() {
        if (nrOfCurrencies > 1 && nrOfCurrencies < 3) {
           return outputCurrency.join(", ") + ` and ${valutas[currencyCodes.slice(-1)].name}`
    }
  }
    const moreCurrency = moreOutputCurrency()

  //     // join the valutas together with a string -> "euro, dollar" (now a string) this would work even with more valutas
  //     // ` and ${valutas[currencyCodes.slice(-1)].name}` -> get the last element of the array with slice, and get the name from the object -> " and pound"  
  //     // combine the 2 strings we have left "euro, dollar" + " and pound"


  // LANGUAGES:
  const languages = data[0].languages
  console.log("WHAT IS LANGUAGES?", languages)

  // option 2.
  // get all keys of object -> ["deu", "fra", "nld"]
  let languagesKeys = Object.keys(languages)
  // console.log("WHAT IS languagesKeys?", languagesKeys)

  // how many do we have? Important if you want to make an excpetion for the last one
  let nrOfLanguages = languagesKeys.length
let outputLanguages = languagesKeys
    // we start 0 and slice off the last element (length -1), that way we only have ["deu", "fra"]
    .slice(0, nrOfLanguages - 1)
    // for each currency, get the name -> ["German", "French"]
    .map(code => languages[code])
  
  function moreOutputLanguages() {
    if (nrOfLanguages === 1) {
      return   outputLanguages
    }
    else if (nrOfLanguages > 1 && nrOfLanguages <= 3) {
        let outputLanguages = languagesKeys
    // we start 0 and slice off the last element (length -1), that way we only have ["deu", "fra"]
    .slice(0, nrOfLanguages - 1)
    // for each currency, get the name -> ["German", "French"]
    .map(code => languages[code])
  // join the languages together with a string -> "German, French" (now a string) this would work even with more languages
  // ` and ${languages[languagesKeys.slice(-1)]}` -> get the last element of the array with slice, and get the name from the object -> " and Dutch"
  // combine the 2 strings we have left "German, French" + " and Dutch"
      return outputLanguages.join(", ") + ` and ${languages[languagesKeys.slice(-1)]}`;
    }
  }
const moreLanguages = moreOutputLanguages()
  
  // console: German, French and Dutch -> correct result if they speak more than 2 or 3 languages but if they speak only 1 language it will log: " , and Hungarian"


  // option 3.
  // let outputLanguages = ""
  // let languagesCodes = Object.keys(languagesKeys)
  // for (let i = 0; i < languagesCodes.length; i++) { */}
  //   if (i < languagesCodes.length - 1) {
  //     outputLanguages = outputLanguages + `${languagesKeys[languagesCodes[i]]}, `
  //   } else {
  //     outputLanguages = outputLanguages + `and ${languagesKeys[languagesCodes[i]]}`
  //   }
  // }
  // console.log("What is outputLanguages?", outputLanguages) 
  // console: deu, fra and nld -> not the correct result



  const flag = data[0].flags.png
  // console.log("WHAT IS FLAG?", flag)

  const flagImg = document.getElementById("flag-img").src = `${flag}`
  // console.log("WHAT IS FLAGIMG?", flagImg)

  const countryInformation = document.getElementById("country-info");
  // console.log("WHAT IS COUNTRYINFORMATION?", countryInformation)
  countryInformation.textContent = `${countryName} is situated in ${subareaName}. It has a population of ${amount} people.
    The capital is ${capitalCity} and you can pay with ${moreCurrency}. They speak ${moreLanguages}`
  document.appendChild("country-info")

  // }

  // catch (e) {
  //   document.getElementById("err").textContent = "This country doesn't exist or your spelling is incorrect. Please try again."
  //   document.getElementById("err").innerHTML = e;
  // }

  // catch (error) {
  //     //console.log("WHAT IS ERROR?", error);
  //     document.getElementById("country-info").textContent = "This country doesn't exist or your spelling is incorrect. Please try again.";
  //     document.getElementById("flag-img").png = "";
  // }

}

document.getElementById("searchBtn").addEventListener("click", search)
document.getElementById("country-search").addEventListener("click", function() {
  document.getElementById("country-info").innerHTML = ''
  document.getElementById("flag-img").src = ''
})


// 7.	Maak een inputveld op de pagina en zorg ervoor dat als de gebruiker op enter drukt,
// de functie wordt aangeroepen waarmee de gegevens over België worden opgehaald.

const countrySearch = document.getElementById("country-search");
countrySearch.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    // !!! Dit begrijp ik niet meer! Cancel the default action, if needed
    event.preventDefault();

    document.getElementById("searchBtn").click();

    // 9.	Zorg ervoor dat de waarde van het input veld wordt leeggemaakt na elke zoekopdracht.
    document.getElementById("country-search").value = ''

  }
});


//if statement
//     // 1 valuta: and you can pay with [currency]
//     // 2 valuta's: and you can pay with [currency]'s and [currency]'s
//
// if statement
//     // 1 taal: They speak [language]
//     // 2 talen: They speak [language] and [language]
//     // 3 talen: They speak [language], [language] and [language]
