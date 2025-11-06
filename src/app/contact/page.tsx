import { MapPin, Mail, Phone } from 'lucide-react';
import ContactForm from './contact-form';

export default function ContactPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <header className="text-center mb-12 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
            Get In Touch
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            We're here to help and answer any question you might have. We look forward to hearing from you.
          </p>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="p-6 rounded-lg bg-card border">
              <h2 className="text-2xl font-headline font-bold mb-4">Contact Information</h2>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Our Address</h3>
                    <p>123 Education Lane, Knowledge City, 12345</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Email Us</h3>
                    <a href="mailto:hello@goodhope.com" className="hover:underline text-primary font-medium">hello@goodhope.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Call Us</h3>
                    <p>+1 (234) 567-890</p>
                  </div>
                </div>
              </div>
            </div>
             <div className="p-6 rounded-lg bg-card border">
              <h2 className="text-2xl font-headline font-bold mb-4">Office Hours</h2>
              <div className="space-y-2 text-muted-foreground">
                <p><span className="font-semibold text-foreground">Monday - Friday:</span> 8:00 AM - 4:00 PM</p>
                <p><span className="font-semibold text-foreground">Saturday - Sunday:</span> Closed</p>
              </div>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </main>
      </div>
    </div>
  );
}
