// // Add intents and utterances to the manager
// const { NlpManager } = require("node-nlp");

// const corpus = require("./corpus.json");
// const manager = new NlpManager({ languages: ['en'] });

// corpus.forEach((intent) => {
//   intent.utterances.forEach((utterance) => {
//     manager.addDocument("en", utterance, intent.intent);
//   });
// });

// corpus.forEach((intent) => {
//   manager.addAnswer("en", intent.intent, intent.responses);
// });


// (async () => {
//     await manager.train();
//     await manager.save();
//     console.log('Model trained successfully!');

//     const input = "hello";
//     const result = await manager.process('en', input);

//     console.log('Predicted Intent:', result.intent);
//     console.log('Predicted Response:', result.answer[0]);
// })();



