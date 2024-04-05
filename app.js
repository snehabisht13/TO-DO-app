let todo = [];
alert("Read instructions first please.");

let user_enters = prompt("Have you read instructions (yes/no)");

if (user_enters == "yes") {
    let req = prompt("Enter your choice");
    while (true) {
        if (req == "quit") {
            console.log("Quitted");
            break;
        }

        if (req == "list") {
            if (todo.length === 0) {
                console.log("No task to perform yet !!");
            }
            else {
                console.log("Your list is: ");
                for (let i = 0; i < todo.length; i++) {
                    console.log(i, todo[i]);
                }
                console.log("End of list.");
            }

        }
        else if (req == "add") {
            alert("you can only add 5 tasks at a time.");
            for (let j = 1; j <= 5; j++) {
                let task = prompt(`Enter the task ${j} to list in`);
                todo.push(task);
            }
            console.log("Task added");
        }

        else if (req == "delete") {
            let idx = prompt("Enter the task which you want to delete");
            for (let i = 0; i < todo.length; i++) {
                if (todo[i] === idx) {
                    todo.splice(i, 1);
                }
            }
            console.log("task deleted");
        }

        req = prompt("Enter your choice");
    }
}
else {
    console.log(" now Start making list!");
}

