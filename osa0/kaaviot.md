# Fullstack Osa 0 - tehtävät 0.4 , 0.5 ja 0.6 kaaviot

## 0.4 Uuden muistiinpanon luominen

```mermaid
sequenceDiagram
    participant selain as selain
    participant palvelin as palvelin

    Note right of selain: Käyttäjä kirjoittaa tekstin kenttään ja painaa tallenna-nappia.

    selain->>palvelin: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate palvelin
    Note right of palvelin: Palvelin tallentaa uuden muistiinpanon
    palvelin-->>selain: HTTP 302 (uudelleenohjaus osoitteeseen /notes)
    deactivate palvelin

    selain->>palvelin: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate palvelin
    palvelin-->>selain: haetaan ekana HTML- dokumentti
    deactivate palvelin

    selain->>palvelin: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate palvelin
    palvelin-->>selain: haetaan seuraavaksi Css- tiedosto
    deactivate palvelin

    selain->>palvelin: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate palvelin
    palvelin-->>selain: haetaan sen jälkeen JavaScript- tiedosto
    deactivate palvelin

    Note right of selain: Selain alkaa suorittamaan JavaScript-koodia, joka hakee JSON:in palvelimelta

    selain->>palvelin: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate palvelin
    palvelin-->>selain: Haetaan JSON- data joka sisältää esimerkiksi: [{ "content": "hola" , "date": "2026-7-20" }, ... ] 
    deactivate palvelin

    Note right of selain: Selain suorittaa callback-funktion, joka tuo muistiinpanot uudelleen listaan
```

## 0.5 SPA- sivun (Single Page App) lataaminen

```mermaid
sequenceDiagram
    participant selain
    participant palvelin

    selain->>palvelin: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate palvelin
    palvelin-->>selain: haetaan aluksi HTML- dokumentti
    deactivate palvelin

    selain->>palvelin: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate palvelin
    palvelin-->>selain: haetaan seuraavaksi CSS- tiedosto
    deactivate palvelin

    selain->>palvelin: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate palvelin
    palvelin-->>selain: haetaan sen jälkeen JavaScript- tiedosto
    deactivate palvelin

    Note right of selain: Selain alkaa suorittaa spa.js- tiedoston koodia, joka hakee JSON:in palvelimelta

    selain->>palvelin: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate palvelin
    palvelin-->>selain: haetaan JSON-data, joka sisältää esimerkiksi: [{ "content": "hola" , "date": "2026-7-20" }, ... ]
    deactivate palvelin

    Note right of selain: Selain suorittaa callback- funktion, joka tuo muistiinpanot sivulle ilman koko sivun uudelleenlatausta
```

## 0.6 Uuden noten luominen SPA- versiossa (Single Page App)

```mermaid
sequenceDiagram
    participant selain
    participant palvelin

    Note right of selain: Käyttäjä kirjoittaa tekstin kenttään ja painaa tallenna-nappia

    Note right of selain: JavaScript estää lomakkeen tavanomaisen toiminnan, jolloin selain ei tee koko sivun uudelleenlatausta

    Note right of selain: Selain lisää uuden muistiinpanon suoraan näkyvään listaan käyttäen omaa muistiaan ilman että sivu latautuu uudelleen

    selain->>palvelin: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa ( selain lähettää tiedon taustalla ilman että sivua tarvitsee ladata uudestaan )
    activate palvelin
    Note right of palvelin: Palvelin tallentaa muistiinpanon
    palvelin-->>selain: palvelin kertoo HTTP 201- koodin, joka tarkoittaa että uusi muistiinpano on luotu onnistuneesti
    deactivate palvelin

    Note right of selain: Selain ei tee mitään erityistä vastauksen saavuttua,<br/>koska muistiinpano näytettiin jo käyttäjälle heti
```