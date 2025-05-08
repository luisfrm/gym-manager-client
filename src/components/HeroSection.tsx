import Image from "next/image";
import Link from "next/link";

const HeroSection: React.FC = () => {
  return (
		<section id="home" className="relative h-[820px] md:h-dvh w-full flex items-center justify-center">
			<Image
				src="https://res.cloudinary.com/dw4ecbwo9/image/upload/v1746742381/UFC_GC_022-1_a3v2s3.jpg"
				alt="Barbershop interior"
				priority
				className="absolute z-0 object-cover hidden md:block"
				fill
				sizes="100vw"
			/>
			<Image
				src="https://res.cloudinary.com/dw4ecbwo9/image/upload/v1746740463/equipment_6_bv0qfv_c_fill_w_513_h_684_ar_34_g_auto_vaknnf.jpg"
				alt="Barbershop interior mobile"
				priority
				className="absolute z-0 object-fill md:hidden"
				fill
				sizes="100vw"
			/>
			<div className="z-10 relative flex flex-col items-center text-center bg-[rgba(0,0,0,0.8)] p-8 rounded-lg">
				<h2 className="text-5xl md:text-7xl font-bold mb-4 text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] text-balance">
					Transforma tu Cuerpo, Transforma tu Vida
				</h2>
				<p className="text-xl md:text-2xl text-white mb-8 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] text-balance">
					Equipamiento de última generación y entrenadores expertos
				</p>
				<Link href="https://api.whatsapp.com/send?phone=000000000000000" target="_blank">
					<button className="bg-gym-banner text-white px-4 py-2 rounded-md hover:bg-gym-highlight transition-all duration-300 cursor-pointer">
						Contáctanos
					</button>
				</Link>
			</div>
		</section>
	);
};

export default HeroSection;