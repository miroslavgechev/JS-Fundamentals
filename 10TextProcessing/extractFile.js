function extractFile(path){

    let pathElements = path.split('\\');

    let fileName = pathElements.pop().split('.');
    let fileExtension = fileName.pop();

    console.log(`File name: ${fileName.join('.')}`);
    console.log(`File extension: ${fileExtension}`);
}

extractFile('C:\\Projects\\Data-Structures\\LinkedList.txt.cs')