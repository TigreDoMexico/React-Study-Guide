import { generateData } from "../cardsData";

export const loadDataService = () => 
    new Promise((result) => {
        setTimeout(() => {
          result(generateData())
        }, 2500);   
    })
