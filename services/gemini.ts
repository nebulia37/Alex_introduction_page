
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { SYSTEM_PROMPT } from "../constants";

export class GeminiService {
  private ai: GoogleGenAI;
  private chat: Chat;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
    this.chat = this.ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.7,
        topP: 0.9,
      },
    });
  }

  async sendMessage(message: string): Promise<string> {
    try {
      const result: GenerateContentResponse = await this.chat.sendMessage({ message });
      return result.text || "I'm sorry, I couldn't generate a response.";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "I encountered an error while trying to think. Please try again later.";
    }
  }

  async *sendMessageStream(message: string) {
    try {
      const response = await this.chat.sendMessageStream({ message });
      for await (const chunk of response) {
        const c = chunk as GenerateContentResponse;
        yield c.text || "";
      }
    } catch (error) {
      console.error("Gemini Streaming Error:", error);
      yield " [Error occurred during streaming] ";
    }
  }
}

export const geminiService = new GeminiService();
