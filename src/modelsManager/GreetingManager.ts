import { manager } from "../utils/NlpManger";



export const GreetingManager = () => {
    manager.load('./src/models/greeting.nlp');
}  
