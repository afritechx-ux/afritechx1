import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-canvas"
      >
        Skip to main content
      </a>
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <Chatbot />
      </div>
    </>
  );
}
