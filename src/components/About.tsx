import React from 'react'
import Image from 'next/image'

interface About {
  title: string;
  description: string[];
}

const about: About = {
  title: "Nuestra Historia",
  description: [
    "Con más de 10 años de experiencia en el sector del fitness, nuestro gimnasio se ha convertido en un referente de calidad y profesionalismo. Nuestro equipo de entrenadores certificados está comprometido con tu éxito y bienestar.",
    "Ofrecemos un espacio moderno y equipado con la última tecnología en máquinas y equipamiento. Nuestro ambiente motivador y nuestra comunidad activa te ayudarán a alcanzar tus objetivos fitness de manera efectiva y segura."
  ]
}

const About = () => {
  return (
		<section id="about" className="bg-white py-20">
			<div className="max-w-6xl mx-auto">
				<div className="flex flex-col md:flex-row items-center gap-10">
					<div className="md:w-1/2">
						<Image
							src="https://res.cloudinary.com/dw4ecbwo9/image/upload/v1747711187/image5_qlzpy6.webp"
							alt="Gym photo"
							height={684}
							width={684}
							className='aspect-square object-cover'
							priority={false}
						/>
					</div>
					<div className="px-5 md:px-0 md:w-1/2">
						<h3 className="text-4xl mb-8 font-bold">{about.title}</h3>
						{about.description.map((desc, index) => (
							<p className={`text-lg text-pretty ${index == 0 && "mb-4"}`} key={index}>
								{desc}
							</p>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default About