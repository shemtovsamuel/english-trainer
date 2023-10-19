import OpenAI, { ClientOptions } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
} as ClientOptions);

async function generateFrenchPhrase(): Promise<string> {
  const prompt =
    "Donne-moi une phrase en français de niveau débutant à intermédiaire pour un jeu de traduction.";
  const response = await openai.completions.create({
    model: "gpt-3.5-turbo",
    prompt: prompt,
  });

  return response.choices[0].text.trim();
}
