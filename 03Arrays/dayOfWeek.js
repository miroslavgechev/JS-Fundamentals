function dayOfWeek(day) {
  let daysOfTheWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  if (day > 0 && day < 8) {
    console.log(daysOfTheWeek[day - 1]);
  } else {
    console.log("Invalid day!");
  }
}

dayOfWeek(13);
