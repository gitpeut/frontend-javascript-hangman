# Opdrachtbeschrijving

## Inleiding
Met behulp van een aantal jest-testen ga je een interactief spelletje maken: galgje! De gebruiker kan letters raden en die via de terminal invoeren. Maar let op! Bij zeven foute letters is het game over!

```__________
| /     |
|/     _o_
|       O
|      / \
|
===========
```

Je vind in deze repo drie belangrijke bestanden:
1. `index.js` waarin je de **starterskit** vindt om galgje te maken
2. **Testen** die je gaan helpen om de rest van de logica te schrijven in `gamelogic.test.js`
3. Het JavaScript bestand waar jij jouw **game-logica** gaat schrijven `gamelogic.js`

## De applicatie starten
Als je het project gecloned hebt naar jouw locale machine, installeer je eerst de node_modules door het volgende commando in de terminal te runnen:

`npm install`

Het aanmaken van een `package.json` en het installeren van Jest is al geregeld. Wanneer dit klaar is, kun je de de volgende commando's gebruiken:

```javascript
npm run test // run jest once
npm run test:watch // run jest in watch mdoe
npm run start // start the game
```

Wanneer je `npm run start` of de `jest --watch` mode hebt aangezet, zal deze blijven draaien tot je het proces uitdrukkelijk stopt. Je kunt het beindigen door:
1. In de terminal te klikken
2. `CTRL + C` (voor zowel Windows als Mac gebruikers) in te voeren

## Plan van aanpak

### Voorbereiding
1. Installeer de repo en probeer de scripts uit
2. Probeer het programma uit! Werkt het al?
3. Lees de code goed door. Zet ter verduidelijking commentaar bij de al aanwezige uitdrukkingen of codegebruik (wat doen deze stukjes code?)

### Game logica implementeren
1. Implementeer de game-logica stap voor stap en laat je helpen door de tests! Gebruik het test-commando `npm run test:watch`. Het werkt het beste om te werken met een stappenplan. Je mag hiervoor het stappenplan op de branch `stappenplan` (in `gamelogic.js`) gebruiken, maar het is uitdagender om je eigen stappenplan te schrijven!
2. Is dit helemaal gelukt? Ga dan verder met de functies in `index.js` en voeg de volgende functionaliteit toe:
* Zorg dat de gebruiker letters kan raden
* Houdt in de `guesses`-array bij welke letters de gebruiker geraden heeft
* Laat zien welke letters al geraden zijn (met `displayWordSoFar`)
* Heeft iemand alle letters geraden? Wuhuuu! Log dan dat ze gewonnen hebben
* Heeft iemand 7 letters fout geraden? Jammer! Log dan dat ze verloren hebben
* Stop het programma met `return` wanneer iemand _gewonnen_ of _verloren_ heeft
* Heeft iemand nog niet gewonnen of verloren? Dan gaat het spel gewoon verder

### Bonus opdrachten
Je mag zelf uit onderstaande doelen kiezen welke je het leukst vind, want waarschijnlijk is er niet genoeg tijd om ze allemaal te doen.
1. Check of de gebruiker meer dan één letter tegelijk kiest (`a` mag wel, `ae` mag niet!)
2. Geef een foutmelding wanneer iemand meer dan één letter kiest OF maak het onmogelijk om meer dan één letter tegelijk in te voeren
3. Zorg ervoor dat gekke gebruikers het spel niet verliezen door hoofdletters te gebruiken (Een invoer van `A` wordt `a` en het woord `JavaScript` wordt `javascript`)
4. Houd bij hoeveel foute letters iemand al heeft geraden
5. Teken voor iedere fout een extra stukje galg:

**1 fout**
```

|
|
|
|
|
===========
```

**7 fouten**
```
__________
| /     |
|/     _o_
|       O
|      / \
|
===========
```
