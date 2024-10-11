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
  openGraph: {
    title: 'Trees Construtora',
    description: 'Construímos seus investimentos e seus sonhos.',
    url: 'https://treeconstrutora.vercel.app', // URL da página
    images: [
      {
        url: '/images/logo/logo.webp', // URL da imagem
        width: 673, // Largura da imagem
        height: 260, // Altura da imagem
        alt: 'Logo Trees Construtora',
      },
    ],
  }
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <Head>
        <meta name="description" content="Constuímos investimenos e seus sonhos." />
        <meta property="og:title" content="Trees Construtora" />
        <meta property="og:description" content="Uma descrição para Open Graph." />
        <meta property="og:image" content="/images/logo/logo.webp" />
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
