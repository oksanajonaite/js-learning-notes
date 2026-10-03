"use strict";

//11. to hide email addresses to protect from unauthorized user.

function protect_email(email) {
  let [username, domain] = email.split("@"); //padalina adresa i 2 dalis
  let visibleLength = Math.floor(username.length / 2);
  let visiblePart = username.slice(0, visibleLength);

  return `${visiblePart}...@${domain}`;
}

console.log(protect_email("robin_singh@example.com")); //robin...@example.com