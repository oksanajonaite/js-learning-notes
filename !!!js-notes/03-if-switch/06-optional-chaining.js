// 03 · Optional chaining ?.
// Paleisti: node 03-if-switch/06-optional-chaining.js
//
// Jei kairėje pusėje yra null arba undefined, ?. nesukelia klaidos,
// o tiesiog grąžina undefined.

const user1 = { name: "Ana", contact: { email: "ana@example.com" } };
const user2 = { name: "Jonas" };          // contact nėra
const user3 = null;                        // viso vartotojo nėra

// --- Be ?. — griozdiška ---
function gautiEmail(user) {
  if (user) {
    if (user.contact) {
      return user.contact.email;
    }
  }
  return undefined;
}

console.log(gautiEmail(user1)); // ana@example.com
console.log(gautiEmail(user2)); // undefined

// --- Su ?. — viena eilutė ---
console.log(user1?.contact?.email); // ana@example.com
console.log(user2?.contact?.email); // undefined ✅ klaidos nėra
console.log(user3?.contact?.email); // undefined ✅

// --- Be ?. būtų klaida ---
try {
  console.log(user2.contact.email);
} catch (e) {
  console.log("❌ " + e.message); // Cannot read properties of undefined (reading 'email')
}

// --- Veikia ir su masyvais bei funkcijomis ---
const duomenys = { sarasas: [10, 20] };
console.log(duomenys.sarasas?.[0]);     // 10
console.log(duomenys.kitas?.[0]);       // undefined

const obj = { veikti: () => "ok" };
console.log(obj.veikti?.());            // ok
console.log(obj.nera?.());              // undefined

// --- Dažnai derinamas su ?? (numatytoji reikšmė) ---
console.log(user2?.contact?.email ?? "el. pašto nėra"); // el. pašto nėra

// ⚠️ ?? skiriasi nuo ||: ?? tikrina tik null/undefined, o || dar ir 0, "", false
console.log(0 || "numatyta");  // numatyta ⚠️
console.log(0 ?? "numatyta");  // 0 ✅
