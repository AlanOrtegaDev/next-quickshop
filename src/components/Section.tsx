interface SectionProps {
  readonly children: React.ReactNode;
  className?: string;
}

export default function Section({ children, className }: SectionProps) {
  return (
    <section className={`${className ? className + ' ' : ''}px-4`}>
      {children}
    </section>
  );
}
