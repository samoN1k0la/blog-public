import type { Metadata } from "next";
import '@/styles/styles.css';
import '@/styles/vendor.css';

export const metadata: Metadata = {
  title: "itBlog",
  description: "itBlog public frontend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
