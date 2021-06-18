# JobOffers

Aplikacja “IT Jobs” - oferty pracy w IT

Obiekt “job” {
"title":"PHP Developer",
"street":"Centrum 12",
"city":"Wrocław",
"country":"PL",
"workplace_type":"remote",
"company_name":"mediawave",
"company_url":"http://www.mediawave.de",
"company_logo_url":"ADRES ZDJĘCIA",
"experience_level":"senior",
"published_at":"2021-06-03T20:00:07.473Z",
“descripion”: “Szukamy osób doświadczonych jako PHP Developer”,
“salary-min”: 7000,
“salary-max”: 14000,
“salary-currency”: PLN,
“apply_link”: “LINK DO OFERTY BĄDŹ ADRESU EMAIL”
}

Gdzie trzymać obiekty typu job? Albo w tablicy pod zmienną “jobs” w kodzie JS albo w localStorage (co byłoby prostsze).

Funkcjonalności jakie powinny być w aplikacji:
wyświetlanie wszystkich ofert pracy
wyświetlanie po kategoriach (np. sam PHP  lub sam Javascript) oraz miejscowościach
sortowanie ofert pracy po widełkach płacowych
dodać required na wszystkie pola
x możliwość dodania oferty pracy
x możliwość aplikowania na daną ofertę pracy (link do oferty na stronie firmy bądź adres email)
x przycisk “pokaż więcej”, dzięki któremu odpali się cała oferta (gdzie na dole będzie “zwiń”)


User stories:
jako pracodawca chciałbym dodać ofertę pracy na portal, gdzie oferta zostanie dodana na samą górę strony
jako user chciałbym wybrać ofertę z listy, rozwinąć ją i kliknąć przycisk z aplikowaniem
jako user chciałbym wyświetlić wszystkie oferty
jako user chciałbym filtrować oferty po widełkach płacowych
jako user chciałbym otrzymać oferty tylko z wybranej kategorii
