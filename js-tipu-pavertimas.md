# JS tipų pavertimas: tekstas ir skaičiai

Visa JS elgesio logika remiasi dviem taisyklėmis. Kai jas žinai, visi „keisti“ rezultatai pasidaro nuspėjami.

**1 taisyklė: `+` su tekstu jungia.** Jei bent viena `+` pusė yra tekstas, JS kitą pusę paverčia tekstu ir juos **sujungia**.

**2 taisyklė: `-`, `*`, `/`, `%` visada skaičiuoja.** Šie operatoriai su tekstu nieko nemoka daryti, todėl JS bando tekstą paversti **skaičiumi**.

Be to, išraiška skaičiuojama **iš kairės į dešinę**, po vieną žingsnį.

---

## `+` su tekstu ir skaičiais

```javascript
1 + 2;        // 3      abu skaičiai, sudedami
"1" + 2;      // "12"   yra tekstas, jungiami
1 + "2";      // "12"   nesvarbu, kurioje pusėje tekstas
"1" + "2";    // "12"   abu tekstai, jungiami
"" + 5;       // "5"    greitas būdas paversti skaičių tekstu
```

---

## Tvarka iš kairės į dešinę

```javascript
1 + 2 + "3";  // "33"
```

Žingsniai: `1 + 2 = 3` (abu skaičiai), tada `3 + "3" = "33"` (jau tekstas).

```javascript
"1" + 2 + 3;  // "123"
```

Žingsniai: `"1" + 2 = "12"` (tekstas), tada `"12" + 3 = "123"`. Kai tik atsiranda tekstas, toliau viskas jungiama.

```javascript
"1" + (2 + 3); // "15"
```

Skliaustai skaičiuojami pirmi: `2 + 3 = 5`, tada `"1" + 5 = "15"`.

---

## Mišrūs pavyzdžiai

```javascript
10 + "1" - 10;  // 91
```

1. `10 + "1"` duoda `"101"` (`+` su tekstu jungia),
2. `"101" - 10` duoda `91` (`-` visada skaičiuoja, todėl `"101"` virsta skaičiumi 101).

```javascript
"10" - 1 + "1"; // "91"
```

1. `"10" - 1` duoda `9` (skaičius),
2. `9 + "1"` duoda `"91"` (vėl jungiama).

---

## `-`, `*`, `/`, `%` su tekstu

```javascript
"10" - 1;     // 9
"10" * "2";   // 20     net abu tekstai tampa skaičiais
"10" / "2";   // 5
"10" % "3";   // 1
"abc" - 1;    // NaN    "abc" negalima paversti skaičiumi
"10px" - 1;   // NaN    ir "10px" negalima
```

`NaN` reiškia „Not a Number“: rezultatas, kai skaičiavimas neturi prasmės.

---

## Pliuso ženklas prieš reikšmę

Vienas `+` **prieš** reikšmę (ne tarp dviejų) paverčia ją skaičiumi:

```javascript
+"5";         // 5
+"5" + 5;     // 10     pirmiausia "5" tampa skaičiumi, tada sudedama
"5" + +"5";   // "55"   antras "5" tampa skaičiumi, bet pirmas vis tiek tekstas
"5" - -"2";   // 7      "5" - (-2) = 7
```

---

## `true`, `false`, `null`, `undefined`

Skaičiuojant jie irgi paverčiami skaičiais:

| Reikšmė     | Tampa skaičiumi |
|-------------|-----------------|
| `true`      | 1               |
| `false`     | 0               |
| `null`      | 0               |
| `undefined` | NaN             |

```javascript
true + 1;       // 2
false + 1;      // 1
true + true;    // 2
null + 1;       // 1
undefined + 1;  // NaN
true + "1";     // "true1"  bet su tekstu vėl jungiama
```

---

## Lyginimas

```javascript
"10" == 10;   // true   == prieš lyginant pakeičia tipą
"10" === 10;  // false  === tipo nekeičia: tekstas ≠ skaičius
```

Todėl praktikoje **visada naudok `===`**. Jis nuspėjamas.

```javascript
2 > "10";     // false  vienas skaičius, todėl lyginama kaip skaičiai: 2 < 10
"2" > "10";   // true   abu tekstai, lyginama raidė po raidės: "2" > "1"
```

Antrasis atvejis klastingas. Du tekstai lyginami kaip žodžiai žodyne, pagal pirmą simbolį. Kadangi `"2"` eina po `"1"`, JS nusprendžia, kad `"2"` didesnis.

---

## Kaip paversti tipą sąmoningai

Užuot pasikliovus automatiniu pavertimu, geriau tai daryti aiškiai:

```javascript
String(5);           // "5"
Number("5");         // 5
Number("10px");      // NaN    visas tekstas turi būti skaičius
parseInt("10px");    // 10     paima skaičių iš pradžios ir sustoja
parseFloat("3.5kg"); // 3.5    tas pats, bet su trupmena
Number("");          // 0      tuščias tekstas tampa 0
Number(" 12 ");      // 12     tarpai kraštuose ignoruojami
```

---

## Santrauka

- `+` ir yra tekstas: **jungia**.
- `-`, `*`, `/`, `%`: **skaičiuoja**, tekstą verčia skaičiumi.
- Skaičiuojama iš kairės į dešinę, skliaustai pirmi.
- Lyginimui naudok `===`.
- Kai reikia pavertimo, rašyk jį aiškiai: `String()`, `Number()`.
