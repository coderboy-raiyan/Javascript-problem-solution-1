const userData = [
  { name: "Raiyan", age: 20, temperature: 98 },
  { name: "Muzammel Haque", age: 48, temperature: 98 },
  { name: "Nusrat Shabnam", age: 45, temperature: 98 },
  { name: "Turno", age: 21, temperature: 101 },
  { name: "jisun", age: 28, temperature: 104 },
  { name: "Nayem", age: 29, temperature: 103 },
  { name: "Zabeen Alam", age: 50, temperature: 98 },
  { name: "Khursed Alam", age: 60, temperature: 98 },
  { name: "Zesshan Alam", age: 30, temperature: 101 },
  { name: "Farhana khan", age: 35, temperature: 104 },
  { name: "Farhana khan", age: 35, temperature: 97 },
];

// here is the vaxTrail functions

const vaxTrail = (data) => {
  const mainObj = {};

  // A lists
  const aList = data.filter(
    (user) => user.age >= 20 && user.age <= 30 && user.temperature < 100
  );

  const a = [...aList];
  mainObj.A = a;

  //   B lists
  const bLists = data.filter(
    (user) => user.age >= 31 && user.age <= 40 && user.temperature < 100
  );

  const b = [...bLists];
  mainObj.B = b;

  //   C lists
  const cLists = data.filter(
    (user) => user.age >= 41 && user.age <= 50 && user.temperature < 100
  );

  const c = [...cLists];
  mainObj.C = c;

  //   D lists
  const dLists = data.filter((user) => user.temperature >= 100);

  const d = [...dLists];
  mainObj.D = d;

  return mainObj;
};

console.log(vaxTrail(userData));
