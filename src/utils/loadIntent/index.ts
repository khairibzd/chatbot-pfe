import { manager } from "../NlpManger";

const fs = require("fs");

export const loadIntents = (filenames: any) => {
  for (const file of filenames) {
    const intent = file.replace(".json", "");
    let data = fs.readFileSync(`./src/nlu/intents/${file}`);
    data = JSON.parse(data);

    for (const question of data.questions) {
      manager.addDocument("en", question, intent);
    }

    for (const answer of data.answers) {
      manager.addAnswer("en", intent, answer);
    }
  }
};
