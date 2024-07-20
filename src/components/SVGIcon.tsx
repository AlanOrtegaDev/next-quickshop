interface SVGIconProps {
  className?: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  size?: number | string;
}

const SVGIcon = ({
  className,
  icon: IconComponent,
  size = '1.5rem',
}: SVGIconProps) => {
  return <IconComponent className={className} width={size} height={size} />;
};

export default SVGIcon;
