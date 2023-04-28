function ladybugs(inputArray) {
  let sizeOfField = inputArray[0];
  let initialPositions = [];
  let field = [];

  for (let index = 0; index < sizeOfField; index++) {
		field.push(0);
  }

  initialPositions = inputArray[1].split(" ").map(Number);

  for (let index = 0; index < sizeOfField; index++) {
		if (initialPositions[index] >= 0 && initialPositions[index] < sizeOfField) {
			field[initialPositions[index]] = 1;
		}
	}
  let fieldSum = 0;

  for (let element of field) {
    fieldSum += Number(element);
  }

  if (fieldSum > 0) {
    for (let index = 2; index < inputArray.length; index++) {
      let workingArray = inputArray[index].split(" ");
      let indexToMove = Number(workingArray[0]);
      let directionToMove = workingArray[1];
      let spaceToMove = Number(workingArray[2]);

      if (field[indexToMove] !== 1 || indexToMove < 0 || indexToMove>= field.length) {
        continue;
      }

        if (spaceToMove < 0) {
          spaceToMove = Math.abs(spaceToMove);

          if (directionToMove === "right") {
            directionToMove = "left";
          } else if (directionToMove === 'left') {
            directionToMove = "right";
          }
        }

        field[indexToMove] = 0;
        
        if (directionToMove === 'right') {
          let newPosition = indexToMove + spaceToMove;
 
          if (field[newPosition] === 1) {
            newPosition = newPosition + spaceToMove;
          }
          if (newPosition <= field.length) {
            field[newPosition] = 1;
          }
     
        } else {
          let newPosition = indexToMove - spaceToMove;

          if (field[newPosition] === 1) {
            newPosition = newPosition - spaceToMove;
          }
          if(newPosition >= 0 ){
            field[newPosition] = 1;
          }
        }
      
    }
    console.log(field.join(" "));
  }
}

ladybugs([5, "3", "3 left 2", "1 left -2"]);
