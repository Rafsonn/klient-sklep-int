# Klient sklepu internetowego

Prosta aplikacja sklepu internetowego stworzona przy użyciu HTML, CSS, TypeScript, React, React Router, Vite.

## Opis projektu

Aplikacja umożliwia przeglądanie produktów, dodawanie ich do koszyka, zarządzanie zawartością koszyka oraz składanie zamówień.

## Założenia i podejście

Z załoenia aplikacja miała być mała, ale elegancka. Łatwo rozszerzalna, ale nie przekomplikowana. Wykorzystałem:

- React Router do nawigacji między stronami
- createContext do zarządzania stanem koszyka
- TypeScript do typowania danych
- Vite do budowania i uruchamiania aplikacji
- localStorage do przechowywania danych koszyka między sesjami

Struktura projektu została zorganizowana w sposób modułowy, co ułatwia rozbudowę i utrzymanie kodu.

## Instrukcja uruchomienia

1. Sklonuj repozytorium:
   ```
   git clone https://github.com/Rafsonn/klient-sklep-int.git
   cd klient-sklep-int
   ```

2. Zainstaluj zależności:
   ```
   npm install
   ```

3. Uruchom aplikację w trybie deweloperskim:
   ```
   npm run dev
   ```

4. Aplikacja będzie dostępna pod adresem: `http://localhost:5173/`

5. Możesz również uruchomić aplikację bezpośrednio z GitHub Pages pod adresem: https://Rafsonn.github.io/klient-sklep-int