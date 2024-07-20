import Header from '@/components/layouts/Header';

interface MainProps {
  readonly children: React.ReactNode;
}

export default function Mainlayout({ children }: MainProps) {
  return (
    <>
      <Header />
      <main className='pt-20'>{children}</main>
      <footer className="px-4"></footer>
    </>
  );
}
