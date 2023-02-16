
async function search() {

// 8.	Zorg ervoor dat de waarde uit het input veld wordt gebruikt als query voor het GET request.
// Er moet alleen een request gedaan worden als de gebruiker op enter drukt, of op de zoek-knop klikt.

    const searchBar = document.getElementById("country-search");
    // console.log("SEARCHBAR VALUE?", searchBar.value)

    // try {
    const countrySearch = searchBar.value
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

    const valutas = data[0].currencies
    console.log("WHAT IS VALUTAS?", valutas)

    // const allValutas = valutas.name
    // console.log("WHAT IS ALLVALUTAS?", allValutas)

    // const allValutas = valutas.map((valuta) => {
    //     return valuta[0].name
    // })
    // console.log("What are CURRENCIES?", allValutas)

    const languages = data[0].languages
    console.log("WHAT IS LANGUAGES?", languages)

    // const allLanguages = languages.map((language) => {
    //     return language
    // })
    // console.log("WHAT are ALLLANGUAGES?", allLanguages)

    const flag = data[0].flags.png
    // console.log("WHAT IS FLAG?", flag)

    const flagImg = document.getElementById("flag-img").src = `${flag}`
    // console.log("WHAT IS FLAGIMG?", flagImg)

    const countryInformation = document.getElementById("country-info");
    console.log("WHAT IS COUNTRYINFORMATION?", countryInformation)
    countryInformation.textContent =`${countryName} is situated in ${subareaName}. It has a population of ${amount} people.
    The capital is ${capitalCity} and you can pay with ${valutas}. They speak ${languages}`
    document.appendChild("country-info")

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
//     // 1 valuta: and you can pay with [currency]'s
//     // 2 valuta's: and you can pay with [currency]'s and [currency]'s
//
// if statement
//     // 1 taal: They speak [language]
//     // 2 talen: They speak [language] and [language]
//     // 3 talen: They speak [language], [language] and [language]
