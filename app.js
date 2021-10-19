let input = prompt("What would you like to do?");

const toDoList = [];

while (input !== 'quit') {
    if (input === 'add') {
        let newItem = prompt("What is your newest to-do?");
        toDoList.push(newItem);
        console.log(`${newItem} added to list`)
    } 
    if (input === 'list') {
        console.log('*********');
        for (let i = 0; i < toDoList.length; i++) {
            console.log(`${i}: ${toDoList[i]}`);
        }
        console.log('*********');
        }
    if (input === 'delete') {
        let toDelete = prompt("Enter the index of the todo to delete:");
        toDoList.splice(toDelete, 1);
    }
    if (input === 'quit') {
        console.log(`Okay, you quit the app.`);
        break;
    }
    input = prompt("What would you like to do?");
}