import { loadIntents } from "../../utils/loadIntent";
import { manager } from "../../utils/NlpManger";



export const nlpgreeting = async () => {

    const filenames = ["greetings.bye.json", "greetings.hello.json"];
  
    //
    loadIntents(filenames);
  
    await manager.train();
    manager.save("./src/models/greeting.nlp");
  };