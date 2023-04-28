function vacation(groupSize, groupType, dayOfTheWeek) {
  let price = 0;

  if (groupType === "Students") {
    switch (dayOfTheWeek) {
      case "Friday":
        price = groupSize * 8.45;
        break;
      case "Saturday":
        price = groupSize * 9.8;
        break;
      case "Sunday":
        price = groupSize * 10.46;
        break;
    }

    if (groupSize >= 30) {
      price *= 0.85;
    }
  } else if (groupType === "Business") {
    if (groupSize >= 100) {
      groupSize -= 10;
    }

    switch (dayOfTheWeek) {
      case "Friday":
        price = groupSize * 10.9;
        break;
      case "Saturday":
        price = groupSize * 15.6;
        break;
      case "Sunday":
        price = groupSize * 16;
        break;
    }
  } else if (groupType === "Regular") {
    switch (dayOfTheWeek) {
      case "Friday":
        price = groupSize * 15;
        break;
      case "Saturday":
        price = groupSize * 20;
        break;
      case "Sunday":
        price = groupSize * 22.5;
        break;
    }

    if (groupSize >= 10 && groupSize <= 20) {
      price *= 0.95;
    }
  }

  console.log(`Total price: ${price.toFixed(2)}`);
}

vacation(40, "Regular", "Saturday");
