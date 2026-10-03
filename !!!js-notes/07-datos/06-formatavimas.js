// 07 · Datos formatavimas (kaip parodyti žmogui)
// Paleisti: node 07-datos/06-formatavimas.js

const d = new Date(2026, 8, 22, 14, 30, 45);   // 2026-09-22 14:30:45

// --- Paruošti metodai ---
console.log(d.toString());          // Tue Sep 22 2026 14:30:45 GMT+0300 (...)
console.log(d.toDateString());      // Tue Sep 22 2026        ← tik data
console.log(d.toTimeString());      // 14:30:45 GMT+0300 (...) ← tik laikas
console.log(d.toISOString());       // 2026-09-22T11:30:45.000Z ⚠️ UTC laiku!
console.log(d.toJSON());            // tas pats, kas toISOString

// --- Lietuviškas formatas: toLocale* ---
console.log(d.toLocaleDateString("lt-LT"));  // 2026-09-22
console.log(d.toLocaleTimeString("lt-LT"));  // 14:30:45
console.log(d.toLocaleString("lt-LT"));      // 2026-09-22 14:30:45

// --- Su nustatymais ---
console.log(d.toLocaleDateString("lt-LT", {
  year: "numeric",
  month: "long",
  day: "numeric",
}));
// 2026 m. rugsėjo 22 d.

console.log(d.toLocaleDateString("lt-LT", { weekday: "long" }));
// antradienis

console.log(d.toLocaleString("lt-LT", {
  dateStyle: "full",
  timeStyle: "short",
}));
// 2026 m. rugsėjo 22 d., antradienis 14:30

// --- ⚠️ toISOString rodo UTC, todėl data gali "pasislinkti" ---
const vidurnaktis = new Date(2026, 8, 22, 0, 30);
console.log(vidurnaktis.toISOString());               // 2026-09-21T21:30:00.000Z ⚠️ diena 21!
console.log(vidurnaktis.toLocaleDateString("lt-LT")); // 2026-09-22 ✅

// --- Savo formatas su padStart ---
function formatuoti(data) {
  const m = data.getFullYear();
  const men = String(data.getMonth() + 1).padStart(2, "0");  // +1 ir du skaitmenys
  const d = String(data.getDate()).padStart(2, "0");
  const val = String(data.getHours()).padStart(2, "0");
  const min = String(data.getMinutes()).padStart(2, "0");
  return `${m}-${men}-${d} ${val}:${min}`;
}
console.log(formatuoti(d));                        // 2026-09-22 14:30
console.log(formatuoti(new Date(2026, 0, 5, 9, 5))); // 2026-01-05 09:05

// --- HTML <input type="date"> reikalauja formato YYYY-MM-DD ---
function iInputa(data) {
  return data.toLocaleDateString("sv-SE");   // švedų formatas = tiksliai YYYY-MM-DD
}
console.log(iInputa(d)); // 2026-09-22
