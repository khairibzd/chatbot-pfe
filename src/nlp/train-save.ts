import { domainManager } from "../domainManager";
import { nlpgreeting } from "./greeting/nlpGreeting";
import { nlpRecommendRestaurant } from "./recommendRestaurant";
import { nlpRecommend } from "./recomment";
import { nlpUserDetails } from "./userDetails";





async function train_save() {
    // await nlpRecommend();
    // await nlpRecommendRestaurant();
    // await nlpgreeting();
    // await domainManager();
    await nlpUserDetails();
  }
    
  train_save();