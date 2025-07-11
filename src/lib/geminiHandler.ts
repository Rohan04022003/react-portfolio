import { GoogleGenAI } from "@google/genai";
import { prompt } from "../Prompts/developerPrompts";

const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GEMINI_API_KEY
});


export const getGeminiResponse = async (userMessage: string) => {
    async function main() {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: userMessage,
            config: {
                systemInstruction: prompt,
            },
        });
        return response.text;
    }

    return await main();
}