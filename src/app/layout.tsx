import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'QuickShop',
  description:
    '¡Bienvenido a QuickShop! Tu destino ideal para compras en línea rápidas, convenientes y sin complicaciones. Descubre una amplia gama de productos a precios inigualables, todo a un solo clic. Disfruta de una navegación sencilla, un proceso de compra seguro y una entrega rápida directamente a tu puerta. Compra de manera inteligente, compra rápido, con QuickShop.',
};

interface Props {
  readonly children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="es">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
