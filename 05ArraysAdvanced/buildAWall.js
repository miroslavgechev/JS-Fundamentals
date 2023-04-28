function buildAWall(inputArray){

    let wallSections = inputArray.map(Number);
    let sectionHeightLimit = 30;
    let cubicYardsOfConcreteCost = 1900;
    let cubicYardsOfConcreteDailyUsage = 195;
    
    let currentWallCost = 0;
    let dailyConcreteUsageArray = [];
    let currentDailyConcreteUsage = 0;
    
    let totalWallCost = 0;

    for(let sectionStartingHeight of wallSections){
        if(sectionStartingHeight < sectionHeightLimit){
            totalWallCost += (sectionHeightLimit - sectionStartingHeight) * cubicYardsOfConcreteDailyUsage * cubicYardsOfConcreteCost;
        }
    }

    while(currentWallCost < totalWallCost){
        for(let index = 0; index < wallSections.length; index++){
            if(wallSections[index] < 30){
                wallSections[index]++;
                currentDailyConcreteUsage += cubicYardsOfConcreteDailyUsage;
                currentWallCost += cubicYardsOfConcreteDailyUsage * cubicYardsOfConcreteCost
            }
        }

        dailyConcreteUsageArray.push(currentDailyConcreteUsage);
        currentDailyConcreteUsage = 0;
    }
    console.log(dailyConcreteUsageArray.join(', '));
    console.log(`${currentWallCost} pesos`);

}

buildAWall([17, 22, 17, 19, 17])