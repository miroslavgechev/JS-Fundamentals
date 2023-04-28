function chatLogger(inputArray) {
  let currentValue = inputArray.shift().split(" ");
  let currentCommand = currentValue.shift();
  let currentMessage;
  let chatLog = [];
  let index = -1;

  while (currentCommand !== "end") {
    switch (currentCommand) {
      case "Chat":
        currentMessage = currentValue.shift();
        chatLog.push(currentMessage);
        break;

      case "Delete":
        currentMessage = currentValue.shift();
        if (chatLog.includes(currentMessage)) {
          index = chatLog.indexOf(currentMessage);
          chatLog.splice(index, 1);
        }
        break;

      case "Edit":
        currentMessage = currentValue.shift();
        if (chatLog.includes(currentMessage)) {
          let editedMessage = currentValue.shift();
          index = chatLog.indexOf(currentMessage);
          chatLog.splice(index, 1, editedMessage);
        }
        break;

      case "Pin":
        currentMessage = currentValue.shift();
        if (chatLog.includes(currentMessage)) {
          index = chatLog.indexOf(currentMessage);
          chatLog.splice(index, 1);
          chatLog.push(currentMessage);
        }
        break;

      case "Spam":
        for (let message of currentValue) {
          chatLog.push(message);
        }
        break;
    }

    currentValue = inputArray.shift().split(" ");
    currentCommand = currentValue.shift();
    index = -1;
    currentMessage = "";
  }

  console.log(chatLog.join("\n"));
}

chatLogger([
  "Chat John",
  "Spam Let's go to the zoo",
  "Edit zoo cinema",
  "Chat tonight",
  "Pin John",
  "end",
]);
