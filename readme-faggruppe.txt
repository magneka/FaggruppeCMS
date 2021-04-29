
-----------------
  F O R M Å L
-----------------

Når man er utleid til en kunde, må man ofte kunne kopiere deres layout i en fei, for å 
implementere denne i en web løsning, portal etc.  Dette er en øvelse i dette.
Men vi har valgt en avis (content management) som utgangspunkt, og hvorfor det?
Jo fordi det ofte kan være lurt å ha litt content management i en webløsning til bruk
som infosider, hjelpetekster etc. Ofte kjøpes det tilleggsprodukter (noen er gratis), 
og de kan være pain in the ass å integrere.  Så hvor vanskelig kan det være å lage det 
selv?? MYE LETTERE ENN DU TROR!

Men du må vite bittelitt om typografi, fonter, farger, og datastruktur for artikler.

CSS Grid er ekstremt nyttig, fordi alle CMS systemer og aviser bruker et grid system
som kan være litt komplisert å implementere på andre måter.

CSS Grid info finner du her:
https://css-tricks.com/snippets/css/complete-guide-grid/

Når man skal lagre artikler i en database, trenger man litt mer info.
Du vil typisk ha de nyeste på toppen. Du vil kanskje kategorisere dem
(sport, økonomi etc).  Du vil kanskje styre hvor stor de skal være 
(en hel rad, to tredjedeler, en halv, en tredjedel).  Det henger sammen
med grid systemet til avisen.

-----------------
T Y P O G R A F I
-----------------

En artikkel består av følgende:
overline - Linje over overskriften
headline - Den fete overskriften
tagline - under overskriften (litt mindre font)
bodytext - Selve artikkelen

Noen bryter artikkel opp i en array med:
body1 - Før foto
bilde - foto
caption - tekst under foto
body2 - ettr foto

I typografi benyttes ofte teksten lorum ipsum
https://www.npmjs.com/package/react-lorem-ipsum

For å få random bilde
https://www.npmjs.com/package/react-random-image

For å importere en font
https://dev.to/atapas/3-quick-ways-to-add-fonts-to-your-react-app-no6

---------------
O P P G A V E R
---------------

Vi velger oss en avis: BT, BA, Dagbladet, så 

1. Begynn med frontpage containeren, i denne er det artikler som plasseres i et 3 kolonners grid.
 - Se på den avisen gruppen din har valgt, prøv å style artikkelen så likt som mulig.
   Kanskje du må lage noen nye styled components for de ulike props for artikkelen??
   Kanskje du må korrigere bildestørrelsen (se repository der de random generes)
 - om du f.eks. mangler overline eller tagline, skal de ikke skrives ut
 - du må lage link til artikkel der du kun viser artikkelen
   husker du ikke hvordan du gjør det: https://reactrouter.com/web/api/Link
 - setting av kolonnebredder og antall kolonner gjøres i RootContainer.js

2. Gå så over til artikleContaineren og gjør denne klar
 - Du må hente artikkelen
 - Du må lage komponenter som styler artikkelen mest mulig likt avisen dere har valgt

3. Gå tilbake til frontpage containeren
 - Kan du lage en mer dynamisk visning der du først har artikkel som dekker
    3 kolonner 
    2 kolonner + 1 en kolonne
    1 kolonne +  2 kolonner
    1 kolonne igjen
    ..osv...
   For å få dette til må du kanskje ha noen ytre variabler som brukes i map statementet??
   Kanskje du må være litt kreativ med tellere??

 - Se på hvordan dette er gjort mhp responsivt design (@media), kan vi gjøre andre
   ting når det blir smalt (mindre font, skippe overline/tagline??), snappe ned til to
   kolonner, deretter en??
   Du finner media statement i RootContainer og i styled components som du lager...

3. Header
   - Ta headeren til sist
   - Kopier logo
   - Lag meny

4. Repo bruker react-lorem-ipsum component for å generere random tekster
   - forrige gang i sluck hadde vi data i en intern database
   - De som har veldig godt tid (les antageligvis ingen), kan jo bygge omm repository
     med orntlige artikler fra en avis.

5. Hva synes dere om oppgaven, kan dette benyttes i applikasjoner hos kunder
   for å vise hjelpesider etc? Skal vi gå videre å lage input komponenter for å 
   lage et lite CMS system?? 

   KJØR DEBATT!
