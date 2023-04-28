function passwordValidator(password) {
  let passwordLength = password.length;
  let digitsCounter = 0;
  let conditionCounter = 0;

  if (passwordLength < 6 || passwordLength > 10) {
    console.log("Password must be between 6 and 10 characters");
  } else {
    conditionCounter++;
  }

  if (!/^[A-Za-z0-9]*$/.test(password)) {
    console.log("Password must consist only of letters and digits");
  } else {
    conditionCounter++;
  }

  for (let element of password) {
    let currentValue = parseInt(element);
    if (isNaN(currentValue)) {
      continue;
    } else {
      digitsCounter++;
    }
  }

  if (digitsCounter <= 2) {
    console.log("Password must have at least 2 digits");
  } else {
    conditionCounter++;
  }

  if (conditionCounter === 3) {
    console.log("Password is valid");
  }
}

passwordValidator("1111123");
