'use server';
/**
 * @fileOverview An AI assistant that suggests thoughtful and personalized messages for a wedding wishes wall.
 *
 * - aiGreetingAssistant - A function that handles the greeting message generation process.
 * - AIGreetingAssistantInput - The input type for the aiGreetingAssistant function.
 * - AIGreetingAssistantOutput - The return type for the aiGreetingAssistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIGreetingAssistantInputSchema = z.object({
  keywordsOrSentiments: z
    .string()
    .describe(
      'Keywords or sentiments to guide the greeting message generation (e.g., "love, happiness, future," or "funny, heartwarming").'
    )
});
export type AIGreetingAssistantInput = z.infer<
  typeof AIGreetingAssistantInputSchema
>;

const AIGreetingAssistantOutputSchema = z.object({
  suggestedMessages: z
    .array(z.string())
    .describe('An array of thoughtful and personalized greeting messages.')
});
export type AIGreetingAssistantOutput = z.infer<
  typeof AIGreetingAssistantOutputSchema
>;

export async function aiGreetingAssistant(
  input: AIGreetingAssistantInput
): Promise<AIGreetingAssistantOutput> {
  return aiGreetingAssistantFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiGreetingAssistantPrompt',
  input: {schema: AIGreetingAssistantInputSchema},
  output: {schema: AIGreetingAssistantOutputSchema},
  prompt: `You are an AI assistant specialized in crafting heartfelt and personalized wedding greeting messages for a wishes wall.
The user will provide keywords or sentiments, and your task is to generate several unique, thoughtful, and appropriate messages based on those inputs.
Ensure the messages are warm, congratulatory, and suitable for a wedding context.
Provide at least 3 distinct messages.

Keywords/Sentiments: {{{keywordsOrSentiments}}}`
});

const aiGreetingAssistantFlow = ai.defineFlow(
  {
    name: 'aiGreetingAssistantFlow',
    inputSchema: AIGreetingAssistantInputSchema,
    outputSchema: AIGreetingAssistantOutputSchema
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
