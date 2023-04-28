function thePyramidOfKingDjoser(base, increment) {
  let stoneCount = 0;
  let marbleCount = 0;
  let lapisLazuliCount = 0;
  let goldCount = 0;

  let levelCount = Math.ceil(base / 2);
  let currentFloor = 1;

  for (let reverseFloor = base; reverseFloor > 0; reverseFloor -= 2) {
    let outerArea = Math.pow(base, 2);
    let innerArea = Math.pow(base - 2, 2);

    
    let outerPerimeter = outerArea - innerArea;

    if (base <= 2) {
      goldCount += outerArea * increment;
    } else if (currentFloor % 5 === 0) {
      lapisLazuliCount += outerPerimeter * increment;
    } else {
      marbleCount += outerPerimeter * increment;
    }

    if (base > 2) {
      stoneCount += innerArea * increment;
    }

    currentFloor++;
    base -= 2;
  }

  console.log(`Stone required: ${Math.ceil(stoneCount)}`);
  console.log(`Marble required: ${Math.ceil(marbleCount)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuliCount)}`);
  console.log(`Gold required: ${Math.ceil(goldCount)}`);
  console.log(`Final pyramid height: ${Math.floor(levelCount * increment)}`);
}

thePyramidOfKingDjoser(23, 0.5);
