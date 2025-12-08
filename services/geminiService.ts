import { GoogleGenAI, Type } from "@google/genai";
import { AssessmentResult } from "../types";

const apiKey = process.env.API_KEY || '';

const ai = new GoogleGenAI({ apiKey });

export const assessEnglishLevel = async (text: string): Promise<AssessmentResult> => {
  if (!apiKey) {
    // Fallback simulation if no API key is present during demo
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          cefrLevel: "B1 - Intermediário",
          feedback: "Você tem um bom vocabulário básico, mas pode melhorar a estrutura de frases complexas. Continue praticando!",
          recommendedCourse: "Conversation Focus"
        });
      }, 1500);
    });
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Analyze the following English text sample written by a student. 
      Determine their likely CEFR level (A1, A2, B1, B2, C1, C2). 
      Provide constructive feedback in Portuguese. 
      Recommend one of these courses: 'Inglês para Negócios', 'Conversação', 'Inglês Geral', or 'Preparatório para Exames'.
      
      Text sample: "${text}"`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            cefrLevel: { type: Type.STRING },
            feedback: { type: Type.STRING },
            recommendedCourse: { type: Type.STRING }
          },
          required: ["cefrLevel", "feedback", "recommendedCourse"]
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as AssessmentResult;
    }
    throw new Error("No response from AI");
  } catch (error) {
    console.error("Gemini Error:", error);
    // Fallback on error
    return {
      cefrLevel: "Em análise",
      feedback: "Houve um erro técnico ao analisar. Entre em contato diretamente para uma avaliação gratuita.",
      recommendedCourse: "Avaliação Gratuita"
    };
  }
};