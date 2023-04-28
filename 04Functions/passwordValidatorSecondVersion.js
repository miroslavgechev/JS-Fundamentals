function passwordValidator(password) {
  let isLengthValid = isLengthBetweenSixAndTen(password);
  let doesItContainLettersAndNums = doesItHaveOnlyLettersAndNums(password);
  let hasAtLeastTwoNums = hasAtLeastTwoDigits(password);

  if (isLengthValid && doesItContainLettersAndNums && hasAtLeastTwoNums) {
    console.log("Password is valid");
  } else {
    if (!isLengthValid) {
      console.log("Password must be between 6 and 10 characters");
    }
    if (!doesItContainLettersAndNums) {
      console.log("Password must consist only of letters and digits");
    }
    if (!hasAtLeastTwoNums) {
      console.log("Password must have at least 2 digits");
    }
  }

  function isLengthBetweenSixAndTen(pass) {
    if (pass.length >= 6 && pass.length <= 10) {
      return true;
    } else {
      return false;
    }
  }

  function doesItHaveOnlyLettersAndNums(pass) {
    for (let element of pass) {
      let charCode = element.charCodeAt(0);

      if (
        !(charCode >= 48 && charCode <= 57) &&
        !(charCode >= 65 && charCode <= 90) &&
        !(charCode >= 97 && charCode <= 122)
      ) {
        return false;
      }
    }
    return true;
  }

  function hasAtLeastTwoDigits(pass) {
    let counter = 0;
    for (let element of pass) {
      let charCode = element.charCodeAt(0);
      if (charCode >= 48 && charCode <= 57) {
        counter++;
      }
    }
    return counter >= 2;
  }
}

