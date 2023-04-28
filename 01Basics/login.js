function login(input) {
  let index = 0;
  let username = input[index];
  index++;

  let password = "";
  let tries = 0;
  let triesPassed = false;
  let passwordIsCorrect = false;

  for (let i = username.length - 1; i >= 0; i--) {
    password += username[i];
  }

  let currentValue = input[index];
  index++;

  if (currentValue === password) {
    passwordIsCorrect = true;
  } else {
    while (currentValue !== password) {
      tries++;
      if (tries === 4) {
        console.log(`User ${username} blocked!`);
        triesPassed = true;
        break;
      }
      console.log("Incorrect password. Try again.");

      currentValue = input[index];
      index++;

      if (currentValue === password) {
          passwordIsCorrect = true;
          break;
      }
    }
  }

  if (!triesPassed && passwordIsCorrect) {
    console.log(`User ${username} logged in.`);
  }
}

login(['sunny','rainy','cloudy','sunny','not sunny']);
