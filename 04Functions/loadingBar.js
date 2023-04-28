function loadingBar(progress) {
  let percentSigns = Math.floor(progress / 10);
  let dotSigns = 10 - percentSigns;

  if (progress < 100) {
    console.log(
      `${progress}% [${"%".repeat(percentSigns)}${".".repeat(dotSigns)}]`
    );
    console.log("Still loading...");
  } else {
    console.log("100% Complete!");
    console.log("%".repeat(percentSigns));
  }
}

loadingBar(100);
