import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pet Connect',
  description: 'Register pets and find adoptable pets locally'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <header className="site-header">
            <h1>Pet Connect</h1>
          </header>
          <main>{children}</main>
          <footer className="site-footer">© {new Date().getFullYear()} Pet Connect</footer>
        </div>
      </body>
    </html>
  );
}