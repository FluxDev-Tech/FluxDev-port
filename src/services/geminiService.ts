import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, SKILLS, PROJECTS, EXPERIENCES } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

const SYSTEM_PROMPT = `
You are an AI assistant for ${PERSONAL_INFO.name}'s portfolio website. 
Your goal is to answer questions about FluxDev-Tech (the developer) in a professional, friendly, and concise manner.

Here is the information you have about FluxDev-Tech:
- Name: ${PERSONAL_INFO.name}
- Title: ${PERSONAL_INFO.title}
- Bio: ${PERSONAL_INFO.bio}
- Availability: ${PERSONAL_INFO.availability}
- Skills: ${SKILLS.map(s => s.name).join(", ")}
- Projects: ${PROJECTS.map(p => `${p.title}: ${p.description}`).join("; ")}
- Experience: ${EXPERIENCES.map(e => `${e.role} at ${e.company} (${e.period})`).join("; ")}

Guidelines:
1. Be helpful and polite.
2. If you don't know the answer, politely say you don't have that information and suggest contacting Alex via the contact form.
3. Keep responses relatively short (under 3 sentences if possible).
4. Use a tone that reflects a "modern, professional, and futuristic" portfolio.
`;

export async function getChatResponse(message: string, history: { role: 'user' | 'model', parts: [{ text: string }] }[]) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history,
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.7,
        topP: 0.95,
      },
    });

    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting right now. Please try again later.";
  }
}
