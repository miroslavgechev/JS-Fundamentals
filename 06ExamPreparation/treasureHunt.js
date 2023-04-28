function treasureHunt(inputArray){

let index=0;
let chest = inputArray[index].split('|');
index++;

let currentValue = inputArray[index];
index++;

let currentCommand;
let averageTreasureGain = 0;
let chestItemsLength = 0;

while(currentValue !== 'Yohoho!'){
    currentValue = currentValue.split(' ');
    currentCommand = currentValue.shift();

    switch(currentCommand){
        case 'Loot': 
            for(let item of currentValue){
                if(!chest.includes(item)){
                    chest.unshift(item);
                }
            }
            break;
    
        case 'Drop': 
            let dropIndex = Number(currentValue[0]);
            if(dropIndex < 0 || dropIndex > chest.length - 1){
                currentValue = inputArray[index];
                index++;
                continue;
            } else {
                chest.push(chest.splice(dropIndex,1));
            }
            break;

        case 'Steal': 
            let iteamsToSteal = Number(currentValue[0]);
            let stolenItems = [];
            if(iteamsToSteal > chest.length){
                stolenItems = chest.slice(0);
                chest = [];
                console.log(stolenItems.join(', '));
            } else {
                stolenItems = chest.splice(-iteamsToSteal);
                console.log(stolenItems.join(', '));
            }
            break;
    }
    currentValue = inputArray[index];
    index++;
}

if(chest.length <= 0){
    console.log('Failed treasure hunt.');
} else{
    for(let item of chest){
        chestItemsLength += item.length;
    }    
    averageTreasureGain = chestItemsLength / chest.length;
    console.log(`Average treasure gain: ${averageTreasureGain.toFixed(2)} pirate credits.`);
}

}

treasureHunt((["Diamonds|Silver|Shotgun|Gold",
"Loot Silver Medals Coal",
"Drop -1",
"Drop 1",
"Steal 6",
"Yohoho!"])

)