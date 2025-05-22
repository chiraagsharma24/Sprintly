import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { shadesOfPurple } from "@clerk/themes";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sprintly",
  description: "Project Management app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
    appearance={{
      baseTheme:shadesOfPurple,
      variables: {
          colorPrimary: "#3b82f6",
          colorBackground: "#1a202c",
          colorInputBackground: "#2D3748",
          colorInputText: "#F3F4F6",
        },
        elements: {
          formButtonPrimary: "bg-purple-600 hover:bg-purple-700 text-white",
          card: "bg-gray-800",
          headerTitle: "text-blue-400",
          headerSubtitle: "text-gray-400",
        },
    }}
    >
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased animated-dotted-background`}
       suppressHydrationWarning>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
          > 
          <Header/>
          {/* Header */}
         <main className="min-h-screen"> {children} </main>
         <Toaster richColors/>
          {/* Footer */}
          <footer className="py-12 bg-gray-900">
            <div className="container text-center text-gray-200 mx-auto px-4">
              Developed and designed by <span className="font-semibold">Chirag Sharma</span>
            </div>
          </footer>
          </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
