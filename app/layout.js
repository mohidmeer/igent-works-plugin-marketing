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
        <footer className="text-center text-sm text-gray-500 py-6 mt-12 border-t">
  <p>&copy; 2025 Igent Holdings LLC. All rights reserved.</p>
  {/* <p className="mt-1">
    This site is operated by Igent Holdings LLC and its affiliate Igent Works.
  </p> */}
  <div className="mt-2 space-x-4">
    <a href="/privacy-policy" className=" hover:underline">
      Privacy Policy
    </a>
    <a href="/terms-of-service" className=" hover:underline">
      Terms of Service
    </a>
  </div>
</footer>
      </body>
    </html>
  );
}
