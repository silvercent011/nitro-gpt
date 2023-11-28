import OpenAI from "openai";

export const OpenAiClient = new OpenAI({
  apiKey: process.env.OPEN_AI_API_KEY || ``,
});
