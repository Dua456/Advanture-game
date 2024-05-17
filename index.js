import inquirer from "inquirer";
import chalk from "chalk";
//classes player & opponent
//class Player
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
//class Opponent
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
// Player name & Opponent Select
let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "please Enter your Name:"
});
let opponent = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "Select your Opponent",
    choices: ["Skeleton", "Assassin", "Zombie"],
});
// Gather Data
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
do {
    //Skeleton
    if (opponent.select === "Skeleton") {
        let ask = await inquirer.prompt([
            {
                type: "list",
                name: "opt",
                message: "Select your Opponent",
                choices: ["Attack", "Drink portion", "Run for your life.."],
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("you loose, Batter luck Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("you win"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`you Drink Health portion your fuel is ${p1.fuel}`));
        }
        if (ask.opt == "Run for your life..") {
            console.log(chalk.bold.italic("you loose, Batter luck Next Time"));
            process.exit();
        }
    }
    // Assassin
    if (opponent.select === "Assassin") {
        let ask = await inquirer.prompt([
            {
                type: "list",
                name: "opt",
                message: "Select your Opponent",
                choices: ["Attack", "Drink portion", "Run for your life.."],
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("you loose, Batter luck Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("you win"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`you Drink Health portion your fuel is ${p1.fuel}`));
        }
        if (ask.opt == "Run for your life..") {
            console.log(chalk.bold.italic("you loose, Batter luck Next Time"));
            process.exit();
        }
    }
    //Zombia
    if (opponent.select === "Zombie") {
        let ask = await inquirer.prompt([
            {
                type: "list",
                name: "opt",
                message: "Select your Opponent",
                choices: ["Attack", "Drink portion", "Run for your life.."],
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("you loose, Batter luck Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("you win"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`you Drink Health portion your fuel is ${p1.fuel}`));
        }
        if (ask.opt == "Run for your life..") {
            console.log(chalk.bold.italic("you loose, Batter luck Next Time"));
            process.exit();
        }
    }
} while (true);
