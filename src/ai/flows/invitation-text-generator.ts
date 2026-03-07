'use server';
/**
 * @fileOverview A Genkit flow for generating creative and heartfelt wedding invitation text.
 *
 * - generateInvitationText - A function that handles the invitation text generation process.
 * - InvitationTextGeneratorInput - The input type for the generateInvitationText function.
 * - InvitationTextGeneratorOutput - The return type for the generateInvitationText function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const InvitationTextGeneratorInputSchema = z.object({
  coupleNames: z
    .string()
    .describe('The names of the couple getting married (e.g., "Groom and Sakshi").'),
  weddingDate: z.string().describe('The date of the wedding (e.g., "October 26, 2026").'),
  weddingTime: z.string().describe('The time of the wedding (e.g., "5:00 PM").'),
  venueName: z.string().describe('The name of the wedding venue (e.g., "The Grand Ballroom").'),
  venueAddress: z
    .string()
    .describe('The full address of the wedding venue (e.g., "123 Main St, Anytown, USA").'),
  coupleStory: z
    .string()
    .optional()
    .describe('A brief story of the couple or how they met, to add a personal touch.'),
  weddingTheme: z
    .string()
    .optional()
    .describe('The overall theme or style of the wedding (e.g., "Rustic Elegance").'),
  tone: z
    .string()
    .optional()
    .describe('The desired tone for the invitation (e.g., "romantic", "joyful", "formal", "casual").'),
});
export type InvitationTextGeneratorInput = z.infer<typeof InvitationTextGeneratorInputSchema>;

const InvitationTextGeneratorOutputSchema = z
  .string()
  .describe('The generated wedding invitation text.');
export type InvitationTextGeneratorOutput = z.infer<typeof InvitationTextGeneratorOutputSchema>;

export async function generateInvitationText(
  input: InvitationTextGeneratorInput
): Promise<InvitationTextGeneratorOutput> {
  return generateInvitationTextFlow(input);
}

const generateInvitationTextPrompt = ai.definePrompt({
  name: 'generateInvitationTextPrompt',
  input: {schema: InvitationTextGeneratorInputSchema},
  output: {schema: InvitationTextGeneratorOutputSchema},
  prompt: `You are a professional wedding invitation copywriter. Your task is to craft a creative, heartfelt, and elegant wedding invitation text.

The invitation should be for the following couple and event details:
Couple: {{{coupleNames}}}
Date: {{{weddingDate}}}
Time: {{{weddingTime}}}
Venue: {{{venueName}}}, {{{venueAddress}}}
{{#if coupleStory}}
Our Story/How We Met: {{{coupleStory}}}
{{/if}}
{{#if weddingTheme}}
Wedding Theme: {{{weddingTheme}}}
{{/if}}
{{#if tone}}
Desired Tone: {{{tone}}}
{{/if}}

Please create a beautiful and engaging invitation text that includes all the essential details and reflects the couple's personality and the wedding theme. Ensure the language is warm and inviting. Focus on creativity and emotional appeal, making sure the generated text is ready to be used on an actual wedding invitation card.`,
});

const generateInvitationTextFlow = ai.defineFlow(
  {
    name: 'generateInvitationTextFlow',
    inputSchema: InvitationTextGeneratorInputSchema,
    outputSchema: InvitationTextGeneratorOutputSchema,
  },
  async input => {
    const {output} = await generateInvitationTextPrompt(input);
    return output!;
  }
);
