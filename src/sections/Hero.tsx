import SectionTitle from '../components/SectionTitle';
import image1 from '../assets/images/Designer.jpeg'
import image2 from '../assets/images/Designer (1).jpeg'
import image3 from '../assets/images/Designer (2).jpeg'
import image4 from '../assets/images/Designer (3).jpeg'

export default function Hero() {
  return (
    <section id="inicio" className="my-8">
      <SectionTitle title="BIENVENIDOS A FUNNY GAMES" />
      <p className="mb-4">Ofrecemos una amplia variedad de juegos inflables y de entretenimiento para hacer de tu evento una experiencia inolvidable.</p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <img src={image1} alt="Castillo inflable" className="rounded-lg shadow-md" />
            <img src={image2} alt="Metegol" className="rounded-lg shadow-md" />
            <img src={image3} alt="Mesa de tejo" className="rounded-lg shadow-md" />
            <img src={image4} alt="Castillo inflable" className="rounded-lg shadow-md" />
      </div>
    </section>
  );
}