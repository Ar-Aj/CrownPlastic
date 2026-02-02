import Header from './Header';
import Footer from './Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* No global padding - each page's first section handles navbar offset internally */}
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
