import Image from 'next/image';
import Section from '../Section';

export default function Hero() {
  return (
    <div className="relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-t before:from-black/60 before:to-transparent">
      <Image
        className="w-full h-[600px] lg:h-[80vh] object-cover"
        src="/images/hero-background.webp"
        alt="Hero Background"
        sizes="100vw"
        width={500}
        height={500}
        priority
      />
      <Section className="absolute top-0 left-0 flex flex-col justify-center items-center h-full w-full text-white text-center animate-fade-up">
        <div className="max-w-3xl">
          <h1 className="text-2xl xl:text-3xl font-bold">
            Compra Rápido, Compra Inteligente
          </h1>
          <p className="xl:text-lg lg:hidden">
            Descubre una experiencia de compra en línea sin igual. En QuickShop,
            ofrecemos una amplia selección de productos a precios inmejorables.
          </p>
          <p className="hidden lg:block xl:text-lg">
            Descubre una experiencia de compra en línea sin igual. En QuickShop,
            ofrecemos una amplia selección de productos a precios inmejorables.
            Compra fácil y rápido con nuestra navegación intuitiva y entrega
            veloz. ¡Empieza a explorar hoy y encuentra todo lo que necesitas en
            un solo lugar!
          </p>
        </div>
      </Section>
    </div>
  );
}
