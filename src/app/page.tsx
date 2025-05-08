import About from "@/components/About";
import Contact from "@/components/Contact";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";

export default function Home() {
  return (
		<>
			<main className="min-h-dvh">
				<HeroSection />
				<Services />
				<About />
				<Contact />
			</main>
			<footer className="bg-gym-banner text-white py-12">
				<div className="container mx-auto px-4 text-center">
					<p className="text-sm font-medium">&copy; 2024. Todos los derechos reservados.</p>
				</div>
			</footer>
		</>
	);
}
