function gladiatorInventory(inputArray) {
  let inventory = inputArray[0].split(" ");
  let currentCommand;
  let currentWeaponOrUpgrade;
  let currentArray = [];

  for (let index = 1; index < inputArray.length; index++) {
    currentArray = inputArray[index].split(" ");
    currentCommand = currentArray[0];
    currentWeaponOrUpgrade = currentArray[1];

    switch (currentCommand) {
      case "Buy":
        if (!inventory.includes(currentWeaponOrUpgrade)) {
          inventory.push(currentWeaponOrUpgrade);
        }
        break;

      case "Trash":
        if (inventory.includes(currentWeaponOrUpgrade)) {
          inventory.splice(inventory.indexOf(currentWeaponOrUpgrade), 1);
        }
        break;

      case "Repair":
        if (inventory.includes(currentWeaponOrUpgrade)) {
          inventory.splice(inventory.indexOf(currentWeaponOrUpgrade), 1);
          inventory.push(currentWeaponOrUpgrade);
        }
        break;

      case "Upgrade":
        let weaponAndUpgrade = currentWeaponOrUpgrade.split("-");
        let weapon = weaponAndUpgrade[0];
        let upgrade = weaponAndUpgrade[1];

        if (inventory.includes(weapon)) {
            let indexToAddWeaponUpgrade = inventory.indexOf(weapon) + 1;
          inventory.splice(indexToAddWeaponUpgrade, 0, `${weapon}:${upgrade}`);
        }
        break;
    }
  }

  console.log(inventory.join(" "));
}

gladiatorInventory(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel']);
