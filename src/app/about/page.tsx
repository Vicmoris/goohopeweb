import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { History, Target, BookOpen, Building } from 'lucide-react';

export default function AboutPage() {
  const libraryImage = PlaceHolderImages.find(p => p.id === 'gallery-library');
  const campusImage = PlaceHolderImages.find(p => p.id === 'hero-students-walking');

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">About GoodHope International School</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover our journey, our purpose, and the principles that guide us in providing an exceptional educational experience.
          </p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="flex items-center text-3xl font-headline font-bold text-primary mb-4">
              <History className="w-8 h-8 mr-3 text-accent" />
              Our History
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in 1998, GoodHope International School started as a small institution with a grand vision: to create a learning environment that fosters academic excellence and holistic development. From our humble beginnings with just two dozen students, we have grown into a vibrant community serving over a thousand students from diverse backgrounds.
              </p>
              <p>
                Over the years, we have continuously evolved, expanding our campus, enriching our curriculum, and embracing innovative teaching methodologies. Our journey is a testament to our unwavering commitment to quality education and the enduring spirit of our community of students, parents, and educators.
              </p>
            </div>
          </div>
          {libraryImage && (
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={libraryImage.imageUrl}
                alt={libraryImage.description}
                // width={600}
                // height={400}
                className="w-full h-auto object-cover"
                data-ai-hint={libraryImage.imageHint}
              />
            </div>
          )}
        </section>

        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center">
                  <Target className="w-8 h-8 mr-3 text-accent" />
                  <CardTitle className="text-2xl font-headline">Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Our mission is to empower students with the knowledge, skills, and ethical values required to thrive in a dynamic, globalized world. We are dedicated to nurturing critical thinkers, compassionate leaders, and lifelong learners who can contribute positively to society.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center">
                  <BookOpen className="w-8 h-8 mr-3 text-accent" />
                  <CardTitle className="text-2xl font-headline">Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  We envision a world where our graduates are at the forefront of innovation and positive change. Our vision is to be a leading international school recognized for its academic rigor, inclusive culture, and commitment to shaping a better future.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
        
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
           {campusImage && (
            <div className="rounded-lg overflow-hidden shadow-lg order-last lg:order-first">
              <Image
                src={campusImage.imageUrl}
                alt={campusImage.description}
                // width={600}
                // height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          )}
          <div>
            <h2 className="flex items-center text-3xl font-headline font-bold text-primary mb-4">
              <Building className="w-8 h-8 mr-3 text-accent" />
              Our Campus & Facilities
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Nestled in a serene, green environment, our state-of-the-art campus is designed to inspire learning and creativity. We offer modern classrooms, fully-equipped science and computer labs, a comprehensive library, dedicated spaces for arts and music, and expansive sports facilities.
              </p>
              <p>
                Our facilities provide a safe, stimulating, and supportive setting where students can explore their interests, develop their talents, and collaborate with their peers. We believe a world-class education requires a world-class environment.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
