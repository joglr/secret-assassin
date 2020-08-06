import fs from "fs";
import shuffle from "array-shuffle";

const fsp = fs.promises;

(async () => {
  const [, , inFileName = "participants.txt"] = process.argv;
  const playersFileContent = await fsp.readFile(inFileName, "utf-8");

  const players = playersFileContent
    .split("\n")
    .map((x) => x.trim())
    .filter((x) => x.length > 0);

  const shuffledPlayers = shuffle(players);

  let assassins = [...shuffledPlayers];
  assassins.unshift(assassins.pop());

  for (let i = 0; i < shuffledPlayers.length; i++) {
    console.log(`${assassins[i]} -> ${shuffledPlayers[i]}`);
  }
})();
