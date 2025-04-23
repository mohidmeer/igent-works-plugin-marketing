import "./globals.css";

export const metadata = {
  title: "Igent Works | AI-Powered Blog Auto Poster for WordPress",
  description:
    "Boost your WordPress site's content effortlessly. Igent Works auto-generates and schedules blog posts using AI — complete with images — and publishes them for you.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}
