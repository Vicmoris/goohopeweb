'use server';

import { generateImageCaption } from '@/ai/flows/generate-image-captions';
import { z } from 'zod';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];

const imageSchema = z.object({
  image: z
    .instanceof(File, { message: 'Image is required.' })
    .refine((file) => file.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file.type),
      '.jpg, .jpeg, .png, .webp and .gif files are accepted.'
    ),
});

export async function generateCaption(prevState: any, formData: FormData) {
  const validatedFields = imageSchema.safeParse({
    image: formData.get('image'),
  });

  if (!validatedFields.success) {
    return {
      caption: '',
      error: validatedFields.error.flatten().fieldErrors.image?.[0] || 'Invalid image file.',
    };
  }

  const { image } = validatedFields.data;

  try {
    const buffer = await image.arrayBuffer();
    const base64String = Buffer.from(buffer).toString('base64');
    const imageDataUri = `data:${image.type};base64,${base64String}`;

    const result = await generateImageCaption({ imageDataUri });

    if (!result.caption) {
      return { caption: '', error: 'Failed to generate caption. The AI model might be unavailable.' };
    }

    return { caption: result.caption, error: '' };
  } catch (error) {
    console.error('Error generating caption:', error);
    return { caption: '', error: 'An unexpected error occurred on the server. Please try again.' };
  }
}
