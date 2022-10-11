


async function searchByCountry() {
    const response = await fetch("https://restcountries.com/v3.1/all")
    console.log("RESPONSE?", response)
}
searchByCountry()