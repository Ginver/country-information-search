# Country information search page:

#### Create a 'Search' button on the page and link it to a function that retrieves data about Belgium
and logs this into the console.

#### Based on the response, create the following string and log it into the console:
[country-name] is situated in [subarea-name]. It has a population of [amount] people. 
The capital is [city].

#### Create a function that returns a string regardless of the number of currencies used in a country.
One or two currencies can be used in a country:
1 currency: and you can pay with [currency]'s
2 currencies: and you can pay with [currency]'s and [currency]'s
Check if everything still works when you retrieve the data for Aruba or Germany!

#### Bonus Challenge: Create a function that creates a string regardless of the number of languages spoken in a country:
1 language: They speak [language]
2 languages: They speak [language] and [language]
3 languages: They speak [language], [language] and [language]

#### Make sure that the retrieved data is added to the DOM in the following way:
[IMAGE: flag]
[country name]
[country-name] is situated in [subarea-name]. It has a population of [amount] people.
The capital is [city] and you can pay with [currency]'s
They speak [language], [language] and [language]
Create an input field on the page and make sure that when the user presses enter, the function is called that retrieves the data about Belgium.

#### Make sure that the value from the input field is used as a query for the GET request. A request only needs to be made when the user presses enter or clicks the search button. Tip: use a global variable.

#### Make sure the value of the input field is cleared after every search.

#### Make sure there is always only one search result on the page.

#### Make sure that searching for a country that doesn't exist puts an error in the DOM. Tip: If an invalid API call is made, the response will end up in the catch block.

#### Make sure that if you make a valid API call again after an invalid API call, the error message is gone.

#### Bonus assignment: make it look nice! 😍"# country-information-search"
