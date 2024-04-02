import { manager } from "../utils/NlpManger";

export const FeaturesGatherManager = () => {
  manager.load("./src/models/userDetails.nlp");
};
