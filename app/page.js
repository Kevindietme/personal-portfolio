
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />
      <Projects />
      <Footer />
    </main>
  )
}
