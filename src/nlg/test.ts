import { FeaturesGatherManager } from "../modelsManager/FeaturesGatherManager";
import { manager } from "../utils/NlpManger";


// Loading a module readline, this will be able to take input from the terminal.
var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout);


console.log("Chatbot started!");
// console.log("hi how i can help you for today");
rl.setPrompt("> ");
rl.prompt();
rl.on("line", async function (line: string) {
    // manager.load("./src/models/domain_0.nlp");
    // console.log("chatbot domains", manager.nlp.getDomains());

    // const response = await manager.process("en", line);

    manager.load("./src/models/userDetails.nlp")
    const responsee = await manager.process("en", line);
    console.log(responsee.answer);

    // console.log("context: ", context);
    rl.prompt();
}).on("close", function () {
    process.exit(0);
});
