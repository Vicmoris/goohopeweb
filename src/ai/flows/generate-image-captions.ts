'use server';

/**
 * @fileOverview A flow that generates captions for images using AI.
 *
 * - generateImageCaption - A function that generates a caption for an image.
 * - GenerateImageCaptionInput - The input type for the generateImageCaption function.
 * - GenerateImageCaptionOutput - The return type for the generateImageCaption function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateImageCaptionInputSchema = z.object({
  imageDataUri: z
    .string()
    .describe(
      'A photo to caption, as a data URI that must include a MIME type and use Base64 encoding. Expected format: \'data:<mimetype>;base64,<encoded_data>\'.' + 
      'The supported image types are: image/jpeg, image/png, image/gif, image/webp.'
    ),
});
export type GenerateImageCaptionInput = z.infer<typeof GenerateImageCaptionInputSchema>;

const GenerateImageCaptionOutputSchema = z.object({
  caption: z.string().describe('A short, descriptive caption for the image.'),
});
export type GenerateImageCaptionOutput = z.infer<typeof GenerateImageCaptionOutputSchema>;

export async function generateImageCaption(input: GenerateImageCaptionInput): Promise<GenerateImageCaptionOutput> {
  return generateImageCaptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateImageCaptionPrompt',
  input: {schema: GenerateImageCaptionInputSchema},
  output: {schema: GenerateImageCaptionOutputSchema},
  prompt: `You are an AI assistant that specializes in creating engaging and informative captions for images.

  Given the following image, generate a concise and descriptive caption that captures the essence of the image.
  The caption should be no more than 2-3 sentences.

  Image: {{media url=imageDataUri}}
  `,
});

const generateImageCaptionFlow = ai.defineFlow(
  {
    name: 'generateImageCaptionFlow',
    inputSchema: GenerateImageCaptionInputSchema,
    outputSchema: GenerateImageCaptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
