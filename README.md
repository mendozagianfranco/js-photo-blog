# JS Photo Blog

## Descrizione
Questo progetto è un semplice **photo blog** realizzato in **JavaScript**, dove le immagini vengono recuperate da un endpoint remoto tramite **Axios** e visualizzate dinamicamente in una griglia.  
Cliccando su una foto, viene mostrato un overlay con l’immagine ingrandita, mentre il resto della pagina viene bloccato per lo scrolling.

---

## Funzionalità principali
- Recupero di immagini da un **API esterna** (`https://lanciweb.github.io/demo/api/pictures/`) usando Axios.
- Visualizzazione dinamica delle foto in una **griglia di card**.
- Ogni card mostra:
  - Immagine
  - Titolo
  - Data
- Cliccando su una foto si apre un **overlay** con l’immagine ingrandita.
- Blocco dello scrolling della pagina quando l’overlay è attivo.

---

## Tecnologie utilizzate
- HTML5  
- CSS3
- JavaScript (vanilla) con **Axios** per fetch di dati
