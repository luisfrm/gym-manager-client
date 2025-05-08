import React from 'react'

import { Dumbbell, BicepsFlexed, Award } from 'lucide-react'

interface Service {
  name: string
  price: string
  description: string
  icon: React.ReactNode
}

const services: Service[] = [
  {
    name: "Entrenamiento Personal",
    price: "25€",
    description: "Sesiones personalizadas con entrenadores certificados para alcanzar tus objetivos específicos de fitness y bienestar.",
    icon: <Dumbbell className="h-6 w-6" />
  },
  {
    name: "Clases Grupales",
    price: "15€",
    description: "Variedad de clases como HIIT, Yoga, Spinning y más, diseñadas para todos los niveles de condición física.",
    icon: <BicepsFlexed className="h-6 w-6" />
  },
  {
    name: "Plan Nutricional",
    price: "10€",
    description: "Asesoramiento nutricional personalizado para complementar tu entrenamiento y maximizar tus resultados.",
    icon: <Award className="h-6 w-6" />
  }
]

const Services = () => {
  return (
		<section id='services' className="w-full bg-gym-banner py-28">
			<div className="max-w-6xl mx-auto text-center">
				<h3 className="text-4xl text-white mb-12 font-bold">Nuestros Servicios</h3>
				<div className="grid grid-cols-1 lg:grid-cols-3 justify-between items-center gap-10 md:gap-0">
					{services.map((serv, index) => (
						<div className="flex flex-col gap-4 justify-center items-center" key={index}>
							<div className="h-12 w-12 bg-white rounded-full flex justify-center items-center">{serv.icon}</div>
							<h3 className="text-3xl text-white font-bold">{serv.name}</h3>
							<p className='text-white text-sm'>{serv.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Services
