import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { primaryCurriculum, secondaryCurriculum } from '@/lib/data';
import { BookMarked } from 'lucide-react';

export default function CurriculumPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <header className="text-center mb-12 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
            Our Curriculum
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore our comprehensive academic programs, designed to foster intellectual curiosity and prepare students for a successful future.
          </p>
        </header>

        <main>
          <Tabs defaultValue="primary" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:w-1/2 mx-auto">
              <TabsTrigger value="primary">Primary School</TabsTrigger>
              <TabsTrigger value="secondary">Secondary School</TabsTrigger>
            </TabsList>
            
            <TabsContent value="primary" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {primaryCurriculum.map((item, index) => (
                  <Card key={index} className="flex flex-col">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <BookMarked className="w-6 h-6 text-accent" />
                        <span>{item.subject}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="secondary" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {secondaryCurriculum.map((item, index) => (
                  <Card key={index} className="flex flex-col">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <BookMarked className="w-6 h-6 text-accent" />
                        <span>{item.subject}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}
