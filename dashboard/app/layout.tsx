import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { Sidebar } from "@/components/Sidebar";
import TopNav from "@/components/TopNav";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cloud Security Landing Zone",
  description: "SecureBase dashboard for cloud security and guardrail management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} theme-transition bg-[color:var(--bg)] text-[color:var(--text)] antialiased`}>
        <ThemeProvider>
          <div className="min-h-screen bg-[color:var(--bg)]">
            <TopNav />
            <div className="flex min-h-[calc(100vh-3.5rem)]">
              <Sidebar />
              <main className="flex-1 overflow-y-auto px-4 py-4 sm:px-6 lg:px-8">
                {children}
              </main>
            </div>
          </div>
          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
