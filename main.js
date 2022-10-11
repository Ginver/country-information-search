


async function searchByCountry() {
    const response = await fetch("https://restcountries.com/v3.1/all")
    // console.log("RESPONSE?", response)
    const countries = await response.json()
    console.log("DATA?", countries) // country objecten

    // [country-naam]
    const allCountryNames = countries.map((country) => {
        return country.name.common
    })
    console.log("ALLCOUNTRYNAMES?", allCountryNames)

    // [subarea-name]
    const allSubareaNames = countries.map((country) => {
        return country.subregion
    })
    console.log("SUBREGION?", allSubareaNames)

    // It has a population of [amount] people.
    const population = countries.map((country) => {
        return country.population
    })
    console.log("POPULATION?", population)

//    The capital is [city]
    const countryCapital = countries.map((country) => {
        return country.capital // doesn't work
    })
    console.log("COUNTRYCAPITAL?", countryCapital)

}
searchByCountry()