import type { Metadata } from "next";
import "./globals.css";
import WikiShell from "@/components/wiki-shell";
import { getAllWikiDocs } from "@/lib/wiki";

export const metadata: Metadata = {
  title: "Thalryn Wiki",
  description: "Community-style game wiki for Thalryn."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const docs = getAllWikiDocs().map((doc) => ({
    slug: doc.slug,
    title: doc.title,
    category: doc.category
  }));

  return (
    <html lang="en">
      <body>
        <WikiShell docs={docs}>{children}</WikiShell>
      </body>
    </html>
  );
}
