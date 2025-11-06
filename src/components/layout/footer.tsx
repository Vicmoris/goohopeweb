import Link from 'next/link';
import { Logo } from '@/components/icons';

export default function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center gap-2">
              <Logo className="h-8 w-8 text-primary" />
              <span className="self-center text-2xl font-headline font-semibold whitespace-nowrap text-primary">
                GoodHope Hub
              </span>
            </Link>
            <p className="mt-2 text-muted-foreground max-w-xs">
              Nurturing Minds, Shaping Futures since 1998.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-foreground uppercase">Quick Links</h2>
              <ul className="text-muted-foreground font-medium">
                <li className="mb-4">
                  <Link href="/about" className="hover:underline">About</Link>
                </li>
                <li className="mb-4">
                  <Link href="/admissions" className="hover:underline">Admissions</Link>
                </li>
                 <li className="mb-4">
                  <Link href="/contact" className="hover:underline">Contact</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-foreground uppercase">Resources</h2>
              <ul className="text-muted-foreground font-medium">
                <li>
                  <Link href="/about" className="hover:underline">About</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-foreground uppercase">Legal</h2>
              <ul className="text-muted-foreground font-medium">
                <li className="mb-4">
                  <Link href="#" className="hover:underline">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">Terms & Conditions</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-muted-foreground sm:text-center">
            © {new Date().getFullYear()}{' '}
            <Link href="/" className="hover:underline">
              GoodHope International School™
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
