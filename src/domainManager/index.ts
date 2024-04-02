import { manager } from "../utils/NlpManger";

const fs = require("fs");

// here we assign all the intents to a domain model to be able to know each intentDomain

export const domainManager = async () => {
  const files = fs.readdirSync("./src/nlu/intents");
  for (const file of files) {
    let data = fs.readFileSync(`./src/nlu/intents/${file}`);
    data = JSON.parse(data);
    const intent = file.replace(".json", "");

    for (const question of data.questions) {
      manager.addDocument("en", question, intent);
    }
  }

  // Assign domains
  //   manager.assignDomain("local", "intent", "this is the intentDomain that can take multiple intents that u can test with it later when u want to load a model");

  manager.assignDomain("en", "greetings.bye", "greetings");
  manager.assignDomain("en", "greetings.hello", "greetings");
  manager.assignDomain("en", "recomend.place", "recomends");
  manager.assignDomain("en", "user.name", "gatherUserDetails");
  manager.assignDomain("en", "restaurant.preferences", "FeaturesGather");
  // Assign more domains as needed
  await manager.train();
  manager.save("./src/models/domain_0.nlp");

  


 
}


