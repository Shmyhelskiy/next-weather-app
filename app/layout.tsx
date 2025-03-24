import Navbar from "./components/ui/Navbar";
import "./globals.css";
import { getInitialThemeScript } from "./utils/getThemeScript";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: getInitialThemeScript() }} />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
