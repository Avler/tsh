Chciałbym krótko opisać to co zrobiłem pracowałem nad tym jeden dzień dokładnie wczoraj :) wszystkie podstawowe punkty zostały zawarte :

- Strona główna widok na którym jest nawigacja , Działające filtrowanie produktów po nazwie oraz , promo / active  , przycisk logowania który przenosi nas na stronę z logowaniem 
- Poniżej lista produktów 8 na stronę wygenerowanych z api + do tego paginacja działa poprawnie (nie jestem pewien czy dokładnie tak miało być ale UE jest ok )
- Podział na produkty aktywne i promo 
-Show details ukazuje nam modal z produktem 

- Empty Products page , tutaj wyszło to bardzo fajnie , gdy filtrujemy produkty i ich nie ma pojawia się , gdy jesteśmy na stronie na których nie ma produktów również , oraz gdy np z request z api byłby pusty to również :) 

- Oraz Strona Logowania , która można zobaczyć po naciśnięciu Login Na stronie głównej  (obsługa logowania nie zrobiona tylko widok )

Do realizacji projektu użyłem 

-React / Typescript / Bootstrap / Styledcomponents 
-React Final Form do logowania oraz yup do podstawowej walidacji że pola są wymagane
-Do pobierania danych z api / React query 
