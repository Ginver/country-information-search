Maak een 'Zoek'-knop op de pagina en koppel deze aan een functie die de gegevens over België ophaalt 
en dit in de console logt. 
Tip: Als de de documentatie bekijkt en op async zoekt, vindt je een voorbeeld van een GET-request.

Maak op basis van de response de volgende string en log dit in de console:
[country-naam] is situated in [subarea-name]. It has a population of [amount] people.

Maak op basis van de response de volgende string en log dit in de console: The capital is [city]

Maak een functie die ongeacht het aantal currencies die in een land gebruikt worden, een string maakt. In een land kunnen één of twee currencies gebruikt worden:

1 valuta: and you can pay with [currency]'s
2 valuta's: and you can pay with [currency]'s and [currency]'s
Check of alles nog steeds werkt als je de gegevens over Aruba of Duitsland ophaalt!

Bonusopdracht: Maak een functie die ongeacht het aantal talen die in een land gesproken worden, een string maakt:

1 taal: They speak [language]
2 talen: They speak [language] and [language]
3 talen: They speak [language], [language] and [language]
etc.
Zorg ervoor dat de opgehaalde data op de volgende manier wordt toegevoegd aan de DOM:

[IMAGE: flag]
[country-name]
[country-naam] is situated in [subarea-name]. It has a population of [amount] people.
The capital is [city] and you can pay with [currency]'s
They speak [language], [language] and [language]
Maak een inputveld op de pagina en zorg ervoor dat als de gebruiker op enter drukt, de functie wordt aangeroepen waarmee de gegevens over België worden opgehaald.

Zorg ervoor dat de waarde uit het input veld wordt gebruikt als query voor het GET request. Er moet alleen een request gedaan worden als de gebruiker op enter drukt, of op de zoek-knop klikt. Tip: gebruik een globale variabele.

Zorg ervoor dat de waarde van het input veld wordt leeggemaakt na elke zoekopdracht.

Zorg ervoor dat er altijd maar één zoekresultaat op de pagina staat.

Zorg ervoor dat als er naar een land wordt gezocht dat niet bestaat, er een foutmelding in de DOM wordt gezet. Tip: als er een ongeldige API call wordt gemaakt, zal de response in het catch blok terecht komen.

Zorg ervoor dat als je na een ongeldige API call weer een geldige API call maakt, de foutmelding verdwenen is.

Bonusopdracht: make it look nice! 😍"# country-information-search" 
