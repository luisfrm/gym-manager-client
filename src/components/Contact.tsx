import { Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';


interface Contact {
  title: string;
  description: string;
  icon: React.ReactNode;
  url?: string;
}

const contact: Contact[] = [
	{
		title: "Dirección",
		description: "123 Lorem Ipsum Street, Dolor Sit",
		icon: <MapPin className="h-12 w-12 text-primary" />,
    url: "https://maps.app.goo.gl/wMSAPhbnzKqrcQhY8"
	},
  {
    title: "Teléfono",
    description: "+1234567890",
    icon: <Phone className="h-12 w-12 text-primary" />,
    url: "https://api.whatsapp.com/send?phone=584246248690"
  },
  {
    title: "Correo",
    description: "lorem@ipsum.com",
    icon: <Mail className="h-12 w-12 text-primary" />,
    url: "mailto:info@barbershop.com"
  }
];

const Contact = () => {
	return (
		<section id="contact" className="w-full py-28 bg-gym-accent">
			<div className="max-w-6xl mx-auto text-center">
				<h3 className="text-4xl mb-12 font-bold">Contáctanos</h3>
				<div className="grid grid-cols-1 lg:grid-cols-3 justify-center gap-12 md:gap-8">
					{contact.map((item, index) => (
						<div className="flex flex-col gap-4 items-center" key={index}>
							{item.icon}
							<h4 className='font-semibold text-4xl'>{item.title}</h4>
							{item.url ? <Link className='text-lg' target='_blank' href={item.url}>{item.description}</Link> : <p>{item.description}</p>}
						</div>
					))}
				</div>
        <Link href="https://api.whatsapp.com/send?phone=584246248690">
					<button className="mt-6 w-[90%] lg:w-max bg-gym-banner text-white px-4 py-2 rounded-md hover:bg-gym-highlight transition-all duration-300 cursor-pointer">
						Contactanos
					</button>
				</Link>
			</div>
		</section>
	);
};

export default Contact
