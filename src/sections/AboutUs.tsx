import SectionTitle from '../components/SectionTitle';

export default function AboutUs() {
  return (
    <section id="quienes-somos" className="my-8">
      <SectionTitle title="Nosotros" />
      <p className="mb-4">
        Somos una empresa apasionada por llevar diversión y alegría a cada evento. Nuestro objetivo es transformar momentos cotidianos en experiencias inolvidables, donde la emoción y la seguridad son nuestra prioridad. Nos especializamos en ofrecer juegos y actividades que cautivan tanto a los más pequeños como a los grandes, creando recuerdos que perduran.
      </p>
      <p className="mb-4">
        Con un enfoque en la calidad del servicio y una atención personalizada, garantizamos que cada detalle esté pensado para superar las expectativas de nuestros clientes. 
      </p>
      <p>
        ¡Seguinos en{' '}
        <a
          href="https://www.instagram.com/funny.gameschaco"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-pastel-blue-800 hover:text-pastel-blue-600 hover:underline transition-colors duration-300"
        >
          Instagram
        </a>{' '}
        para descubrir más sobre cómo podemos hacer de tu próximo evento una celebración única y llena de diversión!
      </p>
    </section>
  );
}