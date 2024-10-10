import Head from "next/head";
import "./globals.css";
import AOSProvider from "./components/AOSProvider";

export const metadata = {
  title: 'Trees Construtora',
  description: 'Construímos seu investimento e a casa dos teus sonhos',
  icons: {
    icon: '/images/logo/logo.ico',
    apple: '/images/logo/logo.png',
  },
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <Head>
        <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
      </Head>
      <body>
        <AOSProvider>
          {children}
        </AOSProvider>
      </body>
    </html>
  );
}
