# Mokymosi ir laisvalaikio balansas – JavaScript užduotys pakartojimui

---

## 1. `suskaiciuokDienosKrūvį`

*Šiandien viską norim suspėti: ir mokytis, ir dirbti, ir dar truputį pagyventi.*

**Užduotis:**
Sukurk funkciją, kuri priima du skaičius: kiek valandų mokinys dirbo ir kiek mokėsi.

1. Suskaičiuok bendrą krūvį.
2. Jei > 10 val., grąžink:
   `"Per stipriai varai! Šiandien: X val."`
   Kitaip:
   `"Gerai paskirstyta diena: X val."`

**Pvz.:**
```js
suskaiciuokDienosKrūvį(4, 7) // → "Per stipriai varai! Šiandien: 11 val."
```

---

## 2. `atrinkPoilsioDienas`

*Visiems reikia poilsio, net ir JavaScript mokiniams.*

**Užduotis:**
Turi masyvą, pvz.:
```js
["Pirmadienis: 5h mokymosi", "Antradienis: 2h mokymosi", ...]
```

1. Išfiltruok tik tas dienas, kuriose valandų < 3. *Užuomina: valandas gali ištraukti naudodamas `parseInt(...)`.*
2. Prie kiekvienos pridėk humoristinį sakinį:
   `" – pagaliau pailsėjai bent truputį!"`
3. Grąžink naują masyvą.

**Pvz.:**
```js
atrinkPoilsioDienas(["Pirmadienis: 5h", "Antradienis: 2h"])
// → ["Antradienis: 2h – pagaliau pailsėjai bent truputį!"]
```

---

## 3. `sudarykMotyvaciniPlana`

*Motyvaciją kartais reikia rašyti ranka… arba JavaScript'u.*

**Užduotis:**
Turi masyvą darbų, pvz.:
```js
["Kartoti JS", "Sportuoti", "Perskaityti dokumentacią"]
```

Naudodamas `for`, sudaryk naują masyvą: `"Kartoti JS – Aš galiu!"`.

**Pvz.:**
```js
// → ["Kartoti JS – Aš galiu!", "Sportuoti – Aš galiu!", "Perskaityti dokumentacią - Aš galiu!"]
```

---

## 4. `skaiciuokPertraukas`

*Pertraukos būtinos – mes ne robotai (dar).*

**Užduotis:**
Mokinys mokosi X valandų.
Naudodamas `while`, suskaičiuok, kiek 45 min. blokų telpa į bendrą laiką.
Grąžink pertraukų kiekį.

**Pvz.:**
```js
skaiciuokPertraukas(3) // → 4
```

---

## 5. `tvarkarastisSuPrioritetais`

*Kartais reikia nuspręsti, kas svarbiau: miegas ar JavaScript.*

**Užduotis:**
Priimk masyvą objektų, pvz.:
```js
{ uzduotis: "Kartoti JS", prioritetas: 1 }
```

Surūšiuok pagal prioritetą didėjančiai.
Grąžink užduočių pavadinimus.

**Pvz.:**
```js
// → ["Kartoti JS", "Pasportuoti"]
```

---

## 6. `susidarykToDo`

*To-do sąrašai visada prasideda rimtai ir baigiasi serialu.*

**Užduotis:**
Susidaryk masyvą darbų.

1. Į pabaigą įdėk „Išgerti arbatos“.
2. Paskui išmesk pirmą darbą („anksti atsikelt“ taip ir neįvyks).
3. Grąžink likusius.

---

## 7. `penktadienioTvarkytojas`

*Ateina penktadienis → rimti darbai turi dingti, o likt tik smagūs.*

**Užduotis:**
Du masyvai:
```js
// Rimti darbai:
["Mokytis", "Kartoti", "Rašyti konspektą", "Ateiti į pamokas"]
// Smagūs darbai:
["Pyragas", "Pasivaikščiojimas", "Žaidimai"]
```

1. Sujunk masyvus.
2. Nukirpk visus rimtus darbus palikdamas tik smagius.
3. Grąžink tik smagių veiklų masyvą.

**Pvz.:**
```js
// → ["Pyragas", "Pasivaikščiojimas", "Žaidimai"]
```

---

## 8. `simuliuokMiegoGrafika`

*Kad išmokt JS — reikia miego. Ir šiek tiek savikritikos.*

**Užduotis:**
Priima 3 reikšmes: kiek miegojai vakar, šiandien, užvakar.
Suskaičiuok vidurkį.

- Jei < 6 → `"Vidurkis X – esi zombis"`
- Jei 6–7 → `"Vidurkis X – normaliai išsilaikei"`
- Jei > 7 → `"Vidurkis X – miego karalius"`

**Pvz.:**
```js
simuliuokMiegoGrafika(5, 7, 8) // → "Vidurkis 6.6 – normaliai išsilaikei"
```

---

## 9. `atrinkPoilsioVeiklas`

*Po mokymosi dienos reikia poilsio. Bent jau truputį.*

**Užduotis:**
Duotas masyvas:
```js
["Mokytis JS", "Kartoti medžiagą", "Pietūs", "Pasivaikščioti", "Serialas", "Žaidimai"]
```

Išfiltruok tik tas veiklas, kurių pavadinimas > 6 raidžių.
Grąžink.

**Pvz.:**
```js
// → ["Kartoti medžiagą", "Pasivaikščioti", "Serialas", "Meditacija"]
```

---

## 10. `apverstiMokymosiTvarkarastį`

*Tvarkaraštis aukštyn kojomis – klasika.*

**Užduotis:**
Masyvas mokymosi dalykų:
```js
["JavaScript", "Java", "Python", "C#", "Duomenų bazės", "HTML/CSS", "Operacinės sistemos"]
```

Apverk tvarką (`reverse`).
Grąžink.

---

## 11. `skaiciuokPuslapius`

*Kiek puslapių šiandien pavyks perskaityti iš dokumentacijos?*

**Užduotis:**
Priimk skaičių X – kiek laiko turi (min).
Naudodamas `do…while`, skaičiuok, kas 10 minučių perskaitai vieną puslapį.
Grąžink kiek puslapių įveikei.

**Pvz.:**
```js
skaiciuokPuslapius(35) // → 3
```

---

## 12. `trumpinkDienosPlana`

*Neperdegti → svarbiausia taisyklė.*

**Užduotis:**
Sudaryk savo dienos darbų masyvą, pvz.:
```js
["Mokytis JS", "Kartuoti", "Sportuoti", "Sutvarkyti kambarį", "Paskaityti", "Išnešti šiukšles"]
```

1. Jei elementų > 5, nukirpk iki 5.
2. Surikiuok abėcėlės tvarka.
3. Grąžink.

---

## 13. `skaiciuokAtideliojimą`

*Nes visi kartais atidėliojam. Net labai...*

**Užduotis:**
Priima masyvą minučių per kelias dienas, kiek atidėliojai, pvz.: `[20, 30, 40]`

Suskaičiuok sumą.

- Jei > 100 → `"Uff... atidėliojimo per daug: X min"`
- Kitaip → `"Pakenčiama: X min"`

---

## 14. `sudarykBalansoAtaskaita`

*Darbas + Poilsis = Balansas.*

**Užduotis:**
Turi du masyvus:
```js
// Darbas:
["Mokytis", "Kartoti", "Testuoti"]
// Poilsis:
["Pietūs", "Pasivaikščiojimas", "Miegas"]
```

Sujunk abu masyvus ir grąžink tekstą:
`"Dienos balansas: X veiklų."`

---

## 15. `numeruokJSDalykus`

*JS kelias ilgas. Bet kai jis sunumeruotas, tada lengviau.*

**Užduotis:**
Masyvas:
```js
["Kintamieji", "Ciklai", "Masyvai", "Funkcijos", "Objektai"]
```

Sukurk: `"1. Kintamieji"`, `"2. Ciklai"` ir t. t.

---

## 16. `ieskokSavaitgalio`

*Kiekvienas mokinys nori rasti savaitgalį… net koduose.*

**Užduotis:**
Sudaryk masyvą (7 reikšmės – kiekviena reikšmė, kiek minutėmis mokeisi kiekvieną savaitės dieną), pvz.:
```js
[180, 240, 300, 200, 400, 50, 60]
```

Poilsio diena laikoma, jei minutės < 120.

- Jei bent viena tokia diena yra → `"Puiku – rastas savaitgalis!"`
- Jei nėra → `"Reikia poilsio dienos!!!"`

---

## 17. `ivertinkSavaite`

*Apibūdink savo savaitę vienu žodžiu per dieną.*

**Užduotis:**
Masyvas 7 dienų įrašų (string tipo), pvz.:
```js
["motyvuotas", "tingus", "tingus", "normalus", "motyvuotas", "tingus", "ramus"]
```

Naudodamas `for`, suskaičiuok, kiek kartų buvo „tingus“.
Grąžink tekstą:
`"Tinginystė užklupo X kartus."`

---

## 18. `sujunkIrIsryskinkVeiklas`

*Kartais norisi, kad poilsis būtų MATOMAS akimis.*

**Užduotis:**
Turi du masyvus:
```js
// Darbas:
["Mokytis JS", "Ateiti į pamokas", "Kartotis"]
// Poilsis:
["Miegas", "Serialai", "Maistas"]
```

1. Sujunk abu.
2. Poilsio elementus paversk DIDŽIOSIOMIS RAIDĖMIS.
3. Grąžink masyvą.

---

## 19. `apskaiciuokBalansoIndeksa`

*Ar tavo diena labiau „darbas“, ar „Netflix“?*

**Užduotis:**
Priima 2 skaičius: `darbasValandomis`, `poilsisValandomis`.
Apskaičiuok `poilsis / darbas`.

- 1 → `"Idealus balansas"`
- 0.5–1 → `"Geras balansas"`
- < 0.5 → `"Reikia atostogų"`
