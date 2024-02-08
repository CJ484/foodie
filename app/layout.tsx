import type { Metadata } from "next";
import Head from "next/head";
import styles from './assets/styles/pages/globals.module.scss';

export const metadata: Metadata = {
  title: "Foodie - The Digital Food Search Engine",
  description: "Foodie is a digital food search engine that helps you find the best food for your next meal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/icon.ico" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className={styles.body}>
        {children}
        </body>
    </html>
  );
}
