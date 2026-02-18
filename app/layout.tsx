import React from 'react';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vipsul Viagens | Experiências Premium',
  description: 'A premium travel agency landing page featuring glassmorphism design, bespoke styling, and responsive layout.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />
        <script src="https://cdn.tailwindcss.com"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                darkMode: 'class',
                theme: {
                  extend: {
                    colors: {
                      primary: '#ed2644',
                      'background-dark': '#221013',
                      'background-light': '#f8f6f6',
                    },
                    fontFamily: {
                      sans: ['"Plus Jakarta Sans"', 'sans-serif'],
                      display: ['"Plus Jakarta Sans"', 'sans-serif'],
                    },
                    backgroundImage: {
                      'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
                    }
                  }
                }
              }
            `,
          }}
        />
      </head>
      <body className="antialiased bg-background-light text-slate-900 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}