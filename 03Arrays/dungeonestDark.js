function dungeonestDark(inputArray) {
  let inputArraySingleLine = inputArray[0];
  let containsSpecialSymbol = true;

  let health = 100;
  let coins = 0;
  let isAlive = true;

  while (containsSpecialSymbol) {
    inputArraySingleLine = inputArraySingleLine.replace("|", " ");

    if (inputArraySingleLine.includes("|")) {
      continue;
    } else {
      containsSpecialSymbol = false;
    }
  }

  let modifiedInputArray = inputArraySingleLine.split(" ");
  let lengthOfModifiedInputArray = modifiedInputArray.length;

  for (let index = 0; index < lengthOfModifiedInputArray; index += 2) {
    let currentRoom = modifiedInputArray[index];
    let currentNumber = Number(modifiedInputArray[index + 1]);

    if (currentRoom === "potion") {
      health += currentNumber;

      if (health > 100) {
        console.log(`You healed for ${100 - health + currentNumber} hp.`);
        health = 100;
      } else {
        console.log(`You healed for ${currentNumber} hp.`);
      }

      console.log(`Current health: ${health} hp.`);
    } else if (currentRoom === "chest") {
      coins += currentNumber;
      console.log(`You found ${currentNumber} coins.`);
    } else {
      health -= currentNumber;

      if (health > 0) {
        console.log(`You slayed ${currentRoom}.`);
      } else {
        console.log(`You died! Killed by ${currentRoom}.`);
        console.log(`Best room: ${Math.ceil((index + 1) / 2)}`);
        isAlive = false;
        break;
      }
    }
  }

  if (isAlive) {
    console.log(`You've made it!`);
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
  }
}

dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
