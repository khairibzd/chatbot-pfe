import { loadCorpora } from "../../utils/loadCorpora";




export const nlpRecommendRestaurant = async () => {

const filenames = ["recomand.restaurant.json","gather-preferences-requirements.json"];
const manager = await loadCorpora(filenames);

await manager.train();
  manager.save("./src/models/recomendRestaurant.nlp");
}