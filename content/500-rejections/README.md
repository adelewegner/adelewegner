# Challenge: 500 rejections – sådan opdaterer du

## asks.csv

Én linje pr. ask, i den rækkefølge du har spurgt. Kan åbnes i Numbers/Excel
(gem som CSV). Kolonner:

- **date**: datoen, fx `2026-11-04`
- **category**: `professional` eller `personal`
- **status**: `accepted`, `rejected` eller `pending`
- **fear**: hvor skræmmende det var at spørge, `1`, `2` eller `3`. Jo
  højere, jo større bliver figuren

Eksempel:

```
date,category,status,fear
2026-11-04,professional,pending,3
```

Når svaret kommer, ret bare `pending` til `accepted` eller `rejected`.

## notes/ (field notes)

Én note pr. fil. Filnavnet starter med datoen, fx
`notes/2026-11-04.md` (har du flere samme dag: `2026-11-04-b.md`). Skriv
bare teksten; tom linje = nyt afsnit. Vil du give noten en overskrift, så
start med en linje med `#` foran:

```
# The first ask

Today I asked ...
```
