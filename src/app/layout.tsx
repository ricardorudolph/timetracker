import "./globals.css";

export const metadata = {
  title: "Tick Tack Track",
  description: "By RWR",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
