import fs from "fs";
import shuffle from 'array-shuffle'

const fsp = fs.promises;

(async () => {
  const playersFileContent = await fsp.readFile("players.txt", "utf-8");
  
  const players = playersFileContent
    .split("\n")
    .map((x) => x.trim())
    .filter((x) => x.length > 0);
 
  const shuffledPlayers = shuffle(players)
  console.log(shuffledPlayers)

  let assassins = [...shuffledPlayers]
  assassins.unshift(assassins.pop())
  console.log(assassins)

  for (let i = 0; i < shuffledPlayers.length; i++) {
      console.log(`${assassins[i]} -> ${shuffledPlayers[i]}`)
  }

})();


