import './globals.css';
import Header from '@/components/Header';

export const metadata = {
  title: 'StoryBit - TVMaze',
  description: 'Streaming-style dashboard using TVMaze API',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white min-h-screen">
        <Header />
        <main className="pt-20 max-w-7xl mx-auto px-4">{children}</main>
      </body>
    </html>
  );
}
