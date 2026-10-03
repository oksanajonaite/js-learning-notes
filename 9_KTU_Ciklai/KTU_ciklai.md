# KTU uždavinynas: cikliniai algoritmai

---

## 3. Cikliniai algoritmai. Žinomo kartojimų skaičiaus ciklas

### 1. Konkursas

Restorano „Skanu" vadybininkas sugalvojo surengti konkursą lankytojams, kurio metu galima laimėti marškinėlius su restorano logotipu. Visi lankytojai kartu su sąskaita gauna po vieną kortelę, ant kurios parašytas sveikasis teigiamas skaičius iš intervalo *[a;b]* (*a* – intervalo pradžia, *b* – intervalo pabaiga). Laimi tie lankytojai, kurių kortelėse įrašytas skaičius dalijasi iš 6. Parašykite programą, kuri apskaičiuotų, kiek marškinėlių reikia užsakyti restorano vadybininkui.

**Pavyzdys 1**

Duomenys:
```
Įveskite intervalo pradžią: 5
Įveskite intervalo pabaigą: 24
```
Rezultatai:
```
Reikalingų marškinėlių skaičius: 4
```

**Pavyzdys 2**

Duomenys:
```
Įveskite intervalo pradžią: 31
Įveskite intervalo pabaigą: 62
```
Rezultatai:
```
Reikalingų marškinėlių skaičius: 5
```

---

### 2. Kelias į mokyklą

Kiekvieną dieną Petriukas, eidamas į mokyklą, skaičiuoja kiekvieną savo žingsnį ir žaidžia tokį žaidimą: kai žingsnių skaičius baigiasi nuliu, Petriukas suploja rankomis, o kai penketu – spragteli pirštais. Parašykite programą, kuri suskaičiuotų, kiek kartų Petriukas suplos rankomis ir kiek – spragtels pirštais, jei jam iki mokyklos yra lygiai *n* žingsnių.

**Pavyzdys 1**

Duomenys:
```
Įveskite žingsnių kiekį iki mokyklos: 15
```
Rezultatai:
```
Suplojimų bus: 1
Spragtelėjimų bus: 2
```

**Pavyzdys 2**

Duomenys:
```
Įveskite žingsnių kiekį iki mokyklos: 426
```
Rezultatai:
```
Suplojimų bus: 42
Spragtelėjimų bus: 43
```

---

### 3. Snaigės už lango

Per atostogas Simas turėjo daugiau laisvo laiko ir nutarė suskaičiuoti, kiek sningant po jo namo langu nukrenta snaigių. Jis pastebėjo, kad kiekvieną kitą sekundę nukrenta dvigubai daugiau snaigių, nei prieš tai buvusią. Parašykite programą, skaičiuojančią kiek snaigių *s* bus nukritę per *n* sekundžių, kai per pirmąją sekundę nukrito *k* snaigių.

**Pavyzdys 1**

Duomenys:
```
Įveskite, kiek snaigių nukrito per pirmąją sekundę ir kiek sekundžių snigo: 5 3
```
Rezultatai:
```
35
```

**Pavyzdys 2**

Duomenys:
```
Įveskite, kiek snaigių nukrito per pirmąją sekundę ir kiek sekundžių snigo: 2 4
```
Rezultatai:
```
30
```

---

### 4. Kalėdinės eglutės

Prieš Kalėdas miško urėdijos prekiauja įvairaus aukščio eglutėmis. Į prekybos vietą atvežta *n* eglučių. Jų aukščiai yra *e1, e2, ..., en*. Parašykite programą, skaičiuojančią vidutinį eglutės aukštį.

**Pavyzdys**

Duomenys:
```
Kiek eglučių atvežta? 6
Įveskite 1 eglutės aukštį: 167
Įveskite 2 eglutės aukštį: 134
Įveskite 3 eglutės aukštį: 145
Įveskite 4 eglutės aukštį: 156
Įveskite 5 eglutės aukštį: 155
Įveskite 6 eglutės aukštį: 176
```
Rezultatai:
```
Eglutės aukščio vidurkis: 155.5 cm
```

---

### 5. Draugų skaičiai

10 draugų sugalvojo po vieną skaičių iki 100 ir juos užrašė ant kortelių. Parašykite programą, surandančią keli draugai sugalvojo lyginius skaičius. Jeigu tokių skaičių bus, ekrane turi būti rodomas jų kiekis, priešingu atveju ekrane turi būti rodomas žodis Nėra.

**Pavyzdys 1**

Duomenys:
```
Įveskite draugų sugalvotus skaičius:
2
9
4
100
25
5
6
3
5
85
```
Rezultatai:
```
Atsakymas: 4
```

**Pavyzdys 2**

Duomenys:
```
Įveskite draugų sugalvotus skaičius:
5
3
99
55
35
47
11
63
51
91
```
Rezultatai:
```
Atsakymas: Nėra
```

---

### 6. Kauliukai

Tomas dalyvauja loterijoje. Jis meta *n* standartinių lošimo kauliukų (ant jų sienelių skaičiai nuo 1 iki 6). Kiekvieno skaičiaus iškritimo tikimybė yra vienoda. Loterija laimima tada, jei Tomo išridentų skaičių suma yra didesnė nei pusė visos galimos taškų sumos. Parašykite programą, kuri nustatytų:

- koks maksimalus taškų kiekis;
- kiek iš viso taškų surinko Tomas;
- koks jo surinktų taškų vidurkis;
- ar berniukas laimėjo loterijoje.

Pradiniai duomenys – kauliukų kiekis *n* ir išridentas kiekvieno kauliuko skaičius.

**Pavyzdys 1**

Duomenys:
```
Įveskite kauliukų kiekį: 4
1-o kauliuko taškų kiekis: 5
2-o kauliuko taškų kiekis: 3
3-o kauliuko taškų kiekis: 2
4-o kauliuko taškų kiekis: 1
```
Rezultatai:
```
Iš viso buvo galima surinkti taškų: 24
Tomas iš viso surinko: 11 taškų
Jo taškų vidurkis: 2.8
Loterija pralaimėta.
```

**Pavyzdys 2**

Duomenys:
```
Įveskite kauliukų kiekį: 7
1-o kauliuko taškų kiekis: 6
2-o kauliuko taškų kiekis: 6
3-o kauliuko taškų kiekis: 2
4-o kauliuko taškų kiekis: 2
5-o kauliuko taškų kiekis: 5
6-o kauliuko taškų kiekis: 4
7-o kauliuko taškų kiekis: 5
```
Rezultatai:
```
Iš viso buvo galima surinkti taškų: 42
Tomas iš viso surinko: 30 taškų
Jo taškų vidurkis: 4.3
Loterija laimėta.
```

---

### 7. Šuoliai per virvutę

Kazys ir Onutė tikra komanda: Kazys padeda Onutei ruoštis sporto rungčiai, kurioje Onutė šokinėja per virvutę. Ji kartoja šuoliukus *m* kartų ir pirmuoju bandymu atlieka *k1*, antruoju – *k2*, ..., *m*-tuoju – *km* šuoliukų. Parašykite programą, kuri padėtų Kaziui suskaičiuoti, kiek kartų iš viso Onutė peršoko per virvutę ir koks vidutinis vienu bandymu atliktų šuoliukų skaičius.

**Pavyzdys 1**

Duomenys:
```
Kiek kartų šokinėjo: 3
Kiek sušokinėjo kartų 1 bandymu: 20
Kiek sušokinėjo kartų 2 bandymu: 40
Kiek sušokinėjo kartų 3 bandymu: 30
```
Rezultatai:
```
Iš viso: 90
Vidutiniškai: 30
```

**Pavyzdys 2**

Duomenys:
```
Kiek kartų šokinėjo: 2
Kiek sušokinėjo kartų 1 bandymu: 10
Kiek sušokinėjo kartų 2 bandymu: 20
```
Rezultatai:
```
Iš viso: 30
Vidutiniškai: 15
```

---

### 8. Bėgimo varžybos

Varžybose dalyvauja *n* bėgikų. Pirmasis bėgikas įveikė distanciją per *k1* sekundžių, antrasis – per *k2*, ..., *n*-tasis – per *kn*. Parašykite programą, surandančią, kuris bėgikas įveikė distanciją greičiausiai (išspausdinti bėgiko laiką) ir keliomis sekundėmis jis buvo greitesnis už vidutiniškai bėgusį bėgiką.

**Pavyzdys 1**

Duomenys:
```
Kiek dalyvavo bėgikų: 3
Įveskite 1 bėgiko laiką: 25
Įveskite 2 bėgiko laiką: 20
Įveskite 3 bėgiko laiką: 32
```
Rezultatai:
```
Greičiausio bėgiko laikas: 32 sek.
Jis buvo 7 sek geresnis už vidurkį.
```

**Pavyzdys 2**

Duomenys:
```
Kiek dalyvavo bėgikų: 4
Įveskite 1 bėgiko laiką: 22
Įveskite 2 bėgiko laiką: 20
Įveskite 3 bėgiko laiką: 25
Įveskite 4 bėgiko laiką: 25
```
Rezultatai:
```
Greičiausio bėgiko laikas: 20 sek.
Jis buvo: 3 sek geresnis už vidurkį.
```

---

### 9. Pirkiniai

Mama liepė Petriukui nupirkti *n* pirkinių. Kiekvienas pirkinys turi savo kainą (centais) ir svorį (gramais). Petriukas gali panešti tik iki 5 kg. Parašykite programą, kuri suskaičiuotų, kiek vidutiniškai kainuoja vienas pirkinys, ir ar Petriukas galės parnešti visus pirkinius iš parduotuvės.

**Pavyzdys 1**

Duomenys:
```
Kiek buvo pirkinių: 2
Įveskite 1 pirkinio kainą ir svorį: 105 2000
Įveskite 2 pirkinio kainą ir svorį: 1655 2550
```
Rezultatai:
```
Pirkinio vidutinė kaina: 8 Lt 80 ct.
Petriukas galės parnešti pirkinius.
```

**Pavyzdys 2**

Duomenys:
```
Kiek buvo pirkinių: 2
Įveskite 1 pirkinio kainą ir svorį: 105 3000
Įveskite 2 pirkinio kainą ir svorį: 2655 2550
```
Rezultatai:
```
Pirkinio vidutinė kaina: 13 Lt 80 ct.
Petriukas negalės parnešti pirkinių.
```

---

## 4. Cikliniai algoritmai. Nežinomo kartojimų skaičiaus ciklas

### 1. Voverytė

Per vasarą voverytė sukaupė *X* riešutėlių. Prasidėjus žiemai voverytė kartu su savo *V* voveriukų sugraužia pusryčiams, pietums ir vakarienei po vieną riešutą kiekvienas. Apskaičiuokite, kelioms dienoms *K* voverytei su voveriukais užteks sukauptų riešutų. Patikrinkite, ar riešutų užteks visai žiemai, jeigu žiema trunka 92 dienas.

**Pavyzdys 1**

Duomenys:
```
Sukauptas riešutų kiekis X = 900
Voveriukų skaičius V = 2
```
Rezultatai:
```
Riešutų sukaupta 99 dienoms
Riešutų užteks visai žiemai
```

**Pavyzdys 2**

Duomenys:
```
Sukauptas riešutų kiekis X = 800
Voveriukų skaičius V = 3
```
Rezultatai:
```
Riešutų sukaupta 66 dienoms
Riešutų neužteks visai žiemai
```

---

### 2. Degalai

Šeima išsirengė į kelionę automobiliu. Jie pripildė kuro baką, kurio talpa *t* litrų ir nusprendė važiuoti tol, kol bake bus degalų. Lyginėmis kelionės dienomis automobilis suvartos *n* litrų degalų, o nelyginėmis – *2n* litrų. Parašykite programą, kuri surastų, kiek dienų truks šeimos kelionė.

**Pavyzdys 1**

Duomenys:
```
Įveskite kuro bako talpą: 20
Įveskite kuro sąnaudas n: 5
```
Rezultatai:
```
Keliauti bus galima 3 dienų/(as)/(ą).
```

**Pavyzdys 2**

Duomenys:
```
Įveskite kuro bako talpą: 112
Įveskite kuro sąnaudas n: 11
```
Rezultatai:
```
Keliauti bus galima 7 dienų/(as)/(ą).
```

---

### 3. Saldainiai

Petriukas gavo *n* saldainių. Kiekvieną dieną jis nori suvalgyti skirtingą skaičių saldainių *x*. Kelias dienas Petriukas galės mėgautis saldainiais ir kiek jam dar liks nesuvalgytų saldainių tuo atveju, jei paskutinei dienai saldainių nebeužtektų.

Pastaba: kiekvieną dieną suvalgomi saldainiai turi būti įvedinėjami atskirai, jie turi būti įvedinėjami tol, kol Petriukas nebus suvalgęs visų saldainių.

**Pavyzdys**

Duomenys:
```
Petriukas gavo saldainių: 25
Per dieną suvalgė: 7
Per dieną suvalgė: 7
Per dieną suvalgė: 8
Per dieną suvalgė: 5
```
Rezultatai:
```
Petriukui saldainių užteks 3 dienoms ir jam liks 3 saldainiai.
```

---

### 4. Knyga

Tadas mėgsta skaityti knygas, tačiau jam labai sunku pradėti skaityti. Knygoje yra *m* skyrių. Pirmą dieną Tadas perskaitė 1 skyrių, antrą – 2, trečią – 3 ir t.t. Kiekvieną kitą dieną jis perskaito vienu skyriumi daugiau, negu prieš tai buvusią dieną. Programa turi apskaičiuoti, per kelias dienas *d* Tadas perskaitys visą knygą ir kelis skyrius *s* vidutiniškai per dieną perskaito Tadas. Paskutinei dienai gali likti mažiau skyrių.

**Pavyzdys 1**

Duomenys:
```
Įveskite knygos skyrių skaičių: 8
```
Rezultatai:
```
Tadas visą knygą perskaitys per 4 dienas (-ų).
Tadas vidutiniškai per dieną perskaitė 2 skyrius (-ų).
```

**Pavyzdys 2**

Duomenys:
```
Įveskite knygos skyrių skaičių: 17
```
Rezultatai:
```
Tadas visą knygą perskaitys per 6 dienas (-ų).
Tadas vidutiniškai per dieną perskaitė 2.83 skyrius (-ų).
```

---

### 5. Kurjeris

Siuntų pervežimo įmonėje dirbantis kurjeris gavo užduotį parengti pervežimų statistiką:

1. kiek įvykdė užsakymų, kurių suma viršijo 100 Lt;
2. už kokią vidutinę sumą per dieną išvežiojo prekių;
3. kiek iš viso prekių išvežiojo.

Jis nežino, kiek užsakymų įvykdys per dieną, todėl baigęs darbą į programą įves nulį (0), tai reikš, kad darbo diena baigta ir reikia pateikti rezultatus. Parenkite programą, kuri leistų nežinomą skaičių kartų kurjeriui įvesti užsakymo sumą (skaičiavimai baigiami įvedus nulį, nulis skaičiuojant vidurkį ir kiekį nebus pridėtas) ir pateiktų skaičiavimų rezultatus.

**Pavyzdys 1**

Duomenys:
```
Įveskite sumą:
110
80
50
0
```
Rezultatai:
```
1. 1
2. 80
3. 3
```

**Pavyzdys 2**

Duomenys:
```
Įveskite sumą:
60
90
150
200
0
```
Rezultatai:
```
1. 2
2. 125
3. 4
```

---

### 6. Skaičiuotuvas

Danutė dirba buhaltere, todėl jai kartais reikia atlikti aritmetinius skaičiavimus su dideliais skaičių kiekiais. Ji skundžiasi, kad sunku ir nepatogu daug kartų spaudinėti skaičiuotuvo klavišus, todėl ji paprašė Jūsų, kad parašytumėte programą, kurios pradžioje pakaktų įvesti aritmetinio veiksmo simbolį, ir būtų galima įvedinėti skaičius, su kuriais bus atliekama ta operacija, operacijos pabaiga užfiksuojama įvedus nulį.

Pavyzdžiui, Danutė išsirenka sumos skaičiavimo operaciją, tada įvedinėja skaičius, juos reikia sumuoti tol, kol įves nulį, tada baigti skaičiavimą ir pateikti rezultatą.

**Reikia sukurti skaičiuotuvą tokiems veiksmams atlikti:** suma – 1, atimtis – 2, daugyba – 3, didžiausia reikšmė sraute – 4, mažiausia reikšmė sraute – 5. (Danutė įves veiksmą reiškiantį skaičių, nepamirškite jos informuoti įjungus programą, koks skaičius kokį veiksmą reiškia).

**Pavyzdys 1**

Duomenys:
```
Įveskite veiksmą: 4
15
20
70
-20
0
```
Rezultatai:
```
max: 70
```

**Pavyzdys 2**

Duomenys:
```
Įveskite veiksmą: 1
12
10
50
0
```
Rezultatai:
```
sum: 72
```

---

### 7. Karnavalas

Mokykloje rengiamas karnavalas. Prieš karnavalą visi mokiniai turėjo pasiruošti kaukes. Kiekvieno mokinio kaukė buvo įvertinta tam tikru balu nuo 1 iki 10 (įvertinimai sveikieji skaičiai). Karnavalo dieną visi į karnavalą atvykę mokiniai turėjo pranešti, kokius įvertinimus gavo. Į karnavalą galėjo patekti tik tie mokiniai, kurių kaukės įvertintos ne mažiau kaip 5 balais.

Kiek mokinių atvyko į karnavalą yra nežinoma. Parašykite programą, kuri suskaičiuotų keli mokiniai iš viso bandė patekti į karnavalą, ir keli iš jų pateko.

Pastaba: Turėtų būti įvedinėjami kiekvieno mokinio kaukės įvertinimo balai. Duomenų įvedimas baigiamas nuliu.

**Pavyzdys 1**

Duomenys:
```
Įveskite kiek balų gavo mokinys: 4
Įveskite kiek balų gavo mokinys: 2
Įveskite kiek balų gavo mokinys: 6
Įveskite kiek balų gavo mokinys: 8
Įveskite kiek balų gavo mokinys: 5
```
Rezultatai:
```
Į karnavalą ėjo 5 mokiniai, pateko 3.
```

**Pavyzdys 2**

Duomenys:
```
Įveskite kiek balų gavo mokinys: 5
Įveskite kiek balų gavo mokinys: 5
Įveskite kiek balų gavo mokinys: 1
Įveskite kiek balų gavo mokinys: 2
Įveskite kiek balų gavo mokinys: 6
```
Rezultatai:
```
Į karnavalą ėjo 5 mokiniai, pateko 2.
```

---

### 8. Atvirukai

Linas nori nupirkti vienos rūšies atvirukus savo *m* draugams. Parduotuvėje yra *n* rūšių atvirukų, kurių kiekvienos rūšies kiekiai yra *k1, k2, k3, ..., kn*. Parašykite programą, kuri apskaičiuotų, kelių rūšių atvirukų *x* iš parduotuvėje esančių *n* rūšių užtektų visiems Lino draugams.

**Pavyzdys 1**

Duomenys:
```
Keliems draugams Linas nori dovanoti atvirukus? 7
Kiek rūšių atvirukų yra parduotuvėje? 3
Kiek yra 1 rūšies atvirukų? 6
Kiek yra 2 rūšies atvirukų? 10
Kiek yra 3 rūšies atvirukų? 9
```
Rezultatai:
```
2 rūšių atvirukų užtektų visiems Lino draugams
```

**Pavyzdys 2**

Duomenys:
```
Keliems draugams Linas nori dovanoti atvirukus? 5
Kiek rūšių atvirukų yra parduotuvėje? 3
Kiek yra 1 rūšies atvirukų? 6
Kiek yra 2 rūšies atvirukų? 10
Kiek yra 3 rūšies atvirukų? 9
```
Rezultatai:
```
3 rūšių atvirukų užtektų visiems Lino draugams
```
