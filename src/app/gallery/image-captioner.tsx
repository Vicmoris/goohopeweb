'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useFormState } from 'react-dom';
import { Upload, Sparkles, Loader2, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { generateCaption } from './actions';
import { useToast } from '@/hooks/use-toast';

const initialState = {
  caption: '',
  error: '',
};

export default function ImageCaptioner() {
  const [state, formAction] = useFormState(generateCaption, initialState);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
        setImagePreview(null);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsPending(true);
    const formData = new FormData(event.currentTarget);
    const result = await generateCaption(initialState, formData);
    setIsPending(false);

    if (result.error) {
        toast({
            title: 'Caption Generation Failed',
            description: result.error,
            variant: 'destructive',
        });
    } else if (result.caption) {
         toast({
            title: 'Caption Generated!',
            description: 'Your new caption is ready.',
        });
    }
  };

  return (
    <Card>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="image-upload" className="font-medium">
              Upload Image
            </label>
            <Input
              id="image-upload"
              name="image"
              type="file"
              accept="image/png, image/jpeg, image/webp, image/gif"
              onChange={handleFileChange}
              required
              className="file:text-primary file:font-semibold"
            />
          </div>

          {imagePreview && (
            <div className="mt-4 flex justify-center">
              <div className="relative w-full max-w-md aspect-video rounded-md overflow-hidden border">
                <Image src={imagePreview} alt="Image preview" layout="fill" objectFit="contain" />
              </div>
            </div>
          )}

          <Button type="submit" className="w-full bg-accent text-primary-foreground hover:bg-accent/90" disabled={!imagePreview || isPending}>
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-4 w-4" />
                Generate Caption
              </>
            )}
          </Button>
        </form>

        {(state?.caption || state?.error) && (
          <div className="mt-6">
            <h3 className="font-semibold text-lg mb-2">Result:</h3>
            {state.caption && !state.error && (
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-4">
                  <p className="text-foreground">{state.caption}</p>
                </CardContent>
              </Card>
            )}
          </div>
        )}
         {!imagePreview && !state.caption && !state.error && (
            <div className="mt-6 text-center text-muted-foreground flex flex-col items-center justify-center space-y-4 border-2 border-dashed rounded-lg p-8">
                <ImageIcon className="w-12 h-12" />
                <p>Upload an image and we'll create a caption for it here.</p>
            </div>
         )}
      </CardContent>
    </Card>
  );
}
