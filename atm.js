import inquirer from "inquirer";
let myBalance = 20000;
let mypin = 4455;
let pinAnswer = await inquirer.prompt({
    name: "pin",
    message: "Enter your pin",
    type: "number",
});
if (pinAnswer.pin === mypin) {
    console.log("Your pin is correct");
    let operationAns = await inquirer.prompt([
        {
            name: "operations",
            message: "please select options",
            type: "list",
            choices: ["Withdraw", "Fast cash", "check balance"],
        }
    ]);
    //  if user select withdraw
    if (operationAns.operations === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number",
            }
        ]);
        if (amountAns.amount <= myBalance) {
            let balance = myBalance - amountAns.amount;
            console.log(`The remaning balance is ${balance}`);
        }
        else {
            console.log(`You have insufficient balance`);
        }
    }
    // if user select fast cash
    else if (operationAns.operations === "Fast cash") {
        let FastcashAns = await inquirer.prompt([
            {
                name: "amount",
                type: "list",
                choices: ["1000", "5000", "3000", "25000"],
            }
        ]);
        if (FastcashAns.amount <= myBalance) {
            let balance2 = myBalance - FastcashAns.amount;
            console.log(`the remaning balance is ${balance2}`);
        }
        else {
            console.log(`You have insufficient amount`);
        }
    }
    else if (operationAns.operations === "check balance") {
        console.log(myBalance);
    }
}
else {
    console.log("Your pin is wrong");
}

