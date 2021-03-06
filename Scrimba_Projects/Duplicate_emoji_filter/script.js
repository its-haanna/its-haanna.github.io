const emojis = [
  "๐",
  "๐",
  "๐",
  "๐งก",
  "๐",
  "๐ง",
  "โก๏ธ",
  "๐",
  "๐ฑ",
  "๐",
  "๐งก",
  "๐ซ",
  "๐",
  "๐",
  "โก๏ธ",
  "โก๏ธ",
  "๐ถ",
  "๐",
  "๐",
  "๐ฑ",
  "๐",
  "๐ซ",
  "๐",
  "๐",
  "๐",
  "โก๏ธ",
  "๐",
  "๐",
  "๐ฑ",
  "๐",
  "๐ซ",
  "๐",
  "๐",
  "โก๏ธ",
  "๐งก",
  "๐",
  "๐",
  "๐"
];

const allEmojisP = document.getElementById("all-emojis-p");
const uniqueEmojisP = document.getElementById("unique-emojis-p");

for (let emoji of emojis) {
  allEmojisP.textContent += emoji;
}

// filter duplicates
document.getElementById("btn-filter").addEventListener("click", () => {
  uniqueEmojisP.textContent = [...new Set(emojis)].join("");
});

// sort emoji

document.getElementById("btn-sort").addEventListener("click", () => {
  uniqueEmojisP.textContent = emojis.sort().join("");
});

