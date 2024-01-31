import type { Metadata } from "next";
import styles from './assets/styles/pages/globals.module.scss';

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
