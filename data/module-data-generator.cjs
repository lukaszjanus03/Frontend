const fs = require("fs");
const path = require("path");

const count = Number(process.argv[2] || 10); // liczba obiektów, domyślnie 10
let names = [];

// Wczytaj imiona
fs.readFile(path.join(__dirname, "../data/names.txt"), "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  names = data
    .split("\n")
    .map((s) => s.trim())
    .filter((n) => n.length !== 0);

  let content = "export const people = [\n";
  for (let i = 0; i < count; i++) {
    const name = names[Math.floor(Math.random() * names.length)];
    const email = `${name.toLowerCase()}${i + 1}@wsei.edu.pl`;
    const birthDate = `200${Math.floor(Math.random() * 3)}-1${Math.floor(
      Math.random() * 2
    )}-1${Math.floor(Math.random() * 9)}`;
    const phone = `${Math.floor(Math.random() * 900 + 100)}-${Math.floor(
      Math.random() * 900 + 100
    )}-${Math.floor(Math.random() * 900 + 100)}`;
    content += `  {
    id: ${i + 1},
    name: "${name}",
    birthDate: "${birthDate}",
    email: "${email}",
    phone: "${phone}"
  },\n`;
  }
  content += "];\n";

  // Zapisz do src/module-data.js
  fs.writeFile(
    path.join(__dirname, "../src/module-data.js"),
    content,
    (err) => {
      if (err) console.error(err);
      else console.log("module-data.js generated in src/");
    }
  );
});
 