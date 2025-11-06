import { GraduationCap } from 'lucide-react';
import AdmissionsForm from './admissions-form';

export default function AdmissionsPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <header className="text-center mb-12 max-w-3xl mx-auto">
          <div className="inline-block bg-primary/10 text-primary p-4 rounded-full mb-4">
            <GraduationCap className="h-12 w-12" />
          </div>
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
            Admissions
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Begin your journey at GoodHope International School. We are excited to welcome new members to our vibrant learning community. Please fill out the form below to start your application process.
          </p>
        </header>

        <main>
          <div className="max-w-4xl mx-auto">
             <AdmissionsForm />
          </div>
        </main>
      </div>
    </div>
  );
}
