import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Calendar, Target, History } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { newsAndEvents } from '@/lib/data';

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-students-walking');

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center text-center text-white">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              priority
            />
          )}
          <div className="absolute inset-0 bg-primary/70" />
          <div className="relative z-10 p-4 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight text-shadow-lg">
              Welcome to GoodHope International School
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-shadow">
              Nurturing Minds, Shaping Futures. Join our community of learners and leaders.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-accent text-primary-foreground hover:bg-accent/90">
                <Link href="/admissions">
                  Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                <Link href="/about">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">A Tradition of Excellence</h2>
              <p className="mt-2 text-lg text-muted-foreground max-w-3xl mx-auto">
                Discover the cornerstones of our educational philosophy and what makes GoodHope a special place to learn and grow.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center transform hover:-translate-y-2 transition-transform duration-300">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 text-primary p-4 rounded-full w-fit">
                    <History className="h-8 w-8" />
                  </div>
                  <CardTitle className="mt-4 font-headline text-2xl">Our History</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Founded with a vision for quality education, our school has a rich heritage of academic achievement and community building.</p>
                </CardContent>
              </Card>
              <Card className="text-center transform hover:-translate-y-2 transition-transform duration-300">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 text-primary p-4 rounded-full w-fit">
                    <Target className="h-8 w-8" />
                  </div>
                  <CardTitle className="mt-4 font-headline text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">To empower students with the knowledge, skills, and values to thrive in a dynamic world and make a positive impact.</p>
                </CardContent>
              </Card>
              <Card className="text-center transform hover:-translate-y-2 transition-transform duration-300">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 text-primary p-4 rounded-full w-fit">
                    <BookOpen className="h-8 w-8" />
                  </div>
                  <CardTitle className="mt-4 font-headline text-2xl">Our Values</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">We are guided by principles of integrity, respect, curiosity, and a commitment to lifelong learning for all.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* News & Events Section */}
        <section id="news" className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Latest News & Events</h2>
              <p className="mt-2 text-lg text-muted-foreground">Stay up-to-date with the latest happenings at GoodHope.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsAndEvents.slice(0, 3).map((item) => {
                const itemImage = PlaceHolderImages.find(p => p.id === item.imageId);
                return (
                  <Card key={item.id} className="overflow-hidden flex flex-col">
                    {itemImage && (
                       <div className="relative h-48 w-full">
                         <Image
                          src={itemImage.imageUrl}
                          alt={itemImage.description}
                          fill
                          className="object-cover"
                        />
                       </div>
                    )}
                    <CardHeader>
                      <CardTitle>{item.title}</CardTitle>
                      <CardDescription className="flex items-center pt-2">
                        <Calendar className="h-4 w-4 mr-2" />
                        {item.date}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
