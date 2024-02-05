import type { Metadata } from "next";
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
      <body className={styles.body}>
        {children}
        </body>
    </html>
  );
}
