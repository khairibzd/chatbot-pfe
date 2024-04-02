import { loadIntents } from "../../utils/loadIntent";
import { manager } from "../../utils/NlpManger";

export const nlpRecommend = async () => {
  const filename = ["recomend.place.json"];
  loadIntents(filename);
  await manager.train();
  manager.save("./src/models/recomend.nlp");
};
