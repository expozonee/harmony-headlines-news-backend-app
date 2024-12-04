import { GoogleGenerativeAI } from "@google/generative-ai";
import { NewsData } from "./fetchNews";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.AI_API_KEY!);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function initialMoods(titles: string[]) {
  let prompt = `for each sentence of the following sentences, 
        give a score based on sentiment analysis, ranging from 0 to 10,
        0 being the most friendly, supportive and empathetic, while 10
        is the most aggressive and charged. return only a list of numbers,
        without any further explanations. make sure that the number of scores
        you return match the numbers of sentences. the sentences are: `;
  prompt += JSON.stringify(titles);
  const result = await model.generateContent(prompt);
  const answer = result.response.text();
  return JSON.parse(answer);
}

export async function changeMood(data: NewsData, valueMood: number) {
  const prompt = `i will give you a title and a news story and the current mood level. you need to 
    make them both calmer, more empathetic and more positive or more aggressive and charged according
    to the desired mood level - the higher the mood the more aggressive and charged the title and the description to be
    and the less the mood level make them both calmer, more empathetic and more positive.
    the desired mood leve is: ${valueMood} - without loosing
    any of the important existing facts.  the title is: ${data.title}.
    The description is: ${data.description}.
    the previous mood rating to these data is (ranging from 0 to 10,
        0 being the most friendly, supportive and empathetic, while 10
        is the most aggressive and charged.) : ${data.mood}
    Return the new value as a an object, with the format: {
        title: <new updated title here>,
        description: <new updated description here>
        mood: <new updated mood>
    }.
    return ONLY this object, without any additional text or explanations and always stick to the level of mood i provide.
    dont and anything before or after the {} of the object. dont return markdown.`;
  const result = await model.generateContent(prompt);
  const answer = result.response.text().trim();
  return JSON.parse(answer);
}
