'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { format } from 'date-fns';
import { CalendarIcon, Loader2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { submitApplication } from './actions';
import { useFormState } from 'react-dom';

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

export type ApplicationFormValues = z.infer<typeof formSchema>;

const initialState = {
  message: '',
  success: false,
};

export default function AdmissionsForm() {
  const { toast } = useToast();
  const [state, formAction] = useFormState(submitApplication, initialState);
  
  const form = useForm<ApplicationFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      studentFirstName: '',
      studentLastName: '',
      gradeLevel: '',
      parentFirstName: '',
      parentLastName: '',
      parentEmail: '',
      parentPhone: '',
    },
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (values: ApplicationFormValues) => {
    const result = await submitApplication(initialState, values);
    if (result.success) {
      toast({
        title: 'Application Submitted!',
        description: 'Thank you! Your application has been received. We will contact you shortly.',
      });
      form.reset();
    } else {
      toast({
        title: 'Submission Failed',
        description: result.message || 'An error occurred. Please try again.',
        variant: 'destructive',
      });
    }
  };


  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Application Form</CardTitle>
        <CardDescription>All fields are required. Please fill in the details carefully.</CardDescription>
      </CardHeader>
      <Form {...form}>
        <form action={formAction} onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-primary">Student Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="studentFirstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Student's First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="studentLastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Student's Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="studentDob"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Date of Birth</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="gradeLevel"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Applying for Grade</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a grade" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {[...Array(12)].map((_, i) => (
                            <SelectItem key={i + 1} value={`Grade ${i + 1}`}>
                              Grade {i + 1}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-primary">Parent/Guardian Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="parentFirstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Parent's First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Jane" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="parentLastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Parent's Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="parentEmail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Parent's Email</FormLabel>
                      <FormControl>
                        <Input placeholder="jane.doe@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="parentPhone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Parent's Phone</FormLabel>
                      <FormControl>
                        <Input placeholder="(123) 456-7890" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto ml-auto bg-accent text-primary-foreground hover:bg-accent/90">
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                'Submit Application'
              )}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
