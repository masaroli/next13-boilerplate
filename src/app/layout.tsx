import React from 'react';
import '../styles/globals.scss';
import MuiSetup from './MuiSetup';

export const metadata = {
  title: 'Loviscek Inmobiliaria',
  description: 'El mejor lugar para encontrar tu propiedad',
  keywords: 'real state',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MuiSetup>{children}</MuiSetup>
      </body>
    </html>
  );
}
