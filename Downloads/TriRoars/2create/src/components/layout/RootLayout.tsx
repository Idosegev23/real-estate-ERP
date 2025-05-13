import { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { SkipLink } from '@/components/ui/SkipLink';

interface RootLayoutProps {
  children: ReactNode;
}

export const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main-content" className="pt-20" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </>
  );
}; 