import { loadCorpora } from "../../utils/loadCorpora";

export const nlpUserDetails = async () => {
    const filename = ["gather-name.json"];
    const manager = await loadCorpora(filename);

    await manager.train();
      manager.save("./src/models/userDetails.nlp");
  };
  