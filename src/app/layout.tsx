import '../styles/layout.css';
import '../styles/navbar.css';
import Navbar from '../components/Navbar';
import ThemeToggle from '../components/ThemeToggle';
import { ReactNode } from 'react';

export const metadata = {
  title: 'My Portfolio',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <ThemeToggle />
        <main>{children}</main>
      </body>
    </html>
  );
}
