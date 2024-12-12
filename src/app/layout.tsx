import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Ragworks.AI",
  icon: [
    { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    { rel: "icon", type: "image/png", href: "/favicon-32x32.png" },
    { rel: "icon", type: "image/png", href: "/favicon-16x16.png" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        {/* Navigation */}
        <nav className="flex justify-between items-center bg-gray-800 text-white px-6 py-4">
          <div className="text-lg font-bold">Ragworks.AI</div>
          <ul className="flex gap-4">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/test" className="hover:underline">
                Test
              </a>
            </li>
          </ul>
        </nav>

        {/* Main Content */}
        <main className="flex flex-col items-center justify-center flex-grow p-8 text-center bg-gray-100">
          {children}
        </main>

        {/* Footer */}
        <footer className="flex justify-center items-center bg-gray-800 text-white py-4">
          <p>&copy; 2024 Ragworks.AI All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
