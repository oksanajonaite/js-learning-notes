"use strict";

// 6. Deep destructuring of nested objects

function extractData(data) {
  const {
    status,
    user: {
      id: userId,
      profile: { name },
      roles: [primaryRole]
    }
  } = data;

  return { status, userId, name, primaryRole };
}

const data = {
  status: "ok",
  user: {
    id: 15,
    profile: {
      name: "Laura",
      email: "laura@example.com"
    },
    roles: ["user", "editor"]
  }
};

console.log(extractData(data)); //{ status: 'ok', userId: 15, name: 'Laura', primaryRole: 'user' }