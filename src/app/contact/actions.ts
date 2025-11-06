'use server';

import { z } from 'zod';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  subject: z.string({ required_error: 'Please select a subject.' }),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

type InquiryFormValues = z.infer<typeof formSchema>;

export async function submitInquiry(
  prevState: { message: string, success: boolean },
  formData: InquiryFormValues
) {
  try {
    const parsedData = formSchema.parse(formData);

    // In a real application, you would send an email or save this to a database.
    console.log('New inquiry received:', parsedData);

    // Simulate a delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return { message: 'Inquiry submitted successfully!', success: true };
  } catch (e) {
    console.error('Inquiry submission error:', e);
    if (e instanceof z.ZodError) {
      return { message: 'Validation failed. Please check your input.', success: false };
    }
    return { message: 'An unexpected error occurred. Please try again later.', success: false };
  }
}
