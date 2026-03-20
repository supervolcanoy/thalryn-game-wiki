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
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark"){document.documentElement.setAttribute("data-theme",t)}else if(window.matchMedia("(prefers-color-scheme: light)").matches){document.documentElement.setAttribute("data-theme","light")}}catch(e){}})();`
          }}
        />
      </head>
      <body>
        <WikiShell docs={docs}>{children}</WikiShell>
      </body>
    </html>
  );
}
