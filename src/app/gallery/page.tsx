import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import ImageCaptioner from './image-captioner';
import { GalleryHorizontal } from 'lucide-react';

export default function GalleryPage() {
  const galleryImages = PlaceHolderImages.filter(p => p.id.startsWith('gallery-'));

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <header className="text-center mb-12 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
            School Gallery
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            A glimpse into the vibrant life at GoodHope International School.
          </p>
        </header>

        <main>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {galleryImages.map((image) => (
              <Card key={image.id} className="overflow-hidden group">
                <div className="relative h-60 w-full">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={image.imageHint}
                  />
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">{image.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <section>
             <header className="text-center mb-12 max-w-3xl mx-auto">
                <div className="inline-block bg-primary/10 text-primary p-4 rounded-full mb-4">
                  <GalleryHorizontal className="h-12 w-12" />
                </div>
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
                  AI Image Captioner
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Upload an image from a school event and let our AI generate a creative caption for you.
                </p>
             </header>
             <div className="max-w-3xl mx-auto">
                <ImageCaptioner />
             </div>
          </section>
        </main>
      </div>
    </div>
  );
}
