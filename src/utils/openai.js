import OpenAI from "openai";
import { OPEN_AI_KEY } from "./constants";
const openai = new OpenAI({
    apiKey: OPEN_AI_KEY,
    dangerouslyAllowBrowser: true, // habe to explicitely add this bcz open ai warns us not make api call from browser as it leaks our openaiKey -> expected :api call from backend
    // this allows to make call from browser also
    baseURL: "https://api.aimlapi.com/v1",
   
});

export default openai;
