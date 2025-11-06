'use server';

import { z } from 'zod';

const formSchema = z.object({
  studentFirstName: z.string().min(2, 'First name must be at least 2 characters.'),
  studentLastName: z.string().min(2, 'Last name must be at least 2 characters.'),
  studentDob: z.date({ required_error: 'Date of birth is required.' }),
  gradeLevel: z.string({ required_error: 'Please select a grade level.' }),
  parentFirstName: z.string().min(2, 'Parent first name is required.'),
  parentLastName: z.string().min(2, 'Parent last name is required.'),
  parentEmail: z.string().email('Please enter a valid email address.'),
  parentPhone: z.string().min(10, 'Please enter a valid phone number.'),
});

type ApplicationFormValues = z.infer<typeof formSchema>;

export async function submitApplication(
  prevState: { message: string, success: boolean },
  formData: ApplicationFormValues
) {
  try {
    const parsedData = formSchema.parse(formData);

    // In a real application, you would save this data to a database.
    console.log('New application received:', parsedData);

    // Simulate a delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return { message: 'Application submitted successfully!', success: true };
  } catch (e) {
    console.error('Application submission error:', e);
    if (e instanceof z.ZodError) {
      return { message: 'Validation failed. Please check your input.', success: false };
    }
    return { message: 'An unexpected error occurred. Please try again later.', success: false };
  }
}
