function experienceGaining(inputArray) {
  let neededExperience = Number(inputArray.shift());
  let countOfBattles = Number(inputArray.shift());
  let experienceGained = 0;
  let experienceCurrentBattle = 0;
  let battleCount = 0;
  let enoughExperienceGained = false;

  for (let index = 0; index < inputArray.length; index++) {
    experienceCurrentBattle = Number(inputArray[index]);
    battleCount++;

    experienceGained += experienceCurrentBattle;

    if (battleCount % 3 === 0) {
      experienceGained += experienceCurrentBattle * 0.15;
    }

    if (battleCount % 5 === 0) {
      experienceGained -= experienceCurrentBattle * 0.1;
    }

    if (battleCount % 15 === 0) {
      experienceGained += experienceCurrentBattle * 0.05;
    }

    if (experienceGained >= neededExperience) {
      enoughExperienceGained = true;
      break;
    }
  }

  if (enoughExperienceGained) {
    console.log(`Player successfully collected his needed experience for ${battleCount} battles.`);
  } else {
    let insufficientExperience = neededExperience - experienceGained;
    console.log(`Player was not able to collect the needed experience, ${insufficientExperience.toFixed(2)} more needed.`);
  }
}

experienceGaining([500, 5, 50, 100, 200, 100]);
