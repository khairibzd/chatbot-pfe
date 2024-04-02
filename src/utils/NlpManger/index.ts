const { NlpManager } = require("node-nlp");

export const manager = new NlpManager({ languages: ["en"], autoSave: false, });
