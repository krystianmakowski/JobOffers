# Dokumentacja projektu IT Jobs
## Opis
IT Jobs jest aplikacją, dzięki której w łatwy sposób można znaleźć pracę w branży IT. System przedstawia listę aktualnych ofert pracy do firm z całej Polski - na każdą ofertę użytkownik systemu może aplikować. Z drugiej strony - w jeszcze prosty sposób można dodać własną ofertę pracy.

## Funkcjonalności
- wyświetlanie wszystkich ofert pracy,
- wyświetlanie ofert pracy według technologii oraz wymaganego doświadczenia,
- sortowanie ofert według wybranej pensji,
- możliwość dodania oferty pracy do systemu,
- możliwość aplikowania na daną ofertę pracy (link do oferty na stronie firmy),
- strzałka, dzięki które można zwijać i rozwijać kontener z ofertą

## Potencjalni odbiorcy systemu
- osoby poszukujące pracy,
- pracodawcy poszukujący pracownikow do firmy

## Korzyści dla użytkowników systemu
- znalezienie korzystnej pracy
- znalezienie pracownika branży IT

## Stos technologiczny
Javascript oraz Bootstrap

## Przykładowe zastosowane user stories
- jako pracodawca chciałbym dodać ofertę pracy na portal, gdzie oferta zostanie dodana na samą górę strony,
- jako osoba poszukująca pracy chciałbym wybrać ofertę z listy, rozwinąć ją i kliknąć przycisk z aplikowaniem na tę ofertę,
- jako osoba poszukująca pracy chciałbym wyświetlić wszystkie oferty,
- jako osoba poszukująca pracy chciałbym filtrować oferty po pensji minimalnej jaka mnie interesuje,
- jako osoba poszukująca pracy chciałbym znaleźć oferty tylko z wybranej kategorii

## Przykładowy obiekt oferty pracy
```js
offer = {
  companyName: "ITLT",
  street: "Taśmowa 7",
  city: "Warszawa",
  offerName: "Senior Java Developer",
  offerDescription: "IT LeasingTeam realizuje usługi w zakresie pozyskiwania dla organizacji wysokiej klasy specjalistów i kadry zarządzającej z obszaru IT a także rozwija i wdraża nowoczesne rozwiązania IT w ramach outsourcingu procesów",
  experience: "senior",
  remote: "tak",
  technology: "java",
  salaryMin: 18480,
  salaryMax: 23520,
  offerLink: "https://praca.itlt.pl/oferty-pracy/?UID=MjQwOThfMF8xOTY3_0&hrlink_ajax=true&"
}
```

## Wykonawcy
Kamil Pikula oraz Krystian Makowski
